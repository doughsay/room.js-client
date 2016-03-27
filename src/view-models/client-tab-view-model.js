import ko from 'knockout';
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

  computeActive() {
    return this.parentViewModel.activeTab() === this;
  }

  select() {
    this.parentViewModel.activeTab(this);
    // TODO: can we not?
    window.setTimeout(() => {
      this.viewModel.scrollToBottom();
      this.viewModel.inputHasFocus(true);
    }, 10);
  }

  close() {
    if (this.viewModel.willClose()) {
      this.parentViewModel.closeTab(this);
    }
  }
}

export default ClientTabViewModel;
