var ko = require('knockout')

module.exports = function FunctionEditorViewModel(tabViewModel, socket, data) {
  var self = this
    , objectId = data.objectId
    , src = data.src
    , name = data.name

  self.tabViewModel = tabViewModel

  self.name = name
  self.code = ko.observable(src)

  // for dirty tracking
  self._code = ko.observable(src)

  self.dirty = ko.computed(function() {
    return self.code() !== self._code()
  })

  self.aceBinding = {
    session: ko.observable(),
    value: self.code
  }

  self.save = function() {
    var params =  { name: self.name
                  , src: self.code()
                  , objectId: objectId
                  }

    if (!socket.connected) {
      window.alert( ['The client tab that this editor was opened from has been'
                    ,'closed.  You must keep that open for saving to work.'
                    ].join(' '))
      return
    }

    socket.emit('save-function', params, function(response) {
      if (response === 'saved') {
        self._code(self.code())
      }
      else {
        window.alert(response)
      }
    })
  }

  self.willClose = function() {
    var msg = [ 'Are you sure you want to close this tab?'
              , 'You have unsaved changes that will be lost.'
              ].join(' ')

    return self.dirty() ? window.confirm(msg) : true
  }

  self.onKeyDown = function(_, event) {
    var key = typeof event.which === 'undefined'  ? event.keyCode
                                                  : event.which
      , meta = event.metaKey
      , ctrl = event.ctrlKey
      , sKey = key === 83
      , wKey = key === 87

    if ((ctrl && sKey) || (meta && sKey)) {
      self.save()
      return false
    }
    else if ((ctrl && wKey) || (meta && wKey)) {
      // this would be nice, but this is one shortcut you can't override...
      self.tabViewModel.close()
      return false
    }
    return true
  }
}
