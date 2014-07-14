var ko = require('knockout')

module.exports = function EditorViewModel(tabViewModel, socket, data) {
  var self = this
    , objectId = data.objectId
    , verb = data.verb

  self.tabViewModel = tabViewModel

  self.name = verb.name
  self.pattern = ko.observable(verb.pattern)
  self.dobjarg = ko.observable(verb.dobjarg)
  self.preparg = ko.observable(verb.preparg)
  self.iobjarg = ko.observable(verb.iobjarg)
  self.code = ko.observable(verb.code)

  // for dirty tracking
  self._pattern = ko.observable(verb.pattern)
  self._dobjarg = ko.observable(verb.dobjarg)
  self._preparg = ko.observable(verb.preparg)
  self._iobjarg = ko.observable(verb.iobjarg)
  self._code = ko.observable(verb.code)

  self.dirty = ko.computed(function() {
    return  self.pattern() !== self._pattern() ||
            self.dobjarg() !== self._dobjarg() ||
            self.preparg() !== self._preparg() ||
            self.iobjarg() !== self._iobjarg() ||
            self.code() !== self._code()
  })

  self.aceBinding = {
    session: ko.observable(),
    value: self.code
  }

  self.save = function() {
    var newVerb = { name: self.name
                  , pattern: self.pattern()
                  , dobjarg: self.dobjarg()
                  , preparg: self.preparg()
                  , iobjarg: self.iobjarg()
                  , code: self.code()
                  }
      , params =  { objectId: objectId
                  , verb: newVerb
                  }

    if (!socket.connected) {
      window.alert( ['The client tab that this editor was opened from has been'
                    ,'closed.  You must keep that open for saving to work.'
                    ].join(' '))
      return
    }

    socket.emit('save-verb', params, function(response) {
      if (response === 'saved') {
        self._pattern(self.pattern())
        self._dobjarg(self.dobjarg())
        self._preparg(self.preparg())
        self._iobjarg(self.iobjarg())
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
