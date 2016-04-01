import codemirrorBinding from './lib/ko-codemirror.js';
import uncloackBinding from './lib/ko-uncloak.js';

codemirrorBinding.register();
uncloackBinding.register();

export { TabsViewModel } from './view-models/tabs-view-model';
