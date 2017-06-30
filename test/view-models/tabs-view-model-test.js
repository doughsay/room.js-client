import test from 'ava'
import { win, doc, io, socket } from '../helpers/mocks'
import TabsViewModel from '../../src/view-models/tabs-view-model'

test('TabsViewModel: can be initialized', t => {
  const viewModel = new TabsViewModel({})

  t.truthy(viewModel)
})

test('TabsViewModel: can add a client tab', t => {
  const viewModel = new TabsViewModel({ win, doc, io })

  viewModel.newClientTab()

  t.is(viewModel.tabs().length, 1)
})

test('TabsViewModel: can add a function editor tab', t => {
  const viewModel = new TabsViewModel({ win, doc, io })
  const data = {
    objectId: 'foo',
    src: 'function bar() {}',
    name: 'bar'
  }

  viewModel.newEditFunctionTab(socket, data)

  t.is(viewModel.tabs().length, 1)
})

test('TabsViewModel: can add a verb editor tab', t => {
  const viewModel = new TabsViewModel({ win, doc, io })
  const data = {
    objectId: 'foo',
    verb: {
      pattern: 'bar',
      dobjarg: 'any',
      preparg: 'any',
      iobjarg: 'any',
      code: 'function bar() {}'
    }
  }

  viewModel.newEditVerbTab(socket, data)

  t.is(viewModel.tabs().length, 1)
})

test('TabsViewModel: can close a client tab', t => {
  const viewModel = new TabsViewModel({ win, doc, io })
  viewModel.newClientTab()
  const tab = viewModel.tabs()[0]

  viewModel.closeTab(tab)

  t.is(viewModel.tabs().length, 0)
})

test('TabsViewModel: can close a function editor tab', t => {
  const viewModel = new TabsViewModel({ win, doc, io })
  const data = {
    objectId: 'foo',
    src: 'function bar() {}',
    name: 'bar'
  }
  viewModel.newEditFunctionTab(socket, data)
  const tab = viewModel.tabs()[0]

  viewModel.closeTab(tab)

  t.is(viewModel.tabs().length, 0)
})

test('TabsViewModel: can close a verb editor tab', t => {
  const viewModel = new TabsViewModel({ win, doc, io })
  const data = {
    objectId: 'foo',
    verb: {
      pattern: 'bar',
      dobjarg: 'any',
      preparg: 'any',
      iobjarg: 'any',
      code: 'function bar() {}'
    }
  }
  viewModel.newEditVerbTab(socket, data)
  const tab = viewModel.tabs()[0]

  viewModel.closeTab(tab)

  t.is(viewModel.tabs().length, 0)
})
