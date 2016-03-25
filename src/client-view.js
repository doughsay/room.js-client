import ko from 'knockout';
const { observable, observableArray, computed } = ko;

import { colorize, escapeHTML } from './html-helpers';
import { boldRed, boldGreen, gray } from './colors';

export class ClientView {
  constructor(socket) {
    // Elements

    this.$body = document.querySelector('body');
    this.$input = document.querySelector('.command input');

    // Properties

    this.socket = socket;
    this.history = [];
    this.inputCallback = null;

    // Observables

    this.lines = observableArray([]);
    this.command = observable('');
    this.inputType = observable('text');
    this.promptStr = observable('');
    this.maxLines = observable(1000);
    this.maxHistory = observable(1000);
    this.echo = observable(false);
    this.space = observable(false);
    this.inputHasFocus = observable(true);

    // Computeds

    this.promptFormatted = computed(() => colorize(escapeHTML(this.composedPrompt())));

    // Subscribers

    this.maxLines.subscribe((max) => {
      if (this.lines().length > max) { this.truncateLines(); }
    });

    this.maxHistory.subscribe((max) => {
      if (history().length > max) { this.truncateHistory(); }
    });

    // Socket Setup

    socket.on('connect', this.onConnect.bind(this));
    socket.on('connecting', this.onConnecting.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('connect_failed', this.onConnectFailed.bind(this));
    socket.on('error', this.onError.bind(this));
    socket.on('reconnect_failed', this.onReconnectFailed.bind(this));
    socket.on('reconnect', this.onReconnect.bind(this));
    socket.on('reconnecting', this.onReconnecting.bind(this));
    socket.on('output', this.onOutput.bind(this));
    socket.on('set-prompt', this.onSetPrompt.bind(this));
    socket.on('request-input', this.onRequestInput.bind(this));
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
      case '#clear': this.lines([]); return true;
      case '#connect': this.reconnectSocket(); return true;
      case '#disconnect': this.disconnectSocket(); return true;
      case '#echo on': this.echo(true); return true;
      case '#echo off': this.echo(false); return true;
      case '#space on': this.space(true); return true;
      case '#space off': this.space(false); return true;
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

  addLines(lines) {
    lines.forEach((line) => { this.addLine(line); });
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
    this.lines(this.lines.slice(lengthDiff))
  }

  // Event handlers

  onBodyKeyDown(_, event) {
    const key = typeof event.which === 'undefined' ? event.keyCode : event.which;
    const meta = event.metaKey;
    const ctrl = event.ctrlKey;
    const vKey = key === 86;
    const upKey = key === 38;

    // if holding control or command and not trying to paste,
    // ignore this keypress
    if ((meta && !vKey) || (ctrl && !vKey)) {
      return true;
    }
    // otherwise, re-focus the input before the key is let up
    if (!this.inputHasFocus()) {
      this.inputHasFocus(true);
      // when hitting up and not focused,
      // the keydown event doesn't get passed on
      if (upKey) {
        // HACK fake event object
        // TODO find a better way to do this
        return this.onRecall(null, {
          which: key,
          target: this.$input,
        });
      }
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
        const l = this.command().length;
        event.target.setSelectionRange(l, l);
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
  }

  onConnectFailed() { this.addLine(boldRed('Connection to server failed.')); }
  onError() { this.addLine(boldRed('An unknown error occurred.')); }
  onReconnectFailed() { this.addLine(boldRed('Unable to reconnect to server.')); }
  onReconnect() {}
  onReconnecting() {}

  onOutput(msg) {
    const lines = msg.split('\n');
    this.addLines(lines);
    if (this.space()) { this.addLine(' '); }
  }

  onSetPrompt(str) {
    this.setPrompt(str);
  }

  onRequestInput(inputs, fn) {
    const promptWas = this.promptStr();
    this.getInputFromUser({}, inputs, (formData) => {
      this.setPrompt(promptWas, 'text');
      fn(formData);
    });
  }

  // Helpers for the above

  getInputFromUser(data, inputs, done) {
    if (inputs.length === 0) { done(data); return; }

    const [input, ...restInputs] = inputs;

    this.setPrompt(input.label || 'input', input.type || 'text');

    this.inputCallback = (userInput) => {
      data[input.name || 'input'] = userInput;
      this.getInputFromUser(data, restInputs, done);
    };
  }
}

export default ClientView;
