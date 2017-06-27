import ko from 'knockout'
import CodeMirror from 'codemirror'

export default class FunctionEditorViewModel {
  constructor ({ win }, parentViewModel, socket, { objectId, src, name }) {
    // Properties

    this.window = win
    this.parentViewModel = parentViewModel
    this.socket = socket
    this.objectId = objectId
    this.src = src
    this.name = name
    this.codemirrorOptions = {
      lineNumbers: true,
      theme: 'tomorrow-night-bright',
      tabSize: 2,
      indentWithTabs: false,
      extraKeys: {
        Tab: cm => {
          if (cm.doc.somethingSelected()) {
            return CodeMirror.Pass
          }
          return cm.execCommand('insertSoftTab')
        }
      }
    }

    // Observables

    this.code = ko.observable(this.src)
    this._code = ko.observable(this.src)

    // Computeds

    this.dirty = ko.computed(() => this.code() !== this._code())
  }

  save () {
    const params = {
      name: this.name,
      src: this.code(),
      objectId: this.objectId
    }

    if (!this.socket.connected) {
      // eslint-disable-next-line no-alert
      this.window.alert([
        'The client tab that this editor was opened from has been',
        'closed.  You must keep that open for saving to work.'
      ].join(' '))
      return
    }

    this.socket.emit('save-function', params, response => {
      if (response === 'saved') {
        this._code(this.code())
      } else {
        // eslint-disable-next-line no-alert
        this.window.alert(response)
      }
    })
  }

  willClose () {
    const msg = [
      'Are you sure you want to close this tab?',
      'You have unsaved changes that will be lost.'
    ].join(' ')

    return this.dirty()
      // eslint-disable-next-line no-alert
      ? this.window.confirm(msg)
      : true
  }

  onKeyDown (_, event) {
    const key = typeof event.which === 'undefined' ? event.keyCode : event.which
    const meta = event.metaKey
    const ctrl = event.ctrlKey
    const sKey = key === 83
    const wKey = key === 87

    if ((ctrl && sKey) || (meta && sKey)) {
      this.save()
      return false
    } else if ((ctrl && wKey) || (meta && wKey)) {
      // this would be nice, but this is one shortcut you can't override...
      this.parentViewModel.close()
      return false
    }
    return true
  }
}
