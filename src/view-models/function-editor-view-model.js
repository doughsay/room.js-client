import ko from 'knockout';

export class FunctionEditorViewModel {
  constructor(parentViewModel, socket, data) {
    // Properties

    this.parentViewModel = parentViewModel;
    this.socket = socket;
    this.objectId = data.objectId;
    this.src = data.src;
    this.name = data.name;

    // Observables

    this.code = ko.observable(this.src);
    this._code = ko.observable(this.src);
    this.aceBinding = {
      session: ko.observable(),
      value: this.code,
    };

    // Computeds

    this.dirty = ko.computed(() => this.code() !== this._code());
  }

  save() {
    const params = {
      name: this.name,
      src: this.code(),
      objectId: this.objectId,
    };

    if (!this.socket.connected) {
      window.alert([
        'The client tab that this editor was opened from has been',
        'closed.  You must keep that open for saving to work.',
      ].join(' '));
      return;
    }

    this.socket.emit('save-function', params, (response) => {
      if (response === 'saved') {
        this._code(this.code());
      } else {
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

export default FunctionEditorViewModel;
