/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _koCodemirror = __webpack_require__(1);

var _koCodemirror2 = _interopRequireDefault(_koCodemirror);

var _koUncloak = __webpack_require__(2);

var _koUncloak2 = _interopRequireDefault(_koUncloak);

var _tabsViewModel = __webpack_require__(3);

var _tabsViewModel2 = _interopRequireDefault(_tabsViewModel);

var _addSaneOnUnloadHandler = __webpack_require__(13);

var _addSaneOnUnloadHandler2 = _interopRequireDefault(_addSaneOnUnloadHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    ko = _window.ko,
    CodeMirror = _window.CodeMirror,
    SERVER_URI = _window.SERVER_URI;


_koCodemirror2.default.register(ko, CodeMirror);
_koUncloak2.default.register(ko);

var script = document.createElement('script');
script.src = SERVER_URI + '/socket.io/socket.io.js"></script>';
script.addEventListener('load', function () {
  var _window2 = window,
      alert = _window2.alert,
      io = _window2.io,
      linkifyHtml = _window2.linkifyHtml;


  if (typeof io === 'undefined') {
    alert('Unable to connect to ' + SERVER_URI);
  } else {
    var deps = {
      win: window,
      doc: document,
      ko: ko,
      io: io,
      CodeMirror: CodeMirror,
      linkifyHtml: linkifyHtml,
      SERVER_URI: SERVER_URI
    };
    var viewModel = new _tabsViewModel2.default(deps);
    viewModel.newClientTab();
    ko.applyBindings(viewModel);
    (0, _addSaneOnUnloadHandler2.default)(window, function () {
      return viewModel.anyTabLoggedIn();
    });
  }
});

document.head.appendChild(script);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function register(ko, CodeMirror) {
  function init(element, valueAccessor, allBindings) {
    var options = allBindings.get('codemirrorOptions') || {};
    options.value = ko.unwrap(valueAccessor());
    var editor = CodeMirror(element, options); // eslint-disable-line new-cap

    editor.on('change', function (cm) {
      var value = valueAccessor();
      value(cm.getValue());
    });

    element.editor = editor;
  }

  function update(element, valueAccessor) {
    var observedValue = ko.unwrap(valueAccessor());

    if (element.editor) {
      var changed = observedValue !== element.editor.getValue();

      if (changed) {
        element.editor.setValue(observedValue);
        element.editor.refresh();
      }
    }
  }

  ko.bindingHandlers.codemirror = { init: init, update: update };
}

exports.default = { register: register };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function register(ko) {
  function init(element) {
    element.classList.remove('cloak');
  }

  ko.bindingHandlers.uncloak = { init: init };
}

exports.default = { register: register };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clientTabViewModel = __webpack_require__(4);

var _clientTabViewModel2 = _interopRequireDefault(_clientTabViewModel);

var _verbEditorTabViewModel = __webpack_require__(8);

var _verbEditorTabViewModel2 = _interopRequireDefault(_verbEditorTabViewModel);

var _functionEditorTabViewModel = __webpack_require__(10);

var _functionEditorTabViewModel2 = _interopRequireDefault(_functionEditorTabViewModel);

var _searchViewModel = __webpack_require__(12);

var _searchViewModel2 = _interopRequireDefault(_searchViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TabsViewModel = function () {
  function TabsViewModel(deps) {
    _classCallCheck(this, TabsViewModel);

    var ko = deps.ko;

    this.deps = deps;

    // Observables

    this.activeTab = ko.observable();
    this.tabs = ko.observableArray([]);
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

  _createClass(TabsViewModel, [{
    key: 'computeActiveViewModel',
    value: function computeActiveViewModel() {
      var searchViewModel = this.searchViewModel();
      if (searchViewModel) {
        return searchViewModel;
      }
      var activeTab = this.activeTab();
      return activeTab ? activeTab.viewModel : this;
    }
  }, {
    key: 'computeHidden',
    value: function computeHidden() {
      var l = this.tabs().length;
      var t = this.tabs()[0];

      return l === 0 || l === 1 && t.hideIfOnlyMe();
    }
  }, {
    key: 'computeVisible',
    value: function computeVisible() {
      return !this.hidden();
    }
  }, {
    key: 'computeTabPaneClasses',
    value: function computeTabPaneClasses() {
      var activeTab = this.activeTab();
      var classes = void 0;

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
  }, {
    key: 'computeTemplateBinding',
    value: function computeTemplateBinding() {
      var activeTab = this.activeTab();
      if (activeTab) {
        return activeTab.templateBinding();
      }
      return { name: 'no-tabs', data: this };
    }
  }, {
    key: 'computeActiveSocket',
    value: function computeActiveSocket() {
      var activeViewModel = this.activeViewModel();
      return activeViewModel.socket;
    }
  }, {
    key: 'computedAnyTabLoggedIn',
    value: function computedAnyTabLoggedIn() {
      return this.tabs().reduce(function (result, tab) {
        return result || tab.viewModel && tab.viewModel.loggedIn && tab.viewModel.loggedIn();
      }, false);
    }
  }, {
    key: 'tabPaneClasses',
    value: function tabPaneClasses() {
      return [];
    }
  }, {
    key: 'newClientTab',
    value: function newClientTab() {
      this.addAndSelectTab(new _clientTabViewModel2.default(this.deps, this));
    }
  }, {
    key: 'newEditVerbTab',
    value: function newEditVerbTab() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.newEditTab.apply(this, [_verbEditorTabViewModel2.default].concat(args));
    }
  }, {
    key: 'newEditFunctionTab',
    value: function newEditFunctionTab() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.newEditTab.apply(this, [_functionEditorTabViewModel2.default].concat(args));
    }
  }, {
    key: 'newEditTab',
    value: function newEditTab(EditorTabViewModel, socket, data) {
      var tabName = EditorTabViewModel.tabName(data);

      if (this.selectExistingTab(tabName)) {
        return;
      }

      this.addAndSelectTab(new EditorTabViewModel(this.deps, this, socket, data));
    }
  }, {
    key: 'addAndSelectTab',
    value: function addAndSelectTab(tab) {
      this.tabs.push(tab);
      tab.select();
    }
  }, {
    key: 'selectExistingTab',
    value: function selectExistingTab(name) {
      var selected = false;

      this.tabs().forEach(function (tab) {
        if (tab.name() === name) {
          tab.select();
          selected = true;
        }
      });

      return selected;
    }
  }, {
    key: 'closeTab',
    value: function closeTab(tab) {
      var l = this.tabs().length - 1;
      var i = this.tabs.indexOf(tab);

      if (i === l) {
        i -= 1;
      }
      this.tabs.remove(tab);
      if (l > 0) {
        this.tabs()[i].select();
      } else {
        this.activeTab(null);
      }
    }
  }, {
    key: 'closeSameTabs',
    value: function closeSameTabs(tab) {
      var _this = this;

      // Close other tabs with same names, only if they are not edited
      this.tabs().forEach(function (t) {
        if (t.name() === tab.name() && !t.dirty()) {
          _this.closeTab(t);
        }
      });
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown() {
      var event = arguments.length <= 1 ? undefined : arguments[1];
      var activeViewModel = this.activeViewModel();
      var key = typeof event.which === 'undefined' ? event.keyCode : event.which;
      var meta = event.metaKey;
      var ctrl = event.ctrlKey;
      var pKey = key === 80;

      // open the search box on cmd+p (or ctrl+p) if it's not already open
      if (meta && pKey || ctrl && pKey) {
        if (!this.searchViewModel()) {
          this.searchViewModel(new _searchViewModel2.default(this.deps, this, this.activeSocket()));
        }
        return false;
      }

      if (activeViewModel !== this && activeViewModel.onKeyDown) {
        return activeViewModel.onKeyDown.apply(activeViewModel, arguments);
      }
      return true;
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp() {
      var activeViewModel = this.activeViewModel();

      if (activeViewModel !== this && activeViewModel.onKeyUp) {
        return activeViewModel.onKeyUp.apply(activeViewModel, arguments);
      }
      return true;
    }
  }]);

  return TabsViewModel;
}();

exports.default = TabsViewModel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clientViewModel = __webpack_require__(5);

var _clientViewModel2 = _interopRequireDefault(_clientViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClientTabViewModel = function () {
  function ClientTabViewModel(deps, parentViewModel) {
    _classCallCheck(this, ClientTabViewModel);

    var ko = deps.ko;

    // Properties

    this.parentViewModel = parentViewModel;
    this.templateId = 'client';
    this.viewModel = new _clientViewModel2.default(deps, this);
    this.dirty = false;

    // Observables

    this.name = ko.observable('Room.js');

    // Computeds

    this.active = ko.computed(this.computeActive.bind(this));
  }

  _createClass(ClientTabViewModel, [{
    key: 'templateBinding',
    value: function templateBinding() {
      return { name: this.templateId, data: this.viewModel };
    }
  }, {
    key: 'computeActive',
    value: function computeActive() {
      return this.parentViewModel.activeTab() === this;
    }
  }, {
    key: 'select',
    value: function select() {
      this.parentViewModel.activeTab(this);
      this.viewModel.scrollToBottom();
      this.viewModel.inputHasFocus(true);
    }
  }, {
    key: 'close',
    value: function close() {
      if (this.viewModel.willClose()) {
        this.parentViewModel.closeTab(this);
      }
    }
  }, {
    key: 'tabPaneClasses',
    value: function tabPaneClasses() {
      return ['tab-pane-client'];
    }
  }, {
    key: 'hideIfOnlyMe',
    value: function hideIfOnlyMe() {
      return true;
    }
  }]);

  return ClientTabViewModel;
}();

exports.default = ClientTabViewModel;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ansi_up = __webpack_require__(6);

var _ansi_up2 = _interopRequireDefault(_ansi_up);

var _colors = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClientViewModel = function () {
  function ClientViewModel(deps, parentViewModel) {
    var _this = this;

    _classCallCheck(this, ClientViewModel);

    var SERVER_URI = deps.SERVER_URI,
        doc = deps.doc,
        win = deps.win,
        ko = deps.ko,
        io = deps.io,
        linkifyHtml = deps.linkifyHtml;
    var observable = ko.observable,
        observableArray = ko.observableArray,
        computed = ko.computed;


    this.window = win;
    this.linkifyHtml = linkifyHtml;
    this.ansiUp = new _ansi_up2.default();
    this.ansiUp.use_classes = true;

    // Elements

    // Scrolling element is body on Webkit-based browsers,
    // html on Firefox and Internet Explorer. All recent
    // browsers tend to support document.scrollingElement from
    // CSSOM working draft.
    this.$scrollingElement = doc.scrollingElement;
    if (typeof this.$scrollingElement === 'undefined') {
      this.$scrollingElement = doc.querySelector('html');
    }

    // Properties

    this.parentViewModel = parentViewModel;
    this.socket = io.connect(SERVER_URI);
    this.history = [];
    this.inputCallback = null;

    // Observables

    this.lines = observableArray([]);
    this.command = observable('');
    this.inputType = observable('text');
    this.promptStr = observable('');
    this.rightPromptStr = observable('');
    this.inputHasFocus = observable(true);
    this.loggedIn = observable(false);
    this.playing = observable(false);

    // client config
    this.maxLines = observable(this.readConfig('maxLines') || 1000);
    this.maxHistory = observable(this.readConfig('maxHistory') || 1000);
    this.echo = observable(this.readConfig('echo') || false);
    this.space = observable(this.readConfig('space') || false);

    // Computeds

    this.promptFormatted = computed(function () {
      return _this.colorize(_this.composedPrompt());
    });
    this.rightPromptFormatted = computed(function () {
      return _this.colorize(_this.rightPromptStr());
    });

    // Subscribers

    this.maxLines.subscribe(function (max) {
      if (_this.lines().length > max) {
        _this.truncateLines();
      }
    });

    this.maxHistory.subscribe(function (max) {
      if (_this.history().length > max) {
        _this.truncateHistory();
      }
    });

    this.echo.subscribe(function (echo) {
      _this.writeConfig('echo', echo);
    });
    this.space.subscribe(function (space) {
      _this.writeConfig('space', space);
    });

    // Socket Setup

    this.socket.on('connect', this.onConnect.bind(this));
    this.socket.on('connecting', this.onConnecting.bind(this));
    this.socket.on('disconnect', this.onDisconnect.bind(this));
    this.socket.on('connect_failed', this.onConnectFailed.bind(this));
    this.socket.on('error', this.onError.bind(this));
    this.socket.on('reconnect_failed', this.onReconnectFailed.bind(this));
    this.socket.on('reconnect', this.onReconnect.bind(this));
    this.socket.on('reconnecting', this.onReconnecting.bind(this));
    this.socket.on('output', this.onOutput.bind(this));
    this.socket.on('set-prompt', this.onSetPrompt.bind(this));
    this.socket.on('set-right-prompt', this.onSetRightPrompt.bind(this));
    this.socket.on('request-input', this.onRequestInput.bind(this));
    this.socket.on('edit-verb', this.onEditVerb.bind(this));
    this.socket.on('edit-function', this.onEditFunction.bind(this));
    this.socket.on('login', this.onLogin.bind(this));
    this.socket.on('logout', this.onLogout.bind(this));
    this.socket.on('playing', this.onPlaying.bind(this));
    this.socket.on('quit', this.onQuit.bind(this));

    this.addLine((0, _colors.gray)('Connecting...'));
  }

  _createClass(ClientViewModel, [{
    key: 'composedPrompt',
    value: function composedPrompt() {
      var optionalStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return (this.promptStr() + ' > ' + optionalStr).trim();
    }
  }, {
    key: 'setPrompt',
    value: function setPrompt(str, type) {
      this.promptStr(str);
      if (type) {
        this.inputType(type);
      }
    }
  }, {
    key: 'setRightPrompt',
    value: function setRightPrompt(str) {
      this.rightPromptStr(str);
    }
  }, {
    key: 'sendCommand',
    value: function sendCommand() {
      var command = this.command().trim();

      if (!command) {
        return;
      }

      this.echoCommand(command);
      this.addToHistory(command);

      if (this.handleClientCommand(command)) {
        // done, client handled command
      } else if (!this.socket.connected) {
        this.addLine((0, _colors.boldRed)('Not connected.'));
      } else if (this.inputCallback) {
        this.handleInputCallback(command);
      } else {
        this.socket.emit('input', command);
      }

      this.command('');
    }
  }, {
    key: 'echoCommand',
    value: function echoCommand(command) {
      if (!this.echo() || this.inputType() === 'password') {
        return;
      }
      this.addLine(this.composedPrompt(command));
      if (this.space()) {
        this.addLine(' ');
      }
    }
  }, {
    key: 'addToHistory',
    value: function addToHistory(command) {
      if (this.inputType() === 'password') {
        return;
      }
      this.history.unshift(command);
      if (this.history.length > this.maxHistory()) {
        this.truncateHistory();
      }
      this.currentHistory = -1;
    }
  }, {
    key: 'handleClientCommand',
    value: function handleClientCommand(command) {
      switch (command) {
        case '.clear':
          this.lines([]);return true;
        case '.connect':
          this.reconnectSocket();return true;
        case '.disconnect':
          this.disconnectSocket();return true;
        case '.echo on':
          this.echo(true);return true;
        case '.echo off':
          this.echo(false);return true;
        case '.space on':
          this.space(true);return true;
        case '.space off':
          this.space(false);return true;
        case '.new tab':
          this.parentViewModel.parentViewModel.newClientTab();return true;
        case '.close tab':
          this.parentViewModel.close();return true;
        default:
          return false;
      }
    }
  }, {
    key: 'handleInputCallback',
    value: function handleInputCallback(command) {
      var callback = this.inputCallback;
      this.inputCallback = null;
      callback(command);
    }
  }, {
    key: 'addLine',
    value: function addLine(line) {
      this.lines.push(this.colorize(line));
      this.scrollToBottom();
    }
  }, {
    key: 'disconnectSocket',
    value: function disconnectSocket() {
      if (this.socket.connected) {
        this.socket.disconnect();
      } else {
        this.addLine((0, _colors.boldRed)('Not connected.'));
      }
    }
  }, {
    key: 'reconnectSocket',
    value: function reconnectSocket() {
      if (this.socket.connected) {
        this.addLine((0, _colors.boldRed)('Already connected.'));
      } else {
        this.socket.connect();
      }
    }
  }, {
    key: 'scrollToBottom',
    value: function scrollToBottom() {
      this.$scrollingElement.scrollTop = this.$scrollingElement.scrollHeight - this.window.innerHeight;
    }
  }, {
    key: 'truncateHistory',
    value: function truncateHistory() {
      this.history = this.history.slice(0, this.maxHistory());
    }
  }, {
    key: 'truncateLines',
    value: function truncateLines() {
      var lengthDiff = this.lines().length - this.maxLines();
      this.lines(this.lines.slice(lengthDiff));
    }
  }, {
    key: 'willClose',
    value: function willClose() {
      this.socket.disconnect();
      return true;
    }

    // Event handlers

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(_, event) {
      var key = typeof event.which === 'undefined' ? event.keyCode : event.which;
      var meta = event.metaKey;
      var ctrl = event.ctrlKey;
      var shift = event.shiftKey;
      var vKey = key === 86;
      var upKey = key === 38;
      var downKey = key === 40;
      var tabKey = key === 9;

      // if holding control or command and not trying to paste,
      // ignore this keypress
      if (meta && !vKey || ctrl && !vKey) {
        return true;
      }

      // otherwise, re-focus the input before the key is let up
      if (!this.inputHasFocus()) {
        this.inputHasFocus(true);
        // when hitting up or down and not focused,
        // the keydown event doesn't get passed on
        if (upKey || downKey) {
          // HACK fake event object
          return this.onRecall(null, { which: key });
        }
      }

      if (tabKey) {
        var direction = shift ? -1 : 1;
        this.socket.emit('tab-key-press', { direction: direction });
        return false;
      }

      return true;
    }
  }, {
    key: 'onClick',
    value: function onClick(_, event) {
      if (event.target && event.target.hash) {
        var pattern = /#cmd\[(.*?)]/g;
        var match = pattern.exec(event.target.hash);
        if (!match) {
          return true;
        }
        var command = decodeURIComponent(match[1]); // URI-encoded on some browsers (e.g. Firefox)
        this.command(command);
        this.sendCommand();
        return false;
      }
      return true;
    }
  }, {
    key: 'onRecall',
    value: function onRecall(_, event) {
      var key = typeof event.which === 'undefined' ? event.keyCode : event.which;
      if (this.history.length === 0) {
        return true;
      }
      switch (key) {
        case 38:
          {
            // up key
            if (this.currentHistory < this.history.length - 1) {
              this.currentHistory += 1;
            }
            this.command(this.history[this.currentHistory]);
            return false;
          }
        case 40:
          {
            // down key
            if (this.currentHistory > -1) {
              this.currentHistory -= 1;
            }
            if (this.currentHistory >= 0) {
              this.command(this.history[this.currentHistory]);
            } else {
              this.command('');
            }
            break;
          }
        default:
          {
            break;
          }
      }
      return true;
    }

    // Socket event handlers

  }, {
    key: 'onConnect',
    value: function onConnect() {
      this.addLine((0, _colors.boldGreen)('Connected!'));
    }
  }, {
    key: 'onConnecting',
    value: function onConnecting() {
      this.addLine((0, _colors.gray)('Connecting...'));
    }
  }, {
    key: 'onDisconnect',
    value: function onDisconnect() {
      this.addLine((0, _colors.boldRed)('Disconnected from server.'));
      this.setPrompt('');
      this.inputCallback = null;
      this.loggedIn(false);
      this.playing(false);
    }
  }, {
    key: 'onConnectFailed',
    value: function onConnectFailed() {
      this.addLine((0, _colors.boldRed)('Connection to server failed.'));
    }
  }, {
    key: 'onError',
    value: function onError() {
      this.addLine((0, _colors.boldRed)('An unknown error occurred.'));
    }
  }, {
    key: 'onReconnectFailed',
    value: function onReconnectFailed() {
      this.addLine((0, _colors.boldRed)('Unable to reconnect to server.'));
    }
  }, {
    key: 'onReconnect',
    value: function onReconnect() {}
  }, {
    key: 'onReconnecting',
    value: function onReconnecting() {}
  }, {
    key: 'onOutput',
    value: function onOutput(msg) {
      if (msg && msg.toString) {
        this.addLine(msg.toString());
        if (this.space()) {
          this.addLine(' ');
        }
      }
    }
  }, {
    key: 'onSetPrompt',
    value: function onSetPrompt(str) {
      this.setPrompt(str);
    }
  }, {
    key: 'onSetRightPrompt',
    value: function onSetRightPrompt(str) {
      this.setRightPrompt(str);
    }
  }, {
    key: 'onEditVerb',
    value: function onEditVerb(data) {
      this.parentViewModel.parentViewModel.newEditVerbTab(this.socket, data);
    }
  }, {
    key: 'onEditFunction',
    value: function onEditFunction(data) {
      this.parentViewModel.parentViewModel.newEditFunctionTab(this.socket, data);
    }
  }, {
    key: 'onLogin',
    value: function onLogin() {
      this.loggedIn(true);
    }
  }, {
    key: 'onLogout',
    value: function onLogout() {
      this.loggedIn(false);
    }
  }, {
    key: 'onPlaying',
    value: function onPlaying() {
      this.playing(true);
    }
  }, {
    key: 'onQuit',
    value: function onQuit() {
      this.playing(false);
    }
  }, {
    key: 'onRequestInput',
    value: function onRequestInput(inputs, fn) {
      var _this2 = this;

      var promptWas = this.promptStr();
      this.getInputFromUser({}, inputs, function (formData) {
        _this2.setPrompt(promptWas, 'text');
        fn(formData);
      });
    }

    // Helpers for the above

  }, {
    key: 'getInputFromUser',
    value: function getInputFromUser(data, inputs, done) {
      var _this3 = this;

      if (inputs.length === 0) {
        done(data);return;
      }

      var _inputs = _toArray(inputs),
          input = _inputs[0],
          restInputs = _inputs.slice(1);

      this.setPrompt(input.label || 'input', input.type || 'text');

      this.inputCallback = function (userInput) {
        data[input.name || 'input'] = userInput;
        _this3.getInputFromUser(data, restInputs, done);
      };
    }

    // Local storage helpers

  }, {
    key: 'readConfig',
    value: function readConfig(key) {
      return this.window.localStorage ? JSON.parse(this.window.localStorage.getItem(key)) : null;
    }
  }, {
    key: 'writeConfig',
    value: function writeConfig(key, value) {
      if (this.window.localStorage) {
        this.window.localStorage.setItem(key, JSON.stringify(value));
      }
    }

    // Color and HTML helpers

  }, {
    key: 'linkifyCommands',
    value: function linkifyCommands(str) {
      var pattern = /#cmd\[(.*?)]/g;
      return str.replace(pattern, function (match, capture) {
        return '<a href=\'' + match + '\'>' + capture + '</a>';
      });
    }
  }, {
    key: 'colorize',
    value: function colorize(str) {
      return this.linkifyCommands(this.linkifyHtml(this.ansiUp.ansi_to_html(str)));
    }
  }]);

  return ClientViewModel;
}();

exports.default = ClientViewModel;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*  ansi_up.js
 *  author : Dru Nelson
 *  license : MIT
 *  http://github.com/drudru/ansi_up
 */
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports);
    } else {
        // Browser globals
        var exp = {}
        factory(exp);
        root.AnsiUp = exp.default
    }
}(this, function (exports) {
"use strict";
function rgx(tmplObj) {
    var subst = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        subst[_i - 1] = arguments[_i];
    }
    var regexText = tmplObj.raw[0];
    var wsrgx = /^\s+|\s+\n|\s+#[\s\S]+?\n/gm;
    var txt2 = regexText.replace(wsrgx, '');
    return new RegExp(txt2, 'm');
}
var AnsiUp = (function () {
    function AnsiUp() {
        this.VERSION = "2.0.1";
        this.ansi_colors = [
            [
                { rgb: [0, 0, 0], class_name: "ansi-black" },
                { rgb: [187, 0, 0], class_name: "ansi-red" },
                { rgb: [0, 187, 0], class_name: "ansi-green" },
                { rgb: [187, 187, 0], class_name: "ansi-yellow" },
                { rgb: [0, 0, 187], class_name: "ansi-blue" },
                { rgb: [187, 0, 187], class_name: "ansi-magenta" },
                { rgb: [0, 187, 187], class_name: "ansi-cyan" },
                { rgb: [255, 255, 255], class_name: "ansi-white" }
            ],
            [
                { rgb: [85, 85, 85], class_name: "ansi-bright-black" },
                { rgb: [255, 85, 85], class_name: "ansi-bright-red" },
                { rgb: [0, 255, 0], class_name: "ansi-bright-green" },
                { rgb: [255, 255, 85], class_name: "ansi-bright-yellow" },
                { rgb: [85, 85, 255], class_name: "ansi-bright-blue" },
                { rgb: [255, 85, 255], class_name: "ansi-bright-magenta" },
                { rgb: [85, 255, 255], class_name: "ansi-bright-cyan" },
                { rgb: [255, 255, 255], class_name: "ansi-bright-white" }
            ]
        ];
        this.htmlFormatter = {
            transform: function (fragment, instance) {
                var txt = fragment.text;
                if (txt.length === 0)
                    return txt;
                if (instance._escape_for_html)
                    txt = instance.old_escape_for_html(txt);
                if (!fragment.bright && fragment.fg === null && fragment.bg === null)
                    return txt;
                var styles = [];
                var classes = [];
                var fg = fragment.fg;
                var bg = fragment.bg;
                if (fg === null && fragment.bright)
                    fg = instance.ansi_colors[1][7];
                if (!instance._use_classes) {
                    if (fg)
                        styles.push("color:rgb(" + fg.rgb.join(',') + ")");
                    if (bg)
                        styles.push("background-color:rgb(" + bg.rgb + ")");
                }
                else {
                    if (fg) {
                        if (fg.class_name !== 'truecolor') {
                            classes.push(fg.class_name + "-fg");
                        }
                        else {
                            styles.push("color:rgb(" + fg.rgb.join(',') + ")");
                        }
                    }
                    if (bg) {
                        if (bg.class_name !== 'truecolor') {
                            classes.push(bg.class_name + "-bg");
                        }
                        else {
                            styles.push("background-color:rgb(" + bg.rgb.join(',') + ")");
                        }
                    }
                }
                var class_string = '';
                var style_string = '';
                if (classes.length)
                    class_string = " class=\"" + classes.join(' ') + "\"";
                if (styles.length)
                    style_string = " style=\"" + styles.join(';') + "\"";
                return "<span" + class_string + style_string + ">" + txt + "</span>";
            },
            compose: function (segments, instance) {
                return segments.join("");
            }
        };
        this.textFormatter = {
            transform: function (fragment, instance) {
                return fragment.text;
            },
            compose: function (segments, instance) {
                return segments.join("");
            }
        };
        this.setup_256_palette();
        this._use_classes = false;
        this._escape_for_html = true;
        this.bright = false;
        this.fg = this.bg = null;
        this._buffer = '';
    }
    Object.defineProperty(AnsiUp.prototype, "use_classes", {
        get: function () {
            return this._use_classes;
        },
        set: function (arg) {
            this._use_classes = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnsiUp.prototype, "escape_for_html", {
        get: function () {
            return this._escape_for_html;
        },
        set: function (arg) {
            this._escape_for_html = arg;
        },
        enumerable: true,
        configurable: true
    });
    AnsiUp.prototype.setup_256_palette = function () {
        var _this = this;
        this.palette_256 = [];
        this.ansi_colors.forEach(function (palette) {
            palette.forEach(function (rec) {
                _this.palette_256.push(rec);
            });
        });
        var levels = [0, 95, 135, 175, 215, 255];
        for (var r = 0; r < 6; ++r) {
            for (var g = 0; g < 6; ++g) {
                for (var b = 0; b < 6; ++b) {
                    var col = { rgb: [levels[r], levels[g], levels[b]], class_name: 'truecolor' };
                    this.palette_256.push(col);
                }
            }
        }
        var grey_level = 8;
        for (var i = 0; i < 24; ++i, grey_level += 10) {
            var gry = { rgb: [grey_level, grey_level, grey_level], class_name: 'truecolor' };
            this.palette_256.push(gry);
        }
    };
    AnsiUp.prototype.old_escape_for_html = function (txt) {
        return txt.replace(/[&<>]/gm, function (str) {
            if (str === "&")
                return "&amp;";
            if (str === "<")
                return "&lt;";
            if (str === ">")
                return "&gt;";
        });
    };
    AnsiUp.prototype.old_linkify = function (txt) {
        return txt.replace(/(https?:\/\/[^\s]+)/gm, function (str) {
            return "<a href=\"" + str + "\">" + str + "</a>";
        });
    };
    AnsiUp.prototype.detect_incomplete_ansi = function (txt) {
        return !(/.*?[\x40-\x7e]/.test(txt));
    };
    AnsiUp.prototype.detect_incomplete_link = function (txt) {
        var found = false;
        for (var i = txt.length - 1; i > 0; i--) {
            if (/\s|\x1B/.test(txt[i])) {
                found = true;
                break;
            }
        }
        if (!found) {
            if (/(https?:\/\/[^\s]+)/.test(txt))
                return 0;
            else
                return -1;
        }
        var prefix = txt.substr(i + 1, 4);
        if (prefix.length === 0)
            return -1;
        if ("http".indexOf(prefix) === 0)
            return (i + 1);
    };
    AnsiUp.prototype.ansi_to = function (txt, formatter) {
        var pkt = this._buffer + txt;
        this._buffer = '';
        var raw_text_pkts = pkt.split(/\x1B\[/);
        if (raw_text_pkts.length === 1)
            raw_text_pkts.push('');
        this.handle_incomplete_sequences(raw_text_pkts);
        var first_chunk = this.with_state(raw_text_pkts.shift());
        var blocks = new Array(raw_text_pkts.length);
        for (var i = 0, len = raw_text_pkts.length; i < len; ++i) {
            blocks[i] = (formatter.transform(this.process_ansi(raw_text_pkts[i]), this));
        }
        if (first_chunk.text.length > 0)
            blocks.unshift(formatter.transform(first_chunk, this));
        return formatter.compose(blocks, this);
    };
    AnsiUp.prototype.ansi_to_html = function (txt) {
        return this.ansi_to(txt, this.htmlFormatter);
    };
    AnsiUp.prototype.ansi_to_text = function (txt) {
        return this.ansi_to(txt, this.textFormatter);
    };
    AnsiUp.prototype.with_state = function (text) {
        return { bright: this.bright, fg: this.fg, bg: this.bg, text: text };
    };
    AnsiUp.prototype.handle_incomplete_sequences = function (chunks) {
        var last_chunk = chunks[chunks.length - 1];
        if ((last_chunk.length > 0) && this.detect_incomplete_ansi(last_chunk)) {
            this._buffer = "\x1B[" + last_chunk;
            chunks.pop();
            chunks.push('');
        }
        else {
            if (last_chunk.slice(-1) === "\x1B") {
                this._buffer = "\x1B";
                console.log("raw", chunks);
                chunks.pop();
                chunks.push(last_chunk.substr(0, last_chunk.length - 1));
                console.log(chunks);
                console.log(last_chunk);
            }
            if (chunks.length === 2 &&
                chunks[1] === "" &&
                chunks[0].slice(-1) === "\x1B") {
                this._buffer = "\x1B";
                last_chunk = chunks.shift();
                chunks.unshift(last_chunk.substr(0, last_chunk.length - 1));
            }
        }
    };
    AnsiUp.prototype.process_ansi = function (block) {
        if (!this._sgr_regex) {
            this._sgr_regex = (_a = ["\n            ^                           # beginning of line\n            ([!<-?]?)             # a private-mode char (!, <, =, >, ?)\n            ([d;]*)                    # any digits or semicolons\n            ([ -/]?               # an intermediate modifier\n            [@-~])                # the command\n            ([sS]*)                   # any text following this CSI sequence\n          "], _a.raw = ["\n            ^                           # beginning of line\n            ([!\\x3c-\\x3f]?)             # a private-mode char (!, <, =, >, ?)\n            ([\\d;]*)                    # any digits or semicolons\n            ([\\x20-\\x2f]?               # an intermediate modifier\n            [\\x40-\\x7e])                # the command\n            ([\\s\\S]*)                   # any text following this CSI sequence\n          "], rgx(_a));
        }
        var matches = block.match(this._sgr_regex);
        if (!matches) {
            return this.with_state(block);
        }
        var orig_txt = matches[4];
        if (matches[1] !== '' || matches[3] !== 'm') {
            return this.with_state(orig_txt);
        }
        var sgr_cmds = matches[2].split(';');
        while (sgr_cmds.length > 0) {
            var sgr_cmd_str = sgr_cmds.shift();
            var num = parseInt(sgr_cmd_str, 10);
            if (isNaN(num) || num === 0) {
                this.fg = this.bg = null;
                this.bright = false;
            }
            else if (num === 1) {
                this.bright = true;
            }
            else if (num === 22) {
                this.bright = false;
            }
            else if (num === 39) {
                this.fg = null;
            }
            else if (num === 49) {
                this.bg = null;
            }
            else if ((num >= 30) && (num < 38)) {
                var bidx = this.bright ? 1 : 0;
                this.fg = this.ansi_colors[bidx][(num - 30)];
            }
            else if ((num >= 90) && (num < 98)) {
                this.fg = this.ansi_colors[1][(num - 90)];
            }
            else if ((num >= 40) && (num < 48)) {
                this.bg = this.ansi_colors[0][(num - 40)];
            }
            else if ((num >= 100) && (num < 108)) {
                this.bg = this.ansi_colors[1][(num - 100)];
            }
            else if (num === 38 || num === 48) {
                if (sgr_cmds.length > 0) {
                    var is_foreground = (num === 38);
                    var mode_cmd = sgr_cmds.shift();
                    if (mode_cmd === '5' && sgr_cmds.length > 0) {
                        var palette_index = parseInt(sgr_cmds.shift(), 10);
                        if (palette_index >= 0 && palette_index <= 255) {
                            if (is_foreground)
                                this.fg = this.palette_256[palette_index];
                            else
                                this.bg = this.palette_256[palette_index];
                        }
                    }
                    if (mode_cmd === '2' && sgr_cmds.length > 2) {
                        var r = parseInt(sgr_cmds.shift(), 10);
                        var g = parseInt(sgr_cmds.shift(), 10);
                        var b = parseInt(sgr_cmds.shift(), 10);
                        if ((r >= 0 && r <= 255) && (g >= 0 && g <= 255) && (b >= 0 && b <= 255)) {
                            var c = { rgb: [r, g, b], class_name: 'truecolor' };
                            if (is_foreground)
                                this.fg = c;
                            else
                                this.bg = c;
                        }
                    }
                }
            }
        }
        return this.with_state(orig_txt);
        var _a;
    };
    return AnsiUp;
}());
//# sourceMappingURL=ansi_up.js.map
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AnsiUp;
}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boldRed = boldRed;
exports.boldGreen = boldGreen;
exports.gray = gray;
function boldRed(str) {
  return "\x1B[1m\x1B[31m" + str + "\x1B[39m\x1B[22m";
}

function boldGreen(str) {
  return "\x1B[1m\x1B[32m" + str + "\x1B[39m\x1B[22m";
}

function gray(str) {
  return "\x1B[90m" + str + "\x1B[39m";
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _verbEditorViewModel = __webpack_require__(9);

var _verbEditorViewModel2 = _interopRequireDefault(_verbEditorViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VerbEditorTabViewModel = function () {
  function VerbEditorTabViewModel(deps, parentViewModel, socket, data) {
    var _this = this;

    _classCallCheck(this, VerbEditorTabViewModel);

    var ko = deps.ko;

    // Properties

    this.parentViewModel = parentViewModel;
    this.templateId = 'verb-editor';
    this.viewModel = new _verbEditorViewModel2.default(deps, this, socket, data);

    // Observables

    this.name = ko.observable(VerbEditorTabViewModel.tabName(data));

    // Computeds

    this.active = ko.computed(function () {
      return parentViewModel.activeTab() === _this;
    });
    this.dirty = ko.computed(function () {
      return _this.viewModel.dirty();
    });
  }

  _createClass(VerbEditorTabViewModel, [{
    key: 'templateBinding',
    value: function templateBinding() {
      return { name: this.templateId, data: this.viewModel };
    }
  }, {
    key: 'select',
    value: function select() {
      this.parentViewModel.activeTab(this);
    }
  }, {
    key: 'close',
    value: function close() {
      if (this.viewModel.willClose()) {
        this.parentViewModel.closeTab(this);
      }
    }
  }, {
    key: 'tabPaneClasses',
    value: function tabPaneClasses() {
      return ['tab-pane-editor', 'tab-pane-verb-editor'];
    }
  }, {
    key: 'hideIfOnlyMe',
    value: function hideIfOnlyMe() {
      return false;
    }
  }], [{
    key: 'tabName',
    value: function tabName(data) {
      return data.objectId + '.' + data.verb.name;
    }
  }]);

  return VerbEditorTabViewModel;
}();

exports.default = VerbEditorTabViewModel;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VerbEditorViewModel = function () {
  function VerbEditorViewModel(_ref, parentViewModel, socket, _ref2) {
    var ko = _ref.ko,
        CodeMirror = _ref.CodeMirror,
        win = _ref.win;
    var verb = _ref2.verb,
        objectId = _ref2.objectId;

    _classCallCheck(this, VerbEditorViewModel);

    // Properties

    this.window = win;
    this.parentViewModel = parentViewModel;
    this.socket = socket;
    this.objectId = objectId;
    this.name = verb.name;
    this.codemirrorOptions = {
      lineNumbers: true,
      theme: 'tomorrow-night-bright',
      tabSize: 2,
      indentWithTabs: false,
      extraKeys: {
        Tab: function Tab(cm) {
          if (cm.doc.somethingSelected()) {
            return CodeMirror.Pass;
          }
          return cm.execCommand('insertSoftTab');
        }
      }

      // Observables

    };this.pattern = ko.observable(verb.pattern);
    this.dobjarg = ko.observable(verb.dobjarg);
    this.preparg = ko.observable(verb.preparg);
    this.iobjarg = ko.observable(verb.iobjarg);
    this.code = ko.observable(verb.code);

    // for dirty tracking
    this._pattern = ko.observable(verb.pattern);
    this._dobjarg = ko.observable(verb.dobjarg);
    this._preparg = ko.observable(verb.preparg);
    this._iobjarg = ko.observable(verb.iobjarg);
    this._code = ko.observable(verb.code);

    // Computeds

    this.dirty = ko.computed(this.computeDirty.bind(this));
  }

  _createClass(VerbEditorViewModel, [{
    key: 'computeDirty',
    value: function computeDirty() {
      return this.pattern() !== this._pattern() || this.dobjarg() !== this._dobjarg() || this.preparg() !== this._preparg() || this.iobjarg() !== this._iobjarg() || this.code() !== this._code();
    }
  }, {
    key: 'save',
    value: function save() {
      var _this = this;

      var newVerb = {
        name: this.name,
        pattern: this.pattern(),
        dobjarg: this.dobjarg(),
        preparg: this.preparg(),
        iobjarg: this.iobjarg(),
        code: this.code()
      };
      var params = {
        objectId: this.objectId,
        verb: newVerb
      };

      if (!this.socket.connected) {
        // eslint-disable-next-line no-alert
        this.window.alert(['The client tab that this editor was opened from has been', 'closed.  You must keep that open for saving to work.'].join(' '));
        return;
      }

      this.socket.emit('save-verb', params, function (response) {
        if (response === 'saved') {
          _this._pattern(_this.pattern());
          _this._dobjarg(_this.dobjarg());
          _this._preparg(_this.preparg());
          _this._iobjarg(_this.iobjarg());
          _this._code(_this.code());
        } else {
          // eslint-disable-next-line no-alert
          _this.window.alert(response);
        }
      });
    }
  }, {
    key: 'willClose',
    value: function willClose() {
      var msg = ['Are you sure you want to close this tab?', 'You have unsaved changes that will be lost.'].join(' ');

      return this.dirty()
      // eslint-disable-next-line no-alert
      ? this.window.confirm(msg) : true;
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(_, event) {
      var key = typeof event.which === 'undefined' ? event.keyCode : event.which;
      var meta = event.metaKey;
      var ctrl = event.ctrlKey;
      var sKey = key === 83;
      var wKey = key === 87;

      if (ctrl && sKey || meta && sKey) {
        this.save();
        return false;
      } else if (ctrl && wKey || meta && wKey) {
        // this would be nice, but this is one shortcut you can't override...
        this.parentViewModel.close();
        return false;
      }
      return true;
    }
  }]);

  return VerbEditorViewModel;
}();

exports.default = VerbEditorViewModel;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _functionEditorViewModel = __webpack_require__(11);

var _functionEditorViewModel2 = _interopRequireDefault(_functionEditorViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FunctionEditorTabViewModel = function () {
  function FunctionEditorTabViewModel(deps, parentViewModel, socket, data) {
    var _this = this;

    _classCallCheck(this, FunctionEditorTabViewModel);

    var ko = deps.ko;

    // Properties

    this.parentViewModel = parentViewModel;
    this.templateId = 'function-editor';
    this.viewModel = new _functionEditorViewModel2.default(deps, this, socket, data);

    // Observables

    this.name = ko.observable(FunctionEditorTabViewModel.tabName(data));

    // Computeds

    this.active = ko.computed(function () {
      return parentViewModel.activeTab() === _this;
    });
    this.dirty = ko.computed(function () {
      return _this.viewModel.dirty();
    });
  }

  _createClass(FunctionEditorTabViewModel, [{
    key: 'templateBinding',
    value: function templateBinding() {
      return { name: this.templateId, data: this.viewModel };
    }
  }, {
    key: 'select',
    value: function select() {
      this.parentViewModel.activeTab(this);
    }
  }, {
    key: 'close',
    value: function close() {
      if (this.viewModel.willClose()) {
        this.parentViewModel.closeTab(this);
      }
    }
  }, {
    key: 'tabPaneClasses',
    value: function tabPaneClasses() {
      return ['tab-pane-editor', 'tab-pane-function-editor'];
    }
  }, {
    key: 'hideIfOnlyMe',
    value: function hideIfOnlyMe() {
      return false;
    }
  }], [{
    key: 'tabName',
    value: function tabName(data) {
      return data.objectId + '.' + data.name;
    }
  }]);

  return FunctionEditorTabViewModel;
}();

exports.default = FunctionEditorTabViewModel;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FunctionEditorViewModel = function () {
  function FunctionEditorViewModel(_ref, parentViewModel, socket, _ref2) {
    var ko = _ref.ko,
        CodeMirror = _ref.CodeMirror,
        win = _ref.win;

    var _this = this;

    var objectId = _ref2.objectId,
        src = _ref2.src,
        name = _ref2.name;

    _classCallCheck(this, FunctionEditorViewModel);

    // Properties

    this.window = win;
    this.parentViewModel = parentViewModel;
    this.socket = socket;
    this.objectId = objectId;
    this.src = src;
    this.name = name;
    this.codemirrorOptions = {
      lineNumbers: true,
      theme: 'tomorrow-night-bright',
      tabSize: 2,
      indentWithTabs: false,
      extraKeys: {
        Tab: function Tab(cm) {
          if (cm.doc.somethingSelected()) {
            return CodeMirror.Pass;
          }
          return cm.execCommand('insertSoftTab');
        }
      }

      // Observables

    };this.code = ko.observable(this.src);
    this._code = ko.observable(this.src);

    // Computeds

    this.dirty = ko.computed(function () {
      return _this.code() !== _this._code();
    });
  }

  _createClass(FunctionEditorViewModel, [{
    key: 'save',
    value: function save() {
      var _this2 = this;

      var params = {
        name: this.name,
        src: this.code(),
        objectId: this.objectId
      };

      if (!this.socket.connected) {
        // eslint-disable-next-line no-alert
        this.window.alert(['The client tab that this editor was opened from has been', 'closed.  You must keep that open for saving to work.'].join(' '));
        return;
      }

      this.socket.emit('save-function', params, function (response) {
        if (response === 'saved') {
          _this2._code(_this2.code());
        } else {
          // eslint-disable-next-line no-alert
          _this2.window.alert(response);
        }
      });
    }
  }, {
    key: 'willClose',
    value: function willClose() {
      var msg = ['Are you sure you want to close this tab?', 'You have unsaved changes that will be lost.'].join(' ');

      return this.dirty()
      // eslint-disable-next-line no-alert
      ? this.window.confirm(msg) : true;
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(_, event) {
      var key = typeof event.which === 'undefined' ? event.keyCode : event.which;
      var meta = event.metaKey;
      var ctrl = event.ctrlKey;
      var sKey = key === 83;
      var wKey = key === 87;

      if (ctrl && sKey || meta && sKey) {
        this.save();
        return false;
      } else if (ctrl && wKey || meta && wKey) {
        // this would be nice, but this is one shortcut you can't override...
        this.parentViewModel.close();
        return false;
      }
      return true;
    }
  }]);

  return FunctionEditorViewModel;
}();

exports.default = FunctionEditorViewModel;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function isElementVisibleIn(el, container) {
  var elRect = el.getBoundingClientRect();
  var containerRect = container.getBoundingClientRect();

  return elRect.top >= containerRect.top && elRect.left >= containerRect.left && elRect.bottom <= containerRect.bottom && elRect.right <= containerRect.right;
}

var SearchResult = function () {
  function SearchResult(ko, data) {
    _classCallCheck(this, SearchResult);

    this.data = data;
    this.objectId = data.objectId;
    this.active = ko.observable(false);
    this.name = ko.computed(this.computeName.bind(this));
  }

  _createClass(SearchResult, [{
    key: 'computeName',
    value: function computeName() {
      throw new Error('Must be subclassed.');
    }
  }, {
    key: 'openEditor',
    value: function openEditor() {
      throw new Error('Must be subclassed.');
    }
  }], [{
    key: 'newFromResult',
    value: function newFromResult(ko, result) {
      if (result.function) {
        // eslint-disable-next-line no-use-before-define
        return new FunctionSearchResult(ko, result);
      } else if (result.verb) {
        // eslint-disable-next-line no-use-before-define
        return new VerbSearchResult(ko, result);
      }
      throw new Error('Invalid result type.');
    }
  }]);

  return SearchResult;
}();

var FunctionSearchResult = function (_SearchResult) {
  _inherits(FunctionSearchResult, _SearchResult);

  function FunctionSearchResult() {
    _classCallCheck(this, FunctionSearchResult);

    return _possibleConstructorReturn(this, (FunctionSearchResult.__proto__ || Object.getPrototypeOf(FunctionSearchResult)).apply(this, arguments));
  }

  _createClass(FunctionSearchResult, [{
    key: 'computeName',
    value: function computeName() {
      return this.objectId + '.' + this.data.function;
    }
  }, {
    key: 'openEditor',
    value: function openEditor(socket, tabsViewModel) {
      var params = { objectId: this.objectId, name: this.data.function };
      socket.emit('get-function', params, function (data) {
        tabsViewModel.newEditFunctionTab(socket, data);
      });
    }
  }]);

  return FunctionSearchResult;
}(SearchResult);

var VerbSearchResult = function (_SearchResult2) {
  _inherits(VerbSearchResult, _SearchResult2);

  function VerbSearchResult() {
    _classCallCheck(this, VerbSearchResult);

    return _possibleConstructorReturn(this, (VerbSearchResult.__proto__ || Object.getPrototypeOf(VerbSearchResult)).apply(this, arguments));
  }

  _createClass(VerbSearchResult, [{
    key: 'computeName',
    value: function computeName() {
      return this.objectId + '.' + this.data.verb;
    }
  }, {
    key: 'openEditor',
    value: function openEditor(socket, tabsViewModel) {
      var params = { objectId: this.objectId, name: this.data.verb };
      socket.emit('get-verb', params, function (data) {
        tabsViewModel.newEditVerbTab(socket, data);
      });
    }
  }]);

  return VerbSearchResult;
}(SearchResult);

// TODO: socket permissions


var SearchViewModel = function () {
  function SearchViewModel(_ref, parentViewModel, socket) {
    var doc = _ref.doc,
        ko = _ref.ko;

    var _this3 = this;

    _classCallCheck(this, SearchViewModel);

    this.document = doc;
    this.ko = ko;
    this.parentViewModel = parentViewModel;
    this.socket = socket;
    this.inputHasFocus = true;

    this.search = ko.observable('');
    this.results = ko.observableArray([]);
    this.selectedIndex = ko.observable(0);
    this.selectionDirection = ko.observable(0);

    this.search.subscribe(this.onSearch.bind(this));

    this.activeResult = ko.computed(this.computeActiveResult.bind(this));
    this.hasResults = ko.computed(function () {
      return _this3.results().length > 0;
    });
  }

  _createClass(SearchViewModel, [{
    key: 'computeActiveResult',
    value: function computeActiveResult() {
      var results = this.results();
      var selectedIndex = this.selectedIndex();

      if (results.length > 0) {
        results.forEach(function (result) {
          result.active(false);
        });
        results[selectedIndex].active(true);
        this.scrollActiveResultIntoView();
        return results[selectedIndex];
      }
      return null;
    }
  }, {
    key: 'scrollActiveResultIntoView',
    value: function scrollActiveResultIntoView() {
      var el = this.document.querySelector('.search .results li.active');
      var container = this.document.querySelector('.search .results');
      if (el && !isElementVisibleIn(el, container)) {
        el.scrollIntoView(this.selectionDirection() === -1);
      }
    }
  }, {
    key: 'close',
    value: function close() {
      this.parentViewModel.searchViewModel(null);
    }
  }, {
    key: 'openActiveResult',
    value: function openActiveResult() {
      var activeResult = this.activeResult();
      activeResult.openEditor(this.socket, this.parentViewModel);
    }
  }, {
    key: 'onSearch',
    value: function onSearch(str) {
      var _this4 = this;

      this.socket.emit('search', str, function (results) {
        _this4.selectedIndex(0);
        _this4.results(results.map(function (result) {
          return SearchResult.newFromResult(_this4.ko, result);
        }));
      });
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(_, event) {
      var key = typeof event.which === 'undefined' ? event.keyCode : event.which;
      var selectedIndex = this.selectedIndex();

      switch (key) {
        case 13:
          {
            // enter key
            this.openActiveResult();
            this.close();
            return false;
          }
        case 27:
          {
            // esc key
            this.close();
            return false;
          }
        case 38:
          {
            // up key
            if (selectedIndex > 0) {
              this.selectedIndex(selectedIndex - 1);
            } else {
              this.selectedIndex(this.results().length - 1);
            }
            this.selectionDirection(-1);
            return false;
          }
        case 40:
          {
            // down key
            if (selectedIndex < this.results().length - 1) {
              this.selectedIndex(selectedIndex + 1);
            } else {
              this.selectedIndex(0);
            }
            this.selectionDirection(1);
            return false;
          }
        default:
          {
            return true;
          }
      }
    }
  }]);

  return SearchViewModel;
}();

exports.default = SearchViewModel;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addSaneOnUnloadHandler;
// Credit: http://stackoverflow.com/users/39013/josiah-ruddell
// http://stackoverflow.com/questions/4126820/window-onbeforeunload-may-fire-multiple-times

var NAVIGATE_AWAY_MESSAGE = 'This action will log you out of the game!';

function addSaneOnUnloadHandler(win) {
  var promptBeforeLeaving = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return true;
  };

  var alreadPrompted = false;
  var timeoutID = 0;

  var reset = function reset() {
    alreadPrompted = false;
    timeoutID = 0;
  };

  win.onbeforeunload = function () {
    if (promptBeforeLeaving() && !alreadPrompted) {
      alreadPrompted = true;
      timeoutID = setTimeout(reset, 100);
      return NAVIGATE_AWAY_MESSAGE;
    }
    return null;
  };

  win.onunload = function () {
    clearTimeout(timeoutID);
  };
}

/***/ })
/******/ ]);