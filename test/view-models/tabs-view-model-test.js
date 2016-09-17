const test = require('tape');

const ko = require('../../dist/js/knockout.js');
const { TabsViewModel } = require('../../dist/js/bundle.js').bundle;

test('TabsViewModel: can be initialized', t => {
  const viewModel = new TabsViewModel({ ko });

  t.ok(viewModel);
  t.end();
});
