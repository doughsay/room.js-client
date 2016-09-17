import FunctionEditorViewModel from './function-editor-view-model';

export default class FunctionEditorTabViewModel {
  constructor(deps, parentViewModel, socket, data) {
    const { ko } = deps;

    // Properties

    this.parentViewModel = parentViewModel;
    this.templateId = 'function-editor';
    this.viewModel = new FunctionEditorViewModel(deps, this, socket, data);

    // Observables

    this.name = ko.observable(FunctionEditorTabViewModel.tabName(data));

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

  static tabName(data) {
    return `${data.objectId}.${data.name}`;
  }
}
