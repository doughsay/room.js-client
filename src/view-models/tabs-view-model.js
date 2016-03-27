import ko from 'knockout';
import ClientTabViewModel from './client-tab-view-model';
import VerbEditorTabViewModel from './verb-editor-tab-view-model';
import FunctionEditorTabViewModel from './function-editor-tab-view-model';

let aceLoaded = false;
const aceSrc = 'http://rawgithub.com/ajaxorg/ace-builds/master/src/ace.js';

function injectScript(src, done) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.onload = done;
  script.src = src;
  document.getElementsByTagName('head')[0].appendChild(script);
  aceLoaded = true;
}

export class TabsViewModel {
  constructor() {
    // Observables

    this.activeTab = ko.observable();
    this.tabs = ko.observableArray([new ClientTabViewModel(this)]);
    this.editorHasLoaded = ko.observable(false);
    this.autoHeight = ko.observable(false);

    // Computeds

    this.activeTemplateId = ko.computed(this.computeActiveTemplateId.bind(this));
    this.activeViewModel = ko.computed(this.computeActiveViewModel.bind(this));
    this.hidden = ko.computed(this.computeHidden.bind(this));
    this.visible = ko.computed(this.computeVisible.bind(this));
    this.tabPaneClasses = ko.computed(this.computeTabPaneClasses.bind(this));
    this.templateBinding = ko.computed(this.computeTemplateBinding.bind(this));
    this.editorVisible = ko.computed(this.computeEditorVisible.bind(this));
    this.activeAceBinding = ko.computed(this.computeActiveAceBinding.bind(this));

    // Initialization

    this.activeTab(this.tabs()[0]);
  }

  computeActiveTemplateId() {
    const activeTab = this.activeTab();
    return activeTab ? activeTab.templateId : 'no-tabs';
  }

  computeActiveViewModel() {
    const activeTab = this.activeTab();
    return activeTab ? activeTab.viewModel : this;
  }

  computeHidden() {
    const l = this.tabs().length;
    const t = this.tabs()[0];

    return l === 0 || (l === 1 && t instanceof ClientTabViewModel);
  }

  computeVisible() {
    return !this.hidden();
  }

  computeTabPaneClasses() {
    const activeTab = this.activeTab();
    const classes = [];

    if (activeTab) {
      if (activeTab instanceof ClientTabViewModel) {
        classes.push('tab-pane-client');
      } else if (activeTab instanceof VerbEditorTabViewModel) {
        classes.push('tab-pane-editor', 'tab-pane-verb-editor');
      } else if (activeTab instanceof FunctionEditorTabViewModel) {
        classes.push('tab-pane-editor', 'tab-pane-function-editor');
      }
    }

    if (this.visible()) {
      classes.push('tabs-visible');
    }

    return classes.join(' ');
  }

  computeTemplateBinding() {
    return { name: this.activeTemplateId(), data: this.activeViewModel() };
  }

  computeEditorVisible() {
    const activeTab = this.activeTab();
    return activeTab
      ? (activeTab instanceof VerbEditorTabViewModel ||
        activeTab instanceof FunctionEditorTabViewModel)
      : false;
  }

  computeActiveAceBinding() {
    const activeTab = this.activeTab();

    if (activeTab && activeTab instanceof VerbEditorTabViewModel) {
      return activeTab.viewModel.aceBinding;
    } else if (activeTab && activeTab instanceof FunctionEditorTabViewModel) {
      return activeTab.viewModel.aceBinding;
    }

    return false;
  }

  newClientTab() {
    const newTab = new ClientTabViewModel(this);
    this.tabs.push(newTab);
    newTab.select();
  }

  // newEditTab(socket, data) {
  //   var addTab = function() {
  //     var newTab = new VerbEditorTabViewModel(this, socket, data)
  //     this.tabs.push(newTab)
  //     newTab.select()
  //     this.editorHasLoaded(true)
  //   }
  //
  //   if (!aceLoaded) {
  //     injectScript(aceSrc, addTab)
  //   }
  //   else {
  //     addTab()
  //   }
  // }

  newEditFunctionTab(socket, data) {
    const addTab = () => {
      const newTab = new FunctionEditorTabViewModel(this, socket, data);
      this.tabs.push(newTab);
      newTab.select();
      this.editorHasLoaded(true);
    };

    if (!aceLoaded) {
      injectScript(aceSrc, addTab);
    } else {
      addTab();
    }
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

    if (activeViewModel && activeViewModel.onKeyDown) {
      return activeViewModel.onKeyDown.apply(activeViewModel, args);
    }
    return true;
  }

  onKeyUp(...args) {
    const activeViewModel = this.activeViewModel();

    if (activeViewModel && activeViewModel.onKeyUp) {
      return activeViewModel.onKeyUp.apply(activeViewModel, args);
    }
    return true;
  }
}

export default TabsViewModel;
