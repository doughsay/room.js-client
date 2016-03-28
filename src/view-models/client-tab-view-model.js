/* global ko */
import ClientViewModel from './client-view-model';

export class ClientTabViewModel {
  constructor(parentViewModel) {
    // Properties

    this.parentViewModel = parentViewModel;
    this.templateId = 'client';
    this.viewModel = new ClientViewModel(this);
    this.dirty = false;

    // Observables

    this.name = ko.observable('Room.js');

    // Computeds

    this.active = ko.computed(this.computeActive.bind(this));
  }

  templateBinding() {
    return { name: this.templateId, data: this.viewModel };
  }

  computeActive() {
    return this.parentViewModel.activeTab() === this;
  }

  select() {
    this.parentViewModel.activeTab(this);
    this.viewModel.scrollToBottom();
    this.viewModel.inputHasFocus(true);
  }

  close() {
    if (this.viewModel.willClose()) {
      this.parentViewModel.closeTab(this);
    }
  }

  tabPaneClasses() {
    return ['tab-pane-client'];
  }

  hideIfOnlyMe() {
    return true;
  }
}

export default ClientTabViewModel;
