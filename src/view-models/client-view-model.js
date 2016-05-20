/* global ko, io, SERVER_URI */
const { observable, observableArray, computed } = ko;

import { colorize, escapeHTML } from '../lib/html-helpers';
import { boldRed, boldGreen, gray } from '../lib/colors';

function readConfig(key) {
  return window.localStorage ? JSON.parse(window.localStorage.getItem(key)) : null;
}

function writeConfig(key, value) {
  if (window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

export class ClientViewModel {
  constructor(parentViewModel) {
    // Elements

    this.$body = document.querySelector('body');

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
    this.inputHasFocus = observable(true);
    this.loggedIn = observable(false);
    this.playing = observable(false);

    // client config
    this.maxLines = observable(readConfig('maxLines') || 1000);
    this.maxHistory = observable(readConfig('maxHistory') || 1000);
    this.echo = observable(readConfig('echo') || false);
    this.space = observable(readConfig('space') || false);

    // Computeds

    this.promptFormatted = computed(() => colorize(escapeHTML(this.composedPrompt())));

    // Subscribers

    this.maxLines.subscribe(max => {
      if (this.lines().length > max) { this.truncateLines(); }
    });

    this.maxHistory.subscribe(max => {
      if (history().length > max) { this.truncateHistory(); }
    });

    this.echo.subscribe(echo => { writeConfig('echo', echo); });
    this.space.subscribe(space => { writeConfig('space', space); });

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
    this.socket.on('request-input', this.onRequestInput.bind(this));
    this.socket.on('edit-verb', this.onEditVerb.bind(this));
    this.socket.on('edit-function', this.onEditFunction.bind(this));
    this.socket.on('login', this.onLogin.bind(this));
    this.socket.on('logout', this.onLogout.bind(this));
    this.socket.on('playing', this.onPlaying.bind(this));
    this.socket.on('quit', this.onQuit.bind(this));

    this.addLine(gray('Connecting...'));
  }

  composedPrompt(optionalStr = '') {
    return `${this.promptStr()} > ${optionalStr}`.trim();
  }

  setPrompt(str, type) {
    this.promptStr(str);
    if (type) { this.inputType(type); }
  }

  sendCommand() {
    const command = this.command().trim();

    if (!command) { return; }

    this.echoCommand(command);
    this.addToHistory(command);

    if (this.handleClientCommand(command)) {
      // done, client handled command
    } else if (!this.socket.connected) {
      this.addLine(boldRed('Not connected.'));
    } else if (this.inputCallback) {
      this.handleInputCallback(command);
    } else {
      this.socket.emit('input', command);
    }

    this.command('');
  }

  echoCommand(command) {
    if (!this.echo() || this.inputType() === 'password') { return; }
    this.addLine(this.composedPrompt(command));
    if (this.space()) { this.addLine(' '); }
  }

  addToHistory(command) {
    if (this.inputType() === 'password') { return; }
    this.history.unshift(command);
    if (this.history.length > this.maxHistory()) { this.truncateHistory(); }
    this.currentHistory = -1;
  }

  handleClientCommand(command) {
    switch (command) {
      case '.clear': this.lines([]); return true;
      case '.connect': this.reconnectSocket(); return true;
      case '.disconnect': this.disconnectSocket(); return true;
      case '.echo on': this.echo(true); return true;
      case '.echo off': this.echo(false); return true;
      case '.space on': this.space(true); return true;
      case '.space off': this.space(false); return true;
      case '.new tab': this.parentViewModel.parentViewModel.newClientTab(); return true;
      case '.close tab': this.parentViewModel.close(); return true;
      default: return false;
    }
  }

  handleInputCallback(command) {
    const callback = this.inputCallback;
    this.inputCallback = null;
    callback(command);
  }

  addLine(line) {
    this.lines.push(colorize(escapeHTML(line)));
    this.scrollToBottom();
  }

  disconnectSocket() {
    if (this.socket.connected) {
      this.socket.disconnect();
    } else {
      this.addLine(boldRed('Not connected.'));
    }
  }

  reconnectSocket() {
    if (this.socket.connected) {
      this.addLine(boldRed('Already connected.'));
    } else {
      this.socket.connect();
    }
  }

  scrollToBottom() {
    this.$body.scrollTop = this.$body.scrollHeight - window.innerHeight;
  }

  truncateHistory() {
    this.history = this.history.slice(0, this.maxHistory());
  }

  truncateLines() {
    const lengthDiff = this.lines().length - this.maxLines();
    this.lines(this.lines.slice(lengthDiff));
  }

  willClose() {
    this.socket.disconnect();
    return true;
  }

  // Event handlers

  onKeyDown(_, event) {
    const key = typeof event.which === 'undefined' ? event.keyCode : event.which;
    const meta = event.metaKey;
    const ctrl = event.ctrlKey;
    const shift = event.shiftKey;
    const vKey = key === 86;
    const upKey = key === 38;
    const downKey = key === 40;
    const tabKey = key === 9;

    // if holding control or command and not trying to paste,
    // ignore this keypress
    if ((meta && !vKey) || (ctrl && !vKey)) {
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
      const direction = shift ? -1 : 1;
      this.socket.emit('tab-key-press', { direction });
      return false;
    }

    return true;
  }

  onClick(_, event) {
    if (event.target && event.target.hash) {
      const pattern = /#cmd\[(.*?)\]/g;
      const match = pattern.exec(event.target.hash);
      if (!match) { return true; }
      const command = match[1];
      this.command(command);
      this.sendCommand();
      return false;
    }
    return true;
  }

  onRecall(_, event) {
    const key = typeof event.which === 'undefined' ? event.keyCode : event.which;
    if (this.history.length === 0) { return true; }
    switch (key) {
      case 38: { // up key
        if (this.currentHistory < this.history.length - 1) {
          this.currentHistory++;
        }
        this.command(this.history[this.currentHistory]);
        return false;
      }
      case 40: { // down key
        if (this.currentHistory > -1) {
          this.currentHistory--;
        }
        if (this.currentHistory >= 0) {
          this.command(this.history[this.currentHistory]);
        } else {
          this.command('');
        }
        break;
      }
      default: {
        break;
      }
    }
    return true;
  }

  // Socket event handlers

  onConnect() { this.addLine(boldGreen('Connected!')); }
  onConnecting() { this.addLine(gray('Connecting...')); }

  onDisconnect() {
    this.addLine(boldRed('Disconnected from server.'));
    this.setPrompt('');
    this.inputCallback = null;
    this.loggedIn(false);
    this.playing(false);
  }

  onConnectFailed() { this.addLine(boldRed('Connection to server failed.')); }
  onError() { this.addLine(boldRed('An unknown error occurred.')); }
  onReconnectFailed() { this.addLine(boldRed('Unable to reconnect to server.')); }
  onReconnect() {}
  onReconnecting() {}

  onOutput(msg) {
    if (msg && msg.toString) {
      this.addLine(msg.toString());
      if (this.space()) { this.addLine(' '); }
    }
  }

  onSetPrompt(str) {
    this.setPrompt(str);
  }

  onEditVerb(data) {
    this.parentViewModel.parentViewModel.newEditVerbTab(this.socket, data);
  }

  onEditFunction(data) {
    this.parentViewModel.parentViewModel.newEditFunctionTab(this.socket, data);
  }

  onLogin() {
    this.loggedIn(true);
  }

  onLogout() {
    this.loggedIn(false);
  }

  onPlaying() {
    this.playing(true);
  }

  onQuit() {
    this.playing(false);
  }

  onRequestInput(inputs, fn) {
    const promptWas = this.promptStr();
    this.getInputFromUser({}, inputs, formData => {
      this.setPrompt(promptWas, 'text');
      fn(formData);
    });
  }

  // Helpers for the above

  getInputFromUser(data, inputs, done) {
    if (inputs.length === 0) { done(data); return; }

    const [input, ...restInputs] = inputs;

    this.setPrompt(input.label || 'input', input.type || 'text');

    this.inputCallback = userInput => {
      data[input.name || 'input'] = userInput;
      this.getInputFromUser(data, restInputs, done);
    };
  }
}

export default ClientViewModel;
