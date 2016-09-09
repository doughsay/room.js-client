/* global ko */
import ClientTabViewModel from './client-tab-view-model';
import VerbEditorTabViewModel from './verb-editor-tab-view-model';
import FunctionEditorTabViewModel from './function-editor-tab-view-model';
import SearchViewModel from './search-view-model';

export default class TabsViewModel {
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
    this.anyTabLoggedIn = ko.computed(this.computedAnyTabLoggedIn.bind(this));

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

  computedAnyTabLoggedIn() {
    return this.tabs().reduce((result, tab) =>
      result || (tab.viewModel && tab.viewModel.loggedIn && tab.viewModel.loggedIn())
    , false);
  }

  tabPaneClasses() {
    return [];
  }

  newClientTab() {
    this.addAndSelectTab(new ClientTabViewModel(this));
  }

  newEditVerbTab(socket, { objectId, verb }) {
    if (this.selectExistingTab(`${objectId}.${verb.name}`)) {
      return;
    }
    this.addAndSelectTab(new VerbEditorTabViewModel(this, socket, { objectId, verb }));
  }

  newEditFunctionTab(socket, { objectId, name }) {
    if (this.selectExistingTab(`${objectId}.${name}`)) {
      return;
    }
    this.addAndSelectTab(new FunctionEditorTabViewModel(this, socket, { objectId, name }));
  }

  addAndSelectTab(tab) {
    this.tabs.push(tab);
    tab.select();
  }

  selectExistingTab(name) {
    let selected = false;

    this.tabs().forEach(tab => {
      if (tab.name() === name) {
        tab.select();
        selected = true;
      }
    });

    return selected;
  }

  closeTab(tab) {
    const l = this.tabs().length - 1;
    let i = this.tabs.indexOf(tab);

    if (i === l) { i -= 1; }
    this.tabs.remove(tab);
    if (l > 0) {
      this.tabs()[i].select();
    } else {
      this.activeTab(null);
    }
  }

  closeSameTabs(tab) {
    // Close other tabs with same names, only if they are not edited
    this.tabs().forEach(t => {
      if (t.name() === tab.name() && !t.dirty()) {
        this.closeTab(t);
      }
    });
  }

  onKeyDown(...args) {
    const event = args[1];
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
      return activeViewModel.onKeyDown(...args);
    }
    return true;
  }

  onKeyUp(...args) {
    const activeViewModel = this.activeViewModel();

    if (activeViewModel !== this && activeViewModel.onKeyUp) {
      return activeViewModel.onKeyUp(...args);
    }
    return true;
  }
}
