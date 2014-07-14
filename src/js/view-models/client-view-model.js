var ko = require('knockout')
  , io = require('socket.io-client')
  , store = require('store')
  , config = require('../../config/app')

  , MODE_EVAL = {prefix: 'eval', promptPrefix: red('EVAL')}
  , MODE_SAY  = {prefix: 'say',  promptPrefix: green('SAY')}
  , MODE_CHAT = {prefix: 'chat', promptPrefix: blue('CHAT')}

  , DEFAULT_ALIASES = [ { alias: '"'
                        , command: 'say'
                        }
                      , { alias: ';'
                        , command: 'eval'
                        }
                      ]

function defined(x) {
  return typeof x !== 'undefined' && x !== null
}

function ifndef(x, fallback) {
  return typeof x === 'undefined' ? fallback : x
}

// helper for scrolling the view to the bottom
function scrollToBottom() {
  var height = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
  )
  window.scrollTo(0, height)
}

module.exports = function ClientViewModel(tabViewModel) {
  var self = this
    , storedEcho = store.get('echo')
    , storedAliases = store.get('aliases')

  self.tabViewModel = tabViewModel

  // observables
  self.input       = ko.observable('')
  self.inputType   = ko.observable('text')
  self.outputLines = ko.observableArray()
  self.prompt      = ko.observable('')
  self.sending     = ko.observable(false)
  self.connected   = ko.observable(false)

  // options
  self.maxLines    = 1000
  self.mode        = ko.observable(false)
  self.echo        = ko.observable(ifndef(storedEcho, true))
  self.aliases     = ko.observableArray(ifndef(storedAliases, DEFAULT_ALIASES))

  // save options
  self.echo.subscribe(function(echo) {
    store.set('echo', echo)
  })

  // update tab name
  self.prompt.subscribe(function(prompt) {
    self.tabViewModel.name(prompt === '' ? 'Room.js' : prompt)
  })

  self.promptText  = ko.computed(function() {
    var prompt  = self.prompt()
      , prefix = self.mode()  ? [self.mode().promptPrefix, ' '] : ''
      , suffix = ' >'

    return self.sending() ? '...' : render([prefix, prompt, suffix])
  }).extend({throttle: 1})

  // callback for server initiated input requests
  self.cb = null

  // socket
  self.socket = io(config.serverAddress, {forceNew: true})

  self.socket.on('output', function(output) {
    if (defined(output.prompt) || defined(output.message)) {
      if (defined(output.prompt)) {
        self.prompt(output.prompt)
      }
      if (defined(output.message)) {
        self.output(output.message)
      }
    }
    else {
      self.output(output)
    }
  })

  self.socket.on('request-input', function(data, cb) {
    var oldPrompt = self.prompt()
    self.sending(false)
    if (typeof data === 'string') {
      self.output(data)
    }
    else {
      if (defined(data.prompt)) {
        self.prompt(data.prompt)
      }
      if (data.password) {
        self.inputType('password')
      }
      if (defined(data.message)) {
        self.output(data.message)
      }
    }
    self.cb = function(input) {
      cb(input)
      self.inputType('text')
      self.prompt(oldPrompt)
    }
  })

  self.socket.on('edit-verb', function(data) {
    self.tabViewModel.parentViewModel.newEditTab(self.socket, data)
  })

  self.socket.on('edit-function', function(data) {
    self.tabViewModel.parentViewModel.newEditFunctionTab(self.socket, data)
  })

  self.socket.on('done', function() {
    self.sending(false)
  })

  self.socket.on('connect', function() {
    self.output(bold(green('Connected!')))
    self.connected(true)
    // self.sendBulk([ 'login'
    //               , 'chris'
    //               , 'j3n0VA$@'
    //               , 'play'
    //               , '1'
    //               ])
  })

  self.sendBulk = function(commands) {
    var nextCommand = commands.shift()

    if (nextCommand) {
      self.input(nextCommand)
      self.send()
      window.setTimeout(function() { self.sendBulk(commands) }, 200)
    }
  }

  self.socket.on('connect_failed', function() {
    self.output(bold(red('Connection to server failed.')))
  })

  self.socket.on('error', function(err) {
    self.output(bold(red('An unknown error occurred.')))
    console.error(err)
  })

  self.socket.on('disconnect', function() {
    self.output(bold(red('Disconnected from server.')))
    self.sending(false)
    self.prompt('')
    self.connected(false)
  })

  // actions
  self.send = function() {
    var input = self.input().trim()
      , mode = self.mode()
      , alias

    self.input('')

    if (input !== '') {
      if (self.sending()) {
        return
      }
      self.sending(true)

      self.addToHistory(input)
      if (self.echo() && self.inputType() !== 'password') {
        self.output(black(input))
      }
      if (!self.processClientCommand(input)) {

        if (input.charAt(0) === '\\' && input.charAt(1) === '\\') {
          input = input.substr(1)
        }
        else if (input.charAt(0) === '\\') {
          input = input.substr(1)
          mode = false
        }

        self.aliases().forEach(function(a, i) {
          if (input.indexOf(a.alias) === 0) {
            alias = a
          }
        })

        if (alias) {
          input = input.replace(alias.alias, alias.command + ' ')
        }

        if (mode) {
          input = mode.prefix + ' ' + input
        }

        if (!self.connected()) {
          self.output(red('Not connected'))
          self.sending(false)
          return
        }
        self.sendToSocket(input)
      }
      else {
        self.sending(false)
      }
    }
  }

  self.processClientCommand = function(input) {
    var match

    switch (input) {

      case 'clear':
        self.outputLines([])
        return true

      case 'mode eval':
        self.mode(MODE_EVAL)
        self.output(gray('Eval mode on.'))
        return true

      case 'mode say':
        self.mode(MODE_SAY)
        self.output(gray('Say mode on.'))
        return true

      case 'mode chat':
        self.mode(MODE_CHAT)
        self.output(gray('Chat mode on.'))
        return true

      case 'mode off':
        self.mode(false)
        self.output(gray('Mode off.'))
        return true

      case 'echo on':
        self.echo(true)
        self.output(gray('Input echo on.'))
        return true

      case 'echo off':
        self.echo(false)
        self.output(gray('Input echo off.'))
        return true

      case 'new tab':
        self.tabViewModel.parentViewModel.newClientTab()
        self.scrollToBottom()
        return true

      case 'close tab':
        self.willClose()
        self.tabViewModel.close()
        return self.willClose()

      default:

        match = /^alias(.*?)=(.*?)$/.exec(input)
        if (match) {
          self.addAlias(match[1].trim(), match[2].trim())
          return true
        }
        else {
          return false
        }
    }
  }

  self.output = function(x) {
    self.outputLines.push(render(x))
    if (self.outputLines().length > self.maxLines) {
      self.truncateLines()
    }
  }
  self.output(gray('Connecting...'))

  self.truncateLines = function() {
    var lengthDiff = self.outputLines().length - self.maxLines
    self.outputLines(self.outputLines.slice(lengthDiff))
  }

  self.sendToSocket = function(input) {
    if (self.cb) {
      self.cb(input)
      self.cb = null
    }
    else {
      self.socket.emit('input', input)
    }
  }

  self.scrollToBottom = function() {
    scrollToBottom()
  }

  self.willClose = function() {
    self.socket.disconnect()
    return true
  }

  // put focus on input when keys are pressed
  self.inputHasFocus = ko.observable(true)
  self.onKeyDown = function(_, event) {
    var key = typeof event.which === 'undefined'  ? event.keyCode
                                                  : event.which
      , meta = event.metaKey
      , ctrl = event.ctrlKey
      , shift = event.shiftKey
      , vKey = key === 86
      , upKey = key === 38
      , tabKey = key === 9
      , mode

    // if holding control or command and not trying to paste,
    // ignore this keypress
    if ((meta && !vKey) || (ctrl && !vKey)) {
      return true
    }
    // otherwise, re-focus the input before the key is let up
    if (!self.inputHasFocus()) {
      self.inputHasFocus(true)
      // when hitting up and not focused,
      // the keydown event doesn't get passed on
      if (upKey) {
        // HACK fake event object
        // TODO find a better way to do this
        return self.recall( null
                          , { which: key
                            , target: document.querySelectorAll('input')[0]
                            }
                          )
      }
    }
    if (tabKey) {
      mode = self.mode()
      if (!mode) {
        self.mode(shift ? MODE_EVAL : MODE_SAY)
      }
      else if (mode === MODE_SAY) {
        self.mode(shift ? false : MODE_CHAT)
      }
      else if (mode === MODE_CHAT) {
        self.mode(shift ? MODE_SAY : MODE_EVAL)
      }
      else if (mode === MODE_EVAL) {
        self.mode(shift ? MODE_CHAT : false)
      }
      return false
    }
    return true
  }

  // history
  self.history = []
  self.currentHistory = -1
  self.maxHistory = 1000

  self.addToHistory = function(input) {
    if (self.inputType() === 'password') {
      return
    }
    self.history.unshift(input)
    if (self.history.length > self.maxHistory) {
      self.truncateHistory()
    }
    self.currentHistory = -1
  }

  self.truncateHistory = function() {
    self.history = self.history.slice(0, self.maxHistory)
  }

  // history event callback
  // given a javascript event for the 'up' or 'down' keys
  // scroll through history and fill the input box with
  // the selected command
  self.recall = function(_, event) {
    var key = typeof event.which === 'undefined'  ? event.keyCode
                                                  : event.which
      , l

    if (self.history.length === 0) {
      return true
    }
    switch (key) {

      case 38: { // up

        if (self.currentHistory < self.history.length - 1) {
          self.currentHistory++
        }

        self.input(self.history[self.currentHistory])
        l = self.input().length
        event.target.setSelectionRange(l, l)
        return false
      }

      case 40: { // down
        if (self.currentHistory > -1) {
          self.currentHistory--
        }
        if (self.currentHistory >= 0) {
          self.input(self.history[self.currentHistory])
        }
        else {
          self.input('')
        }
      }
    }
    return true
  }

  self.addAlias = function(alias, command) {
    self.aliases.push({alias: alias, command: command})
    store.set('aliases', self.aliases())
    self.output(gray(['Added alias ', alias, '=', command, '.']))
  }

}
