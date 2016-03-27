import ko from 'knockout';
import aceBinding from './lib/ko-ace.js';
import autoHeightBinding from './lib/ko-auto-height';

ko.bindingHandlers.ace = aceBinding;
ko.bindingHandlers.autoHeight = autoHeightBinding;

export { TabsViewModel } from './view-models/tabs-view-model';
export { default as ko } from 'knockout';
