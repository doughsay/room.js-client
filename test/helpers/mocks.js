require('jsdom-global')()

const socket = {
  on: (msg, fn) => {}
}

const io = {
  connect: () => socket
}

module.exports = { io, socket, win: window, doc: document }
