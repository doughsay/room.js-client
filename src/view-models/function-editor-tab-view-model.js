/* global ko */
import FunctionEditorViewModel from './function-editor-view-model';

export default class FunctionEditorTabViewModel {
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

  templateBinding() {
    return { name: this.templateId, data: this.viewModel };
  }

  select() {
    this.parentViewModel.activeTab(this);
  }

  close() {
    if (this.viewModel.willClose()) {
      this.parentViewModel.closeTab(this);
    }
  }

  tabPaneClasses() {
    return ['tab-pane-editor', 'tab-pane-function-editor'];
  }

  hideIfOnlyMe() {
    return false;
  }
}
