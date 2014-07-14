# Room.js Client

This is the Room.js client app.

## Connecting and basic usage

The Room.js client lives at http://infinitymotel.net.  It's mostly self explanatory, you type commands to send to the server and the server responds.  There are, however, a few client-side only commands and features that I will detail below.

### Client commands

#### `clear`

Clears the screen.

#### `mode <modename>`

Enables a certain input mode.  Current modes are:

* eval - all input sent will be evaluated as JS.
* say - all input sent will be interepreted as input to `say`
* chat - all input sent will be interepreted as input to `chat`

TIP: You can also cycle through all modes quickly by pressing tab.

TIP2: send un-moded input while you're in a mode by prefixing your input with a `\`

#### `mode off`

Turns off any active mode.

#### `echo <off|on>`

Turns command echoing on or off.  This is persisted to local storage in your browser, so it remembers your settings upon page refresh.

#### `new tab`

Opens a new client tab, allowing you to log in with multiple accounts simultaneously.

#### `close tab`

Closes the current client tab.
