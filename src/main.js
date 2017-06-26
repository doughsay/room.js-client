import ko from 'knockout'
import codemirrorBinding from './lib/ko-codemirror.js'
import uncloackBinding from './lib/ko-uncloak.js'
import TabsViewModel from './view-models/tabs-view-model'
import addSaneOnUnloadHandler from './lib/add-sane-on-unload-handler'

const { CodeMirror, SERVER_URI } = window

codemirrorBinding.register(CodeMirror)
uncloackBinding.register()

const script = document.createElement('script')
script.src = SERVER_URI + '/socket.io/socket.io.js"></script>'
script.addEventListener('load', function () {
  const { alert, io } = window

  if (typeof io === 'undefined') {
    alert('Unable to connect to ' + SERVER_URI)
  } else {
    var deps = {
      win: window,
      doc: document,
      io: io,
      CodeMirror: CodeMirror,
      SERVER_URI: SERVER_URI
    }
    var viewModel = new TabsViewModel(deps)
    viewModel.newClientTab()
    ko.applyBindings(viewModel)
    addSaneOnUnloadHandler(window, function () { return viewModel.anyTabLoggedIn() })
  }
})

document.head.appendChild(script)
