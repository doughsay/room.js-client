/* global ko, CodeMirror */

export class VerbEditorViewModel {
  constructor(parentViewModel, socket, { verb, objectId }) {
    // Properties

    this.parentViewModel = parentViewModel;
    this.socket = socket;
    this.objectId = objectId;
    this.name = verb.name;
    this.codemirrorOptions = {
      lineNumbers: true,
      theme: 'tomorrow-night-bright',
      tabSize: 2,
      indentWithTabs: false,
      extraKeys: {
        Tab: cm => {
          if (cm.doc.somethingSelected()) {
            return CodeMirror.Pass;
          }
          return cm.execCommand('insertSoftTab');
        },
      },
    };

    // Observables

    this.pattern = ko.observable(verb.pattern);
    this.dobjarg = ko.observable(verb.dobjarg);
    this.preparg = ko.observable(verb.preparg);
    this.iobjarg = ko.observable(verb.iobjarg);
    this.code = ko.observable(verb.code);

    // for dirty tracking
    this._pattern = ko.observable(verb.pattern);
    this._dobjarg = ko.observable(verb.dobjarg);
    this._preparg = ko.observable(verb.preparg);
    this._iobjarg = ko.observable(verb.iobjarg);
    this._code = ko.observable(verb.code);

    // Computeds

    this.dirty = ko.computed(this.computeDirty.bind(this));
  }

  computeDirty() {
    return this.pattern() !== this._pattern() ||
           this.dobjarg() !== this._dobjarg() ||
           this.preparg() !== this._preparg() ||
           this.iobjarg() !== this._iobjarg() ||
           this.code() !== this._code();
  }

  save() {
    const newVerb = {
      name: this.name,
      pattern: this.pattern(),
      dobjarg: this.dobjarg(),
      preparg: this.preparg(),
      iobjarg: this.iobjarg(),
      code: this.code(),
    };
    const params = {
      objectId: this.objectId,
      verb: newVerb,
    };

    if (!this.socket.connected) {
      // eslint-disable-next-line no-alert
      window.alert([
        'The client tab that this editor was opened from has been',
        'closed.  You must keep that open for saving to work.',
      ].join(' '));
      return;
    }

    this.socket.emit('save-verb', params, response => {
      if (response === 'saved') {
        this._pattern(this.pattern());
        this._dobjarg(this.dobjarg());
        this._preparg(this.preparg());
        this._iobjarg(this.iobjarg());
        this._code(this.code());
      } else {
        // eslint-disable-next-line no-alert
        window.alert(response);
      }
    });
  }

  willClose() {
    const msg = [
      'Are you sure you want to close this tab?',
      'You have unsaved changes that will be lost.',
    ].join(' ');

    return this.dirty()
      // eslint-disable-next-line no-alert
      ? window.confirm(msg)
      : true;
  }

  onKeyDown(_, event) {
    const key = typeof event.which === 'undefined' ? event.keyCode : event.which;
    const meta = event.metaKey;
    const ctrl = event.ctrlKey;
    const sKey = key === 83;
    const wKey = key === 87;

    if ((ctrl && sKey) || (meta && sKey)) {
      this.save();
      return false;
    } else if ((ctrl && wKey) || (meta && wKey)) {
      // this would be nice, but this is one shortcut you can't override...
      this.parentViewModel.close();
      return false;
    }
    return true;
  }
}

export default VerbEditorViewModel;
