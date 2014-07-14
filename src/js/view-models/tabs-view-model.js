var ko = require('knockout')
  , ClientViewModel = require('./client-view-model')
  , EditorViewModel = require('./editor-view-model')
  , FunctionEditorViewModel = require('./function-editor-view-model')
  , aceLoaded = false
  , aceSrc = '//rawgithub.com/ajaxorg/ace-builds/master/src/ace.js'

function injectScript(src, done) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.onload = done
  script.src = src
  document.getElementsByTagName('head')[0].appendChild(script)
}

function ClientTabViewModel(parentViewModel) {
  var self = this

  self.parentViewModel = parentViewModel
  self.name = ko.observable('Room.js')
  self.templateId = 'client'
  self.viewModel = new ClientViewModel(self)

  self.active = ko.computed(function() {
    return parentViewModel.activeTab() === self
  })

  self.dirty = false;

  self.select = function() {
    parentViewModel.activeTab(self)
    window.setTimeout(function() {
      self.viewModel.scrollToBottom()
      self.viewModel.inputHasFocus(true)
    }, 10) // TODO ugh...
  }

  self.close = function() {
    if (self.viewModel.willClose()) {
      self.parentViewModel.closeTab(self)
    }
  }
}

function EditorTabViewModel(parentViewModel, socket, data) {
  var self = this

  self.parentViewModel = parentViewModel
  self.name = ko.observable(data.objectId + '.' + data.verb.name)
  self.templateId = 'editor'
  self.viewModel = new EditorViewModel(self, socket, data)

  self.active = ko.computed(function() {
    return parentViewModel.activeTab() === self
  })

  self.dirty = ko.computed(function() {
    return self.viewModel.dirty()
  })

  self.select = function() {
    parentViewModel.activeTab(self)
    window.setTimeout(function() {
      // jiggle
      self.parentViewModel.autoHeight(false)
      self.parentViewModel.autoHeight(true)
    }, 50)
  }

  self.close = function() {
    if (self.viewModel.willClose()) {
      self.parentViewModel.closeTab(self)
    }
  }
}

function FunctionEditorTabViewModel(parentViewModel, socket, data) {
  var self = this

  self.parentViewModel = parentViewModel
  self.name = ko.observable(data.objectId + '.' + data.name)
  self.templateId = 'function-editor'
  self.viewModel = new FunctionEditorViewModel(self, socket, data)

  self.active = ko.computed(function() {
    return parentViewModel.activeTab() === self
  })

  self.dirty = ko.computed(function() {
    return self.viewModel.dirty()
  })

  self.select = function() {
    parentViewModel.activeTab(self)
    window.setTimeout(function() {
      // jiggle
      self.parentViewModel.autoHeight(false)
      self.parentViewModel.autoHeight(true)
    }, 50)
  }

  self.close = function() {
    if (self.viewModel.willClose()) {
      self.parentViewModel.closeTab(self)
    }
  }
}

module.exports = function TabsViewModel() {
  var self = this

  self.activeTab = ko.observable()
  self.tabs = ko.observableArray([new ClientTabViewModel(self)])
  self.editorHasLoaded = ko.observable(false)

  self.activeTab(self.tabs()[0])

  self.activeTemplateId = ko.computed(function() {
    var activeTab = self.activeTab()
    return activeTab ? activeTab.templateId : 'no-tabs'
  })

  self.activeViewModel = ko.computed(function() {
    var activeTab = self.activeTab()
    return activeTab ? activeTab.viewModel : self
  })

  self.autoHeight = ko.observable(false)

  // Tab bar is hidden if there are no tabs, or if the only tab is a client tab.
  self.hidden = ko.computed(function() {
    var l = self.tabs().length
      , t = self.tabs()[0]

    return l === 0 || (l === 1 && t instanceof ClientTabViewModel)
  })

  self.visible = ko.computed(function() {
    return !self.hidden()
  })

  self.tabPaneClasses = ko.computed(function() {
    var activeTab = self.activeTab()
      , classes = []

    if (activeTab) {
      if (activeTab instanceof ClientTabViewModel) {
        classes.push('tab-pane-client')
      }
      else if (activeTab instanceof EditorTabViewModel) {
        classes.push('tab-pane-editor', 'tab-pane-verb-editor')
      }
      else if (activeTab instanceof FunctionEditorTabViewModel) {
        classes.push('tab-pane-editor', 'tab-pane-function-editor')
      }
    }

    if (self.visible()) {
      classes.push('tabs-visible')
    }

    return classes.join(' ')
  })

  self.templateBinding = ko.computed(function() {
    return  { name: self.activeTemplateId()
            , data: self.activeViewModel()
            }
  }).extend({throttle: 1})

  self.editorVisible = ko.computed(function() {
    var activeTab = self.activeTab()
    return activeTab  ? (  activeTab instanceof EditorTabViewModel
                        || activeTab instanceof FunctionEditorTabViewModel
                        )
                      : false
  })

  self.activeAceBinding = ko.computed(function() {
    var activeTab = self.activeTab()
    if (activeTab && activeTab instanceof EditorTabViewModel) {
      return activeTab.viewModel.aceBinding
    }
    else if (activeTab && activeTab instanceof FunctionEditorTabViewModel) {
      return activeTab.viewModel.aceBinding
    }
    else {
      return false
    }
  })

  self.newClientTab = function() {
    var newTab = new ClientTabViewModel(self)
    self.tabs.push(newTab)
    newTab.select()
  }

  self.newEditTab = function(socket, data) {
    var addTab = function() {
      var newTab = new EditorTabViewModel(self, socket, data)
      self.tabs.push(newTab)
      newTab.select()
      self.editorHasLoaded(true)
    }

    if (!aceLoaded) {
      injectScript(aceSrc, addTab)
    }
    else {
      addTab()
    }
  }

  self.newEditFunctionTab = function(socket, data) {
    var addTab = function() {
      var newTab = new FunctionEditorTabViewModel(self, socket, data)
      self.tabs.push(newTab)
      newTab.select()
      self.editorHasLoaded(true)
    }

    if (!aceLoaded) {
      injectScript(aceSrc, addTab)
    }
    else {
      addTab()
    }
  }

  self.closeTab = function(tab) {
    var i = self.tabs.indexOf(tab)
      , l = self.tabs().length - 1

    if (i === l) { i-- }
    self.tabs.remove(tab)
    if (l > 0) {
      self.tabs()[i].select()
    }
    else {
      self.activeTab(null)
    }
  }

  self.onKeyDown = function() {
    var activeViewModel = self.activeViewModel()

    if (activeViewModel && activeViewModel.onKeyDown) {
      return activeViewModel.onKeyDown.apply(activeViewModel, arguments)
    }
    return true
  }

  self.onKeyUp = function() {
    var activeViewModel = self.activeViewModel()

    if (activeViewModel && activeViewModel.onKeyUp) {
      return activeViewModel.onKeyUp.apply(activeViewModel, arguments)
    }
    return true
  }
}
