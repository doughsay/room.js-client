import test from 'ava'
import { win, doc, io } from '../helpers/mocks'
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
