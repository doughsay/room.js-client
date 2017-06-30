Room.js Client
==============

[![Greenkeeper badge](https://badges.greenkeeper.io/doughsay/room.js-client.svg)](https://greenkeeper.io/) [![Travis](https://img.shields.io/travis/doughsay/room.js-client.svg)](https://travis-ci.org/doughsay/room.js-client) [![Code Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com/) [![Codecov](https://img.shields.io/codecov/c/github/doughsay/room.js-client.svg)](https://codecov.io/gh/doughsay/room.js-client) [![David](https://img.shields.io/david/doughsay/room.js-client.svg)](https://david-dm.org/doughsay/room.js-client) [![David](https://img.shields.io/david/dev/doughsay/room.js-client.svg)](https://david-dm.org/doughsay/room.js-client?type=dev)

> **NOTE:** The master branch represents ongoing work and may have the client in a currently unstable state.  Please check the [releases](https://github.com/doughsay/room.js-client/releases) to get the most recent stable version.

This is the Room.js client. Please see the [Room.js Server](https://github.com/doughsay/room.js) project for details about running a server.

Demo
====

http://roomjs.dose.ninja/

Client-Side Commands
====================

There are a few commands that are handled client-side that never get sent to the server. Below is a list of them with descriptions:

* `.clear`: Clears the scrollback buffer of the client.
* `.connect`: Connects to the server if there is not already a connection.
* `.disconnect`: Disconnects from the server if there is a connection.
* `.new tab`: Opens a new tab and connects to the server.
* `.close tab`: Closes the current tab.

Configuration
=============

In addition to the above client-side commands, there are also a few client-side configuration options that you can set. Below is a list of them with descriptions and possible values:

* `.echo (on|off)`: (default: off) Turns on / off echo mode. When on, all commands sent to server will be repeasted as lines in the client.
* `.space (on|off)`: (default: off) Turns on / off output spacing. When on, all output blocks from the server will be separated by an empty line.

Building
========

To build the client you need a few things set up first.

### Requirements

* nodejs >= 6.0.0
* [yarn](https://yarnpkg.com)

### Install dependencies

Install the project dependencies using yarn:

```
yarn install
```

### Build the distributable files

To build the distributable index.html with all it's required files:

```
yarn build [serverUrl]
```

Where serverUrl is an optional string of which server the client will connect to. (Default: http://localhost:8888)

Contributing
============

First, thanks for contributing! If you're going to contribute changes please make sure of the following before submitting a pull-request:

* Make sure the code is lint free (`yarn lint`)
* Make sure the tests pass (`yarn test`)
* Build and check in a new dist folder with your changes (`yarn build`)
