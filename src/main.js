import codemirrorBinding from './lib/ko-codemirror.js';
import uncloackBinding from './lib/ko-uncloak.js';

codemirrorBinding.register();
uncloackBinding.register();

export { default as TabsViewModel } from './view-models/tabs-view-model';
export { default as addSaneOnUnloadHandler } from './lib/add-sane-on-unload-handler';
