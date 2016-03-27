import ko from 'knockout';
import FunctionEditorViewModel from './function-editor-view-model';

export class FunctionEditorTabViewModel {
  constructor(parentViewModel, socket, data) {
    // Properties

    this.parentViewModel = parentViewModel;
    this.templateId = 'function-editor';
    this.viewModel = new FunctionEditorViewModel(this, socket, data);

    // Observables

    this.name = ko.observable(`${data.objectId}.${data.name}`);

    // Computeds

    this.active = ko.computed(() => parentViewModel.activeTab() === this);
    this.dirty = ko.computed(() => this.viewModel.dirty());
  }

  select() {
    this.parentViewModel.activeTab(this);
    // TODO: can we not?
    window.setTimeout(() => {
      // jiggle
      this.parentViewModel.autoHeight(false);
      this.parentViewModel.autoHeight(true);
    }, 50);
  }

  close() {
    if (this.viewModel.willClose()) {
      this.parentViewModel.closeTab(this);
    }
  }
}

export default FunctionEditorTabViewModel;
