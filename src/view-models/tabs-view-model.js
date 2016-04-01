/* global ko */
import ClientTabViewModel from './client-tab-view-model';
import VerbEditorTabViewModel from './verb-editor-tab-view-model';
import FunctionEditorTabViewModel from './function-editor-tab-view-model';
import SearchViewModel from './search-view-model';

export class TabsViewModel {
  constructor() {
    // Observables

    this.activeTab = ko.observable();
    this.tabs = ko.observableArray([new ClientTabViewModel(this)]);
    this.searchViewModel = ko.observable();

    // Computeds

    this.activeViewModel = ko.computed(this.computeActiveViewModel.bind(this));
    this.hidden = ko.computed(this.computeHidden.bind(this));
    this.visible = ko.computed(this.computeVisible.bind(this));
    this.tabPaneClasses = ko.computed(this.computeTabPaneClasses.bind(this));
    this.templateBinding = ko.computed(this.computeTemplateBinding.bind(this));
    this.activeSocket = ko.computed(this.computeActiveSocket.bind(this));

    // Initialization

    this.activeTab(this.tabs()[0]);
  }

  computeActiveViewModel() {
    const searchViewModel = this.searchViewModel();
    if (searchViewModel) {
      return searchViewModel;
    }
    const activeTab = this.activeTab();
    return activeTab ? activeTab.viewModel : this;
  }

  computeHidden() {
    const l = this.tabs().length;
    const t = this.tabs()[0];

    return l === 0 || (l === 1 && t.hideIfOnlyMe());
  }

  computeVisible() {
    return !this.hidden();
  }

  computeTabPaneClasses() {
    const activeTab = this.activeTab();
    let classes;

    if (activeTab) {
      classes = activeTab.tabPaneClasses();
    } else {
      classes = [];
    }

    if (this.visible()) {
      classes.push('tabs-visible');
    }

    return classes.join(' ');
  }

  computeTemplateBinding() {
    const activeTab = this.activeTab();
    if (activeTab) {
      return activeTab.templateBinding();
    }
    return { name: 'no-tabs', data: this };
  }

  computeActiveSocket() {
    const activeViewModel = this.activeViewModel();
    return activeViewModel.socket;
  }

  tabPaneClasses() {
    return [];
  }

  newClientTab() {
    const newTab = new ClientTabViewModel(this);
    this.tabs.push(newTab);
    newTab.select();
  }

  newEditVerbTab(socket, data) {
    const newTab = new VerbEditorTabViewModel(this, socket, data);
    this.tabs.push(newTab);
    newTab.select();
  }

  newEditFunctionTab(socket, data) {
    const newTab = new FunctionEditorTabViewModel(this, socket, data);
    this.tabs.push(newTab);
    newTab.select();
  }

  closeTab(tab) {
    const l = this.tabs().length - 1;
    let i = this.tabs.indexOf(tab);

    if (i === l) { i--; }
    this.tabs.remove(tab);
    if (l > 0) {
      this.tabs()[i].select();
    } else {
      this.activeTab(null);
    }
  }

  onKeyDown(...args) {
    const activeViewModel = this.activeViewModel();
    const key = typeof event.which === 'undefined' ? event.keyCode : event.which;
    const meta = event.metaKey;
    const ctrl = event.ctrlKey;
    const pKey = key === 80;

    // open the search box on cmd+p (or ctrl+p) if it's not already open
    if ((meta && pKey) || (ctrl && pKey)) {
      if (!this.searchViewModel()) {
        this.searchViewModel(new SearchViewModel(this, this.activeSocket()));
      }
      return false;
    }

    if (activeViewModel !== this && activeViewModel.onKeyDown) {
      return activeViewModel.onKeyDown.apply(activeViewModel, args);
    }
    return true;
  }

  onKeyUp(...args) {
    const activeViewModel = this.activeViewModel();

    if (activeViewModel !== this && activeViewModel.onKeyUp) {
      return activeViewModel.onKeyUp.apply(activeViewModel, args);
    }
    return true;
  }
}

export default TabsViewModel;
