const test = require('tape')

const ko = require('../../dist/js/knockout.js')
const { TabsViewModel } = require('../../dist/js/bundle.js').bundle

const { win, doc, io, CodeMirror, linkifyHtml } = require('../helpers/mocks')

test('TabsViewModel: can be initialized', t => {
  const viewModel = new TabsViewModel({ ko })

  t.ok(viewModel)
  t.end()
})

test('TabsViewModel: can add a client tab', t => {
  const viewModel = new TabsViewModel({ ko, win, doc, io, linkifyHtml })

  viewModel.newClientTab()

  t.equal(viewModel.tabs().length, 1)
  t.end()
})
