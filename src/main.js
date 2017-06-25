import codemirrorBinding from './lib/ko-codemirror.js'
import uncloackBinding from './lib/ko-uncloak.js'
import TabsViewModel from './view-models/tabs-view-model'
import addSaneOnUnloadHandler from './lib/add-sane-on-unload-handler'

const { ko, CodeMirror, SERVER_URI } = window

codemirrorBinding.register(ko, CodeMirror)
uncloackBinding.register(ko)

const script = document.createElement('script')
script.src = SERVER_URI + '/socket.io/socket.io.js"></script>'
script.addEventListener('load', function () {
  const { alert, io, linkifyHtml } = window

  if (typeof io === 'undefined') {
    alert('Unable to connect to ' + SERVER_URI)
  } else {
    var deps = {
      win: window,
      doc: document,
      ko: ko,
      io: io,
      CodeMirror: CodeMirror,
      linkifyHtml: linkifyHtml,
      SERVER_URI: SERVER_URI
    }
    var viewModel = new TabsViewModel(deps)
    viewModel.newClientTab()
    ko.applyBindings(viewModel)
    addSaneOnUnloadHandler(window, function () { return viewModel.anyTabLoggedIn() })
  }
})

document.head.appendChild(script)
