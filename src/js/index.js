var ko = require('knockout')
  , rjsStrings = require('rjs-strings').attach(window)
  , TabsViewModel = require('./view-models/tabs-view-model')

// custom binding handlers
require('./lib/ko-auto-height')
require('./lib/ko-ace')

function initClient() {
  window.view = new TabsViewModel()
  ko.applyBindings(window.view)
}

document.addEventListener('DOMContentLoaded', initClient)
