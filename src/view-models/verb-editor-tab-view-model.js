import ko from 'knockout';
import VerbEditorViewModel from './verb-editor-view-model';

export class VerbEditorTabViewModel {
  constructor(parentView, socket, data) {
    // Properties

    this.parentView = parentView;
    this.templateId = 'editor';
    this.view = new VerbEditorViewModel(this, socket, data);

    // Observables

    this.name = ko.observable(`${data.objectId}.${data.verb.name}`);

    // Computeds

    this.active = ko.computed(() => parentView.activeTab() === this);
    this.dirty = ko.computed(() => this.view.dirty());
  }

  select() {
    this.parentView.activeTab(this);
    // TODO: can we not?
    window.setTimeout(() => {
      // jiggle
      this.parentViewModel.autoHeight(false);
      this.parentViewModel.autoHeight(true);
    }, 50);
  }

  close() {
    if (this.view.willClose()) {
      this.parentView.closeTab(this);
    }
  }
}

export default VerbEditorTabViewModel;
