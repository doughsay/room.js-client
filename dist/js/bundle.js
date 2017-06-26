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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.inherits = inherits;
function inherits(parent, child) {
	var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var extended = Object.create(parent.prototype);
	for (var p in props) {
		extended[p] = props[p];
	}
	extended.constructor = child;
	child.prototype = extended;
	return child;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AMPERSAND = exports.CLOSEPAREN = exports.CLOSEANGLEBRACKET = exports.CLOSEBRACKET = exports.CLOSEBRACE = exports.OPENPAREN = exports.OPENANGLEBRACKET = exports.OPENBRACKET = exports.OPENBRACE = exports.WS = exports.TLD = exports.SYM = exports.UNDERSCORE = exports.SLASH = exports.MAILTO = exports.PROTOCOL = exports.QUERY = exports.POUND = exports.PLUS = exports.NUM = exports.NL = exports.LOCALHOST = exports.PUNCTUATION = exports.DOT = exports.COLON = exports.AT = exports.DOMAIN = exports.Base = undefined;

var _createTokenClass = __webpack_require__(7);

var _class = __webpack_require__(0);

/******************************************************************************
	Text Tokens
	Tokens composed of strings
******************************************************************************/

/**
	Abstract class used for manufacturing text tokens.
	Pass in the value this token represents

	@class TextToken
	@abstract
*/
var TextToken = (0, _createTokenClass.createTokenClass)();
TextToken.prototype = {
	toString: function toString() {
		return this.v + '';
	}
};

function inheritsToken(value) {
	var props = value ? { v: value } : {};
	return (0, _class.inherits)(TextToken, (0, _createTokenClass.createTokenClass)(), props);
}

/**
	A valid domain token
	@class DOMAIN
	@extends TextToken
*/
var DOMAIN = inheritsToken();

/**
	@class AT
	@extends TextToken
*/
var AT = inheritsToken('@');

/**
	Represents a single colon `:` character

	@class COLON
	@extends TextToken
*/
var COLON = inheritsToken(':');

/**
	@class DOT
	@extends TextToken
*/
var DOT = inheritsToken('.');

/**
	A character class that can surround the URL, but which the URL cannot begin
	or end with. Does not include certain English punctuation like parentheses.

	@class PUNCTUATION
	@extends TextToken
*/
var PUNCTUATION = inheritsToken();

/**
	The word localhost (by itself)
	@class LOCALHOST
	@extends TextToken
*/
var LOCALHOST = inheritsToken();

/**
	Newline token
	@class NL
	@extends TextToken
*/
var NL = inheritsToken('\n');

/**
	@class NUM
	@extends TextToken
*/
var NUM = inheritsToken();

/**
	@class PLUS
	@extends TextToken
*/
var PLUS = inheritsToken('+');

/**
	@class POUND
	@extends TextToken
*/
var POUND = inheritsToken('#');

/**
	Represents a web URL protocol. Supported types include

	* `http:`
	* `https:`
	* `ftp:`
	* `ftps:`

	@class PROTOCOL
	@extends TextToken
*/
var PROTOCOL = inheritsToken();

/**
	Represents the start of the email URI protocol

	@class MAILTO
	@extends TextToken
*/
var MAILTO = inheritsToken('mailto:');

/**
	@class QUERY
	@extends TextToken
*/
var QUERY = inheritsToken('?');

/**
	@class SLASH
	@extends TextToken
*/
var SLASH = inheritsToken('/');

/**
	@class UNDERSCORE
	@extends TextToken
*/
var UNDERSCORE = inheritsToken('_');

/**
	One ore more non-whitespace symbol.
	@class SYM
	@extends TextToken
*/
var SYM = inheritsToken();

/**
	@class TLD
	@extends TextToken
*/
var TLD = inheritsToken();

/**
	Represents a string of consecutive whitespace characters

	@class WS
	@extends TextToken
*/
var WS = inheritsToken();

/**
	Opening/closing bracket classes
*/

var OPENBRACE = inheritsToken('{');
var OPENBRACKET = inheritsToken('[');
var OPENANGLEBRACKET = inheritsToken('<');
var OPENPAREN = inheritsToken('(');
var CLOSEBRACE = inheritsToken('}');
var CLOSEBRACKET = inheritsToken(']');
var CLOSEANGLEBRACKET = inheritsToken('>');
var CLOSEPAREN = inheritsToken(')');

var AMPERSAND = inheritsToken('&');

exports.Base = TextToken;
exports.DOMAIN = DOMAIN;
exports.AT = AT;
exports.COLON = COLON;
exports.DOT = DOT;
exports.PUNCTUATION = PUNCTUATION;
exports.LOCALHOST = LOCALHOST;
exports.NL = NL;
exports.NUM = NUM;
exports.PLUS = PLUS;
exports.POUND = POUND;
exports.QUERY = QUERY;
exports.PROTOCOL = PROTOCOL;
exports.MAILTO = MAILTO;
exports.SLASH = SLASH;
exports.UNDERSCORE = UNDERSCORE;
exports.SYM = SYM;
exports.TLD = TLD;
exports.WS = WS;
exports.OPENBRACE = OPENBRACE;
exports.OPENBRACKET = OPENBRACKET;
exports.OPENANGLEBRACKET = OPENANGLEBRACKET;
exports.OPENPAREN = OPENPAREN;
exports.CLOSEBRACE = CLOSEBRACE;
exports.CLOSEBRACKET = CLOSEBRACKET;
exports.CLOSEANGLEBRACKET = CLOSEANGLEBRACKET;
exports.CLOSEPAREN = CLOSEPAREN;
exports.AMPERSAND = AMPERSAND;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var HTML5NamedCharRefs = {
    // We don't need the complete named character reference because linkifyHtml
    // does not modify the escape sequences. We do need &nbsp; so that
    // whitespace is parsed properly. Other types of whitespace should already
    // be accounted for
    nbsp: "\xA0"
};
exports.default = HTML5NamedCharRefs;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function EntityParser(named) {
  this.named = named;
}

var HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
var CHARCODE = /^#([0-9]+)$/;
var NAMED = /^([A-Za-z0-9]+)$/;

EntityParser.prototype.parse = function (entity) {
  if (!entity) {
    return;
  }
  var matches = entity.match(HEXCHARCODE);
  if (matches) {
    return "&#x" + matches[1] + ";";
  }
  matches = entity.match(CHARCODE);
  if (matches) {
    return "&#" + matches[1] + ";";
  }
  matches = entity.match(NAMED);
  if (matches) {
    return this.named[matches[1]] || "&" + matches[1] + ";";
  }
};

exports.default = EntityParser;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(19);

function EventedTokenizer(delegate, entityParser) {
  this.delegate = delegate;
  this.entityParser = entityParser;

  this.state = null;
  this.input = null;

  this.index = -1;
  this.line = -1;
  this.column = -1;
  this.tagLine = -1;
  this.tagColumn = -1;

  this.reset();
}

EventedTokenizer.prototype = {
  reset: function reset() {
    this.state = 'beforeData';
    this.input = '';

    this.index = 0;
    this.line = 1;
    this.column = 0;

    this.tagLine = -1;
    this.tagColumn = -1;

    this.delegate.reset();
  },

  tokenize: function tokenize(input) {
    this.reset();
    this.tokenizePart(input);
    this.tokenizeEOF();
  },

  tokenizePart: function tokenizePart(input) {
    this.input += (0, _utils.preprocessInput)(input);

    while (this.index < this.input.length) {
      this.states[this.state].call(this);
    }
  },

  tokenizeEOF: function tokenizeEOF() {
    this.flushData();
  },

  flushData: function flushData() {
    if (this.state === 'data') {
      this.delegate.finishData();
      this.state = 'beforeData';
    }
  },

  peek: function peek() {
    return this.input.charAt(this.index);
  },

  consume: function consume() {
    var char = this.peek();

    this.index++;

    if (char === "\n") {
      this.line++;
      this.column = 0;
    } else {
      this.column++;
    }

    return char;
  },

  consumeCharRef: function consumeCharRef() {
    var endIndex = this.input.indexOf(';', this.index);
    if (endIndex === -1) {
      return;
    }
    var entity = this.input.slice(this.index, endIndex);
    var chars = this.entityParser.parse(entity);
    if (chars) {
      var count = entity.length;
      // consume the entity chars
      while (count) {
        this.consume();
        count--;
      }
      // consume the `;`
      this.consume();

      return chars;
    }
  },

  markTagStart: function markTagStart() {
    // these properties to be removed in next major bump
    this.tagLine = this.line;
    this.tagColumn = this.column;

    if (this.delegate.tagOpen) {
      this.delegate.tagOpen();
    }
  },

  states: {
    beforeData: function beforeData() {
      var char = this.peek();

      if (char === "<") {
        this.state = 'tagOpen';
        this.markTagStart();
        this.consume();
      } else {
        this.state = 'data';
        this.delegate.beginData();
      }
    },

    data: function data() {
      var char = this.peek();

      if (char === "<") {
        this.delegate.finishData();
        this.state = 'tagOpen';
        this.markTagStart();
        this.consume();
      } else if (char === "&") {
        this.consume();
        this.delegate.appendToData(this.consumeCharRef() || "&");
      } else {
        this.consume();
        this.delegate.appendToData(char);
      }
    },

    tagOpen: function tagOpen() {
      var char = this.consume();

      if (char === "!") {
        this.state = 'markupDeclaration';
      } else if (char === "/") {
        this.state = 'endTagOpen';
      } else if ((0, _utils.isAlpha)(char)) {
        this.state = 'tagName';
        this.delegate.beginStartTag();
        this.delegate.appendToTagName(char.toLowerCase());
      }
    },

    markupDeclaration: function markupDeclaration() {
      var char = this.consume();

      if (char === "-" && this.input.charAt(this.index) === "-") {
        this.consume();
        this.state = 'commentStart';
        this.delegate.beginComment();
      }
    },

    commentStart: function commentStart() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentStartDash';
      } else if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData(char);
        this.state = 'comment';
      }
    },

    commentStartDash: function commentStartDash() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEnd';
      } else if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData("-");
        this.state = 'comment';
      }
    },

    comment: function comment() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEndDash';
      } else {
        this.delegate.appendToCommentData(char);
      }
    },

    commentEndDash: function commentEndDash() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEnd';
      } else {
        this.delegate.appendToCommentData("-" + char);
        this.state = 'comment';
      }
    },

    commentEnd: function commentEnd() {
      var char = this.consume();

      if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData("--" + char);
        this.state = 'comment';
      }
    },

    tagName: function tagName() {
      var char = this.consume();

      if ((0, _utils.isSpace)(char)) {
        this.state = 'beforeAttributeName';
      } else if (char === "/") {
        this.state = 'selfClosingStartTag';
      } else if (char === ">") {
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToTagName(char);
      }
    },

    beforeAttributeName: function beforeAttributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        return;
      } else if (char === "/") {
        this.state = 'selfClosingStartTag';
        this.consume();
      } else if (char === ">") {
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'attributeName';
        this.delegate.beginAttribute();
        this.consume();
        this.delegate.appendToAttributeName(char);
      }
    },

    attributeName: function attributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.state = 'afterAttributeName';
        this.consume();
      } else if (char === "/") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === "=") {
        this.state = 'beforeAttributeValue';
        this.consume();
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.consume();
        this.delegate.appendToAttributeName(char);
      }
    },

    afterAttributeName: function afterAttributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        return;
      } else if (char === "/") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === "=") {
        this.consume();
        this.state = 'beforeAttributeValue';
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'attributeName';
        this.delegate.beginAttribute();
        this.delegate.appendToAttributeName(char);
      }
    },

    beforeAttributeValue: function beforeAttributeValue() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
      } else if (char === '"') {
        this.state = 'attributeValueDoubleQuoted';
        this.delegate.beginAttributeValue(true);
        this.consume();
      } else if (char === "'") {
        this.state = 'attributeValueSingleQuoted';
        this.delegate.beginAttributeValue(true);
        this.consume();
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'attributeValueUnquoted';
        this.delegate.beginAttributeValue(false);
        this.consume();
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueDoubleQuoted: function attributeValueDoubleQuoted() {
      var char = this.consume();

      if (char === '"') {
        this.delegate.finishAttributeValue();
        this.state = 'afterAttributeValueQuoted';
      } else if (char === "&") {
        this.delegate.appendToAttributeValue(this.consumeCharRef('"') || "&");
      } else {
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueSingleQuoted: function attributeValueSingleQuoted() {
      var char = this.consume();

      if (char === "'") {
        this.delegate.finishAttributeValue();
        this.state = 'afterAttributeValueQuoted';
      } else if (char === "&") {
        this.delegate.appendToAttributeValue(this.consumeCharRef("'") || "&");
      } else {
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueUnquoted: function attributeValueUnquoted() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'beforeAttributeName';
      } else if (char === "&") {
        this.consume();
        this.delegate.appendToAttributeValue(this.consumeCharRef(">") || "&");
      } else if (char === ">") {
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.consume();
        this.delegate.appendToAttributeValue(char);
      }
    },

    afterAttributeValueQuoted: function afterAttributeValueQuoted() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        this.state = 'beforeAttributeName';
      } else if (char === "/") {
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === ">") {
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'beforeAttributeName';
      }
    },

    selfClosingStartTag: function selfClosingStartTag() {
      var char = this.peek();

      if (char === ">") {
        this.consume();
        this.delegate.markTagAsSelfClosing();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'beforeAttributeName';
      }
    },

    endTagOpen: function endTagOpen() {
      var char = this.consume();

      if ((0, _utils.isAlpha)(char)) {
        this.state = 'tagName';
        this.delegate.beginEndTag();
        this.delegate.appendToTagName(char.toLowerCase());
      }
    }
  }
};

exports.default = EventedTokenizer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _eventedTokenizer = __webpack_require__(4);

var _eventedTokenizer2 = _interopRequireDefault(_eventedTokenizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tokenizer(entityParser, options) {
  this.token = null;
  this.startLine = 1;
  this.startColumn = 0;
  this.options = options || {};
  this.tokenizer = new _eventedTokenizer2.default(this, entityParser);
}

Tokenizer.prototype = {
  tokenize: function tokenize(input) {
    this.tokens = [];
    this.tokenizer.tokenize(input);
    return this.tokens;
  },

  tokenizePart: function tokenizePart(input) {
    this.tokens = [];
    this.tokenizer.tokenizePart(input);
    return this.tokens;
  },

  tokenizeEOF: function tokenizeEOF() {
    this.tokens = [];
    this.tokenizer.tokenizeEOF();
    return this.tokens[0];
  },

  reset: function reset() {
    this.token = null;
    this.startLine = 1;
    this.startColumn = 0;
  },

  addLocInfo: function addLocInfo() {
    if (this.options.loc) {
      this.token.loc = {
        start: {
          line: this.startLine,
          column: this.startColumn
        },
        end: {
          line: this.tokenizer.line,
          column: this.tokenizer.column
        }
      };
    }
    this.startLine = this.tokenizer.line;
    this.startColumn = this.tokenizer.column;
  },

  // Data

  beginData: function beginData() {
    this.token = {
      type: 'Chars',
      chars: ''
    };
    this.tokens.push(this.token);
  },

  appendToData: function appendToData(char) {
    this.token.chars += char;
  },

  finishData: function finishData() {
    this.addLocInfo();
  },

  // Comment

  beginComment: function beginComment() {
    this.token = {
      type: 'Comment',
      chars: ''
    };
    this.tokens.push(this.token);
  },

  appendToCommentData: function appendToCommentData(char) {
    this.token.chars += char;
  },

  finishComment: function finishComment() {
    this.addLocInfo();
  },

  // Tags - basic

  beginStartTag: function beginStartTag() {
    this.token = {
      type: 'StartTag',
      tagName: '',
      attributes: [],
      selfClosing: false
    };
    this.tokens.push(this.token);
  },

  beginEndTag: function beginEndTag() {
    this.token = {
      type: 'EndTag',
      tagName: ''
    };
    this.tokens.push(this.token);
  },

  finishTag: function finishTag() {
    this.addLocInfo();
  },

  markTagAsSelfClosing: function markTagAsSelfClosing() {
    this.token.selfClosing = true;
  },

  // Tags - name

  appendToTagName: function appendToTagName(char) {
    this.token.tagName += char;
  },

  // Tags - attributes

  beginAttribute: function beginAttribute() {
    this._currentAttribute = ["", "", null];
    this.token.attributes.push(this._currentAttribute);
  },

  appendToAttributeName: function appendToAttributeName(char) {
    this._currentAttribute[0] += char;
  },

  beginAttributeValue: function beginAttributeValue(isQuoted) {
    this._currentAttribute[2] = isQuoted;
  },

  appendToAttributeValue: function appendToAttributeValue(char) {
    this._currentAttribute[1] = this._currentAttribute[1] || "";
    this._currentAttribute[1] += char;
  },

  finishAttributeValue: function finishAttributeValue() {}
};

exports.default = Tokenizer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stateify = exports.TokenState = exports.CharacterState = undefined;

var _class = __webpack_require__(0);

function createStateClass() {
	return function (tClass) {
		this.j = [];
		this.T = tClass || null;
	};
}

/**
	A simple state machine that can emit token classes

	The `j` property in this class refers to state jumps. It's a
	multidimensional array where for each element:

	* index [0] is a symbol or class of symbols to transition to.
	* index [1] is a State instance which matches

	The type of symbol will depend on the target implementation for this class.
	In Linkify, we have a two-stage scanner. Each stage uses this state machine
	but with a slighly different (polymorphic) implementation.

	The `T` property refers to the token class.

	TODO: Can the `on` and `next` methods be combined?

	@class BaseState
*/
var BaseState = createStateClass();
BaseState.prototype = {
	defaultTransition: false,

	/**
 	@method constructor
 	@param {Class} tClass Pass in the kind of token to emit if there are
 		no jumps after this state and the state is accepting.
 */

	/**
 	On the given symbol(s), this machine should go to the given state
 		@method on
 	@param {Array|Mixed} symbol
 	@param {BaseState} state Note that the type of this state should be the
 		same as the current instance (i.e., don't pass in a different
 		subclass)
 */
	on: function on(symbol, state) {
		if (symbol instanceof Array) {
			for (var i = 0; i < symbol.length; i++) {
				this.j.push([symbol[i], state]);
			}
			return this;
		}
		this.j.push([symbol, state]);
		return this;
	},


	/**
 	Given the next item, returns next state for that item
 	@method next
 	@param {Mixed} item Should be an instance of the symbols handled by
 		this particular machine.
 	@return {State} state Returns false if no jumps are available
 */
	next: function next(item) {
		for (var i = 0; i < this.j.length; i++) {
			var jump = this.j[i];
			var symbol = jump[0]; // Next item to check for
			var state = jump[1]; // State to jump to if items match

			// compare item with symbol
			if (this.test(item, symbol)) {
				return state;
			}
		}

		// Nowhere left to jump!
		return this.defaultTransition;
	},


	/**
 	Does this state accept?
 	`true` only of `this.T` exists
 		@method accepts
 	@return {Boolean}
 */
	accepts: function accepts() {
		return !!this.T;
	},


	/**
 	Determine whether a given item "symbolizes" the symbol, where symbol is
 	a class of items handled by this state machine.
 		This method should be overriden in extended classes.
 		@method test
 	@param {Mixed} item Does this item match the given symbol?
 	@param {Mixed} symbol
 	@return {Boolean}
 */
	test: function test(item, symbol) {
		return item === symbol;
	},


	/**
 	Emit the token for this State (just return it in this case)
 	If this emits a token, this instance is an accepting state
 	@method emit
 	@return {Class} T
 */
	emit: function emit() {
		return this.T;
	}
};

/**
	State machine for string-based input

	@class CharacterState
	@extends BaseState
*/
var CharacterState = (0, _class.inherits)(BaseState, createStateClass(), {
	/**
 	Does the given character match the given character or regular
 	expression?
 		@method test
 	@param {String} char
 	@param {String|RegExp} charOrRegExp
 	@return {Boolean}
 */
	test: function test(character, charOrRegExp) {
		return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
	}
});

/**
	State machine for input in the form of TextTokens

	@class TokenState
	@extends BaseState
*/
var TokenState = (0, _class.inherits)(BaseState, createStateClass(), {

	/**
  * Similar to `on`, but returns the state the results in the transition from
  * the given item
  * @method jump
  * @param {Mixed} item
  * @param {Token} [token]
  * @return state
  */
	jump: function jump(token) {
		var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var state = this.next(new token('')); // dummy temp token
		if (state === this.defaultTransition) {
			// Make a new state!
			state = new this.constructor(tClass);
			this.on(token, state);
		} else if (tClass) {
			state.T = tClass;
		}
		return state;
	},


	/**
 	Is the given token an instance of the given token class?
 		@method test
 	@param {TextToken} token
 	@param {Class} tokenClass
 	@return {Boolean}
 */
	test: function test(token, tokenClass) {
		return token instanceof tokenClass;
	}
});

/**
	Given a non-empty target string, generates states (if required) for each
	consecutive substring of characters in str starting from the beginning of
	the string. The final state will have a special value, as specified in
	options. All other "in between" substrings will have a default end state.

	This turns the state machine into a Trie-like data structure (rather than a
	intelligently-designed DFA).

	Note that I haven't really tried these with any strings other than
	DOMAIN.

	@param {String} str
	@param {CharacterState} start State to jump from the first character
	@param {Class} endToken Token class to emit when the given string has been
		matched and no more jumps exist.
	@param {Class} defaultToken "Filler token", or which token type to emit when
		we don't have a full match
	@return {Array} list of newly-created states
*/
function stateify(str, start, endToken, defaultToken) {
	var i = 0,
	    len = str.length,
	    state = start,
	    newStates = [],
	    nextState = void 0;

	// Find the next state without a jump to the next character
	while (i < len && (nextState = state.next(str[i]))) {
		state = nextState;
		i++;
	}

	if (i >= len) {
		return [];
	} // no new tokens were added

	while (i < len - 1) {
		nextState = new CharacterState(defaultToken);
		newStates.push(nextState);
		state.on(str[i], nextState);
		state = nextState;
		i++;
	}

	nextState = new CharacterState(endToken);
	newStates.push(nextState);
	state.on(str[len - 1], nextState);

	return newStates;
}

exports.CharacterState = CharacterState;
exports.TokenState = TokenState;
exports.stateify = stateify;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createTokenClass() {
	return function (value) {
		if (value) {
			this.v = value;
		}
	};
}

exports.createTokenClass = createTokenClass;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _koCodemirror = __webpack_require__(9);

var _koCodemirror2 = _interopRequireDefault(_koCodemirror);

var _koUncloak = __webpack_require__(10);

var _koUncloak2 = _interopRequireDefault(_koUncloak);

var _tabsViewModel = __webpack_require__(11);

var _tabsViewModel2 = _interopRequireDefault(_tabsViewModel);

var _addSaneOnUnloadHandler = __webpack_require__(31);

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
      io = _window2.io;


  if (typeof io === 'undefined') {
    alert('Unable to connect to ' + SERVER_URI);
  } else {
    var deps = {
      win: window,
      doc: document,
      ko: ko,
      io: io,
      CodeMirror: CodeMirror,
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clientTabViewModel = __webpack_require__(12);

var _clientTabViewModel2 = _interopRequireDefault(_clientTabViewModel);

var _verbEditorTabViewModel = __webpack_require__(26);

var _verbEditorTabViewModel2 = _interopRequireDefault(_verbEditorTabViewModel);

var _functionEditorTabViewModel = __webpack_require__(28);

var _functionEditorTabViewModel2 = _interopRequireDefault(_functionEditorTabViewModel);

var _searchViewModel = __webpack_require__(30);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clientViewModel = __webpack_require__(13);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ansi_up = __webpack_require__(14);

var _ansi_up2 = _interopRequireDefault(_ansi_up);

var _colors = __webpack_require__(15);

var _html = __webpack_require__(16);

var _html2 = _interopRequireDefault(_html);

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
        io = deps.io;
    var observable = ko.observable,
        observableArray = ko.observableArray,
        computed = ko.computed;


    this.window = win;
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
      return this.linkifyCommands((0, _html2.default)(this.ansiUp.ansi_to_html(str)));
    }
  }]);

  return ClientViewModel;
}();

exports.default = ClientViewModel;

/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17).default;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = linkifyHtml;

var _simpleHtmlTokenizer = __webpack_require__(18);

var _simpleHtmlTokenizer2 = _interopRequireDefault(_simpleHtmlTokenizer);

var _linkify = __webpack_require__(21);

var linkify = _interopRequireWildcard(_linkify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = linkify.options;
var Options = options.Options;


var StartTag = 'StartTag';
var EndTag = 'EndTag';
var Chars = 'Chars';
var Comment = 'Comment';

/**
	`tokens` and `token` in this section refer to tokens generated by the HTML
	parser.
*/
function linkifyHtml(str) {
	var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var tokens = _simpleHtmlTokenizer2.default.tokenize(str);
	var linkifiedTokens = [];
	var linkified = [];
	var i;

	opts = new Options(opts);

	// Linkify the tokens given by the parser
	for (i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === StartTag) {
			linkifiedTokens.push(token);

			// Ignore all the contents of ignored tags
			var tagName = token.tagName.toUpperCase();
			var isIgnored = tagName === 'A' || options.contains(opts.ignoreTags, tagName);
			if (!isIgnored) {
				continue;
			}

			var preskipLen = linkifiedTokens.length;
			skipTagTokens(tagName, tokens, ++i, linkifiedTokens);
			i += linkifiedTokens.length - preskipLen - 1;
			continue;
		} else if (token.type !== Chars) {
			// Skip this token, it's not important
			linkifiedTokens.push(token);
			continue;
		}

		// Valid text token, linkify it!
		var linkifedChars = linkifyChars(token.chars, opts);
		linkifiedTokens.push.apply(linkifiedTokens, linkifedChars);
	}

	// Convert the tokens back into a string
	for (i = 0; i < linkifiedTokens.length; i++) {
		var _token = linkifiedTokens[i];
		switch (_token.type) {
			case StartTag:
				var link = '<' + _token.tagName;
				if (_token.attributes.length > 0) {
					var attrs = attrsToStrings(_token.attributes);
					link += ' ' + attrs.join(' ');
				}
				link += '>';
				linkified.push(link);
				break;
			case EndTag:
				linkified.push('</' + _token.tagName + '>');
				break;
			case Chars:
				linkified.push(escapeText(_token.chars));
				break;
			case Comment:
				linkified.push('<!--' + escapeText(_token.chars) + '-->');
				break;
		}
	}

	return linkified.join('');
}

/**
	`tokens` and `token` in this section referes to tokens returned by
	`linkify.tokenize`. `linkified` will contain HTML Parser-style tokens
*/
function linkifyChars(str, opts) {
	var tokens = linkify.tokenize(str);
	var result = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === 'nl' && opts.nl2br) {
			result.push({
				type: StartTag,
				tagName: 'br',
				attributes: [],
				selfClosing: true
			});
			continue;
		} else if (!token.isLink || !opts.check(token)) {
			result.push({ type: Chars, chars: token.toString() });
			continue;
		}

		var _opts$resolve = opts.resolve(token),
		    href = _opts$resolve.href,
		    formatted = _opts$resolve.formatted,
		    formattedHref = _opts$resolve.formattedHref,
		    tagName = _opts$resolve.tagName,
		    className = _opts$resolve.className,
		    target = _opts$resolve.target,
		    attributes = _opts$resolve.attributes;

		// Build up attributes


		var attributeArray = [['href', formattedHref]];

		if (className) {
			attributeArray.push(['class', className]);
		}

		if (target) {
			attributeArray.push(['target', target]);
		}

		for (var attr in attributes) {
			attributeArray.push([attr, attributes[attr]]);
		}

		// Add the required tokens
		result.push({
			type: StartTag,
			tagName: tagName,
			attributes: attributeArray,
			selfClosing: false
		});
		result.push({ type: Chars, chars: formatted });
		result.push({ type: EndTag, tagName: tagName });
	}

	return result;
}

/**
	Returns a list of tokens skipped until the closing tag of tagName.

	* `tagName` is the closing tag which will prompt us to stop skipping
	* `tokens` is the array of tokens generated by HTML5Tokenizer which
	* `i` is the index immediately after the opening tag to skip
	* `skippedTokens` is an array which skipped tokens are being pushed into

	Caveats

	* Assumes that i is the first token after the given opening tagName
	* The closing tag will be skipped, but nothing after it
	* Will track whether there is a nested tag of the same type
*/
function skipTagTokens(tagName, tokens, i, skippedTokens) {

	// number of tokens of this type on the [fictional] stack
	var stackCount = 1;

	while (i < tokens.length && stackCount > 0) {
		var token = tokens[i];

		if (token.type === StartTag && token.tagName.toUpperCase() === tagName) {
			// Nested tag of the same type, "add to stack"
			stackCount++;
		} else if (token.type === EndTag && token.tagName.toUpperCase() === tagName) {
			// Closing tag
			stackCount--;
		}

		skippedTokens.push(token);
		i++;
	}

	// Note that if stackCount > 0 here, the HTML is probably invalid
	return skippedTokens;
}

function escapeText(text) {
	// Not required, HTML tokenizer ensures this occurs properly
	return text;
}

function escapeAttr(attr) {
	return attr.replace(/"/g, '&quot;');
}

function attrsToStrings(attrs) {
	var attrStrs = [];
	for (var i = 0; i < attrs.length; i++) {
		var _attrs$i = attrs[i],
		    name = _attrs$i[0],
		    value = _attrs$i[1];

		attrStrs.push(name + '="' + escapeAttr(value) + '"');
	}
	return attrStrs;
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _html5NamedCharRefs = __webpack_require__(2);

var _html5NamedCharRefs2 = _interopRequireDefault(_html5NamedCharRefs);

var _entityParser = __webpack_require__(3);

var _entityParser2 = _interopRequireDefault(_entityParser);

var _eventedTokenizer = __webpack_require__(4);

var _eventedTokenizer2 = _interopRequireDefault(_eventedTokenizer);

var _tokenizer = __webpack_require__(5);

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _tokenize = __webpack_require__(20);

var _tokenize2 = _interopRequireDefault(_tokenize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTML5Tokenizer = {
	HTML5NamedCharRefs: _html5NamedCharRefs2.default,
	EntityParser: _entityParser2.default,
	EventedTokenizer: _eventedTokenizer2.default,
	Tokenizer: _tokenizer2.default,
	tokenize: _tokenize2.default
};

exports.default = HTML5Tokenizer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isSpace = isSpace;
exports.isAlpha = isAlpha;
exports.preprocessInput = preprocessInput;
var WSP = /[\t\n\f ]/;
var ALPHA = /[A-Za-z]/;
var CRLF = /\r\n?/g;

function isSpace(char) {
  return WSP.test(char);
}

function isAlpha(char) {
  return ALPHA.test(char);
}

function preprocessInput(input) {
  return input.replace(CRLF, "\n");
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = tokenize;

var _tokenizer = __webpack_require__(5);

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _entityParser = __webpack_require__(3);

var _entityParser2 = _interopRequireDefault(_entityParser);

var _html5NamedCharRefs = __webpack_require__(2);

var _html5NamedCharRefs2 = _interopRequireDefault(_html5NamedCharRefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tokenize(input, options) {
  var tokenizer = new _tokenizer2.default(new _entityParser2.default(_html5NamedCharRefs2.default), options);
  return tokenizer.tokenize(input);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.tokenize = exports.test = exports.scanner = exports.parser = exports.options = exports.inherits = exports.find = undefined;

var _class = __webpack_require__(0);

var _options = __webpack_require__(22);

var options = _interopRequireWildcard(_options);

var _scanner = __webpack_require__(23);

var scanner = _interopRequireWildcard(_scanner);

var _parser = __webpack_require__(24);

var parser = _interopRequireWildcard(_parser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (!Array.isArray) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

/**
	Converts a string into tokens that represent linkable and non-linkable bits
	@method tokenize
	@param {String} str
	@return {Array} tokens
*/
var tokenize = function tokenize(str) {
	return parser.run(scanner.run(str));
};

/**
	Returns a list of linkable items in the given string.
*/
var find = function find(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	var filtered = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		if (token.isLink && (!type || token.type === type)) {
			filtered.push(token.toObject());
		}
	}

	return filtered;
};

/**
	Is the given string valid linkable text of some sort
	Note that this does not trim the text for you.

	Optionally pass in a second `type` param, which is the type of link to test
	for.

	For example,

		test(str, 'email');

	Will return `true` if str is a valid email.
*/
var test = function test(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
};

// Scanner and parser provide states and tokens for the lexicographic stage
// (will be used to add additional link types)
exports.find = find;
exports.inherits = _class.inherits;
exports.options = options;
exports.parser = parser;
exports.scanner = scanner;
exports.test = test;
exports.tokenize = tokenize;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var defaults = {
	defaultProtocol: 'http',
	events: null,
	format: noop,
	formatHref: noop,
	nl2br: false,
	tagName: 'a',
	target: typeToTarget,
	validate: true,
	ignoreTags: [],
	attributes: null,
	className: 'linkified' };

exports.defaults = defaults;
exports.Options = Options;
exports.contains = contains;


function Options(opts) {
	opts = opts || {};

	this.defaultProtocol = opts.defaultProtocol || defaults.defaultProtocol;
	this.events = opts.events || defaults.events;
	this.format = opts.format || defaults.format;
	this.formatHref = opts.formatHref || defaults.formatHref;
	this.nl2br = opts.nl2br || defaults.nl2br;
	this.tagName = opts.tagName || defaults.tagName;
	this.target = opts.target || defaults.target;
	this.validate = opts.validate || defaults.validate;
	this.ignoreTags = [];

	// linkAttributes and linkClass is deprecated
	this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
	this.className = opts.className || opts.linkClass || defaults.className;

	// Make all tags names upper case

	var ignoredTags = opts.ignoreTags || defaults.ignoreTags;
	for (var i = 0; i < ignoredTags.length; i++) {
		this.ignoreTags.push(ignoredTags[i].toUpperCase());
	}
}

Options.prototype = {
	/**
  * Given the token, return all options for how it should be displayed
  */
	resolve: function resolve(token) {
		var href = token.toHref(this.defaultProtocol);
		return {
			formatted: this.get('format', token.toString(), token),
			formattedHref: this.get('formatHref', href, token),
			tagName: this.get('tagName', href, token),
			className: this.get('className', href, token),
			target: this.get('target', href, token),
			events: this.getObject('events', href, token),
			attributes: this.getObject('attributes', href, token)
		};
	},


	/**
  * Returns true or false based on whether a token should be displayed as a
  * link based on the user options. By default,
  */
	check: function check(token) {
		return this.get('validate', token.toString(), token);
	},


	// Private methods

	/**
  * Resolve an option's value based on the value of the option and the given
  * params.
  * @param [String] key Name of option to use
  * @param operator will be passed to the target option if it's method
  * @param [MultiToken] token The token from linkify.tokenize
  */
	get: function get(key, operator, token) {
		var option = this[key];

		if (!option) {
			return option;
		}

		switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
			case 'function':
				return option(operator, token.type);
			case 'object':
				var optionValue = option[token.type] || defaults[key];
				return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
		}

		return option;
	},
	getObject: function getObject(key, operator, token) {
		var option = this[key];
		return typeof option === 'function' ? option(operator, token.type) : option;
	}
};

/**
 * Quick indexOf replacement for checking the ignoreTags option
 */
function contains(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
}

function noop(val) {
	return val;
}

function typeToTarget(href, type) {
	return type === 'url' ? '_blank' : null;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(6);

var _text = __webpack_require__(1);

var TOKENS = _interopRequireWildcard(_text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tlds = 'aaa|aarp|abb|abbott|abogado|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|af|afl|ag|agency|ai|aig|airforce|airtel|al|alibaba|alipay|allfinanz|alsace|am|amica|amsterdam|an|analytics|android|ao|apartments|app|apple|aq|aquarelle|ar|aramco|archi|army|arpa|arte|as|asia|associates|at|attorney|au|auction|audi|audio|author|auto|autos|avianca|aw|ax|axa|az|azure|ba|baidu|band|bank|bar|barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bb|bbc|bbva|bcg|bcn|bd|be|beats|beer|bentley|berlin|best|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bom|bond|boo|book|boots|bosch|bostik|bot|boutique|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|camera|camp|cancerresearch|canon|capetown|capital|car|caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chloe|christmas|chrome|church|ci|cipriani|circle|cisco|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|date|dating|datsun|day|dclk|de|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|dnp|do|docs|dog|doha|domains|download|drive|dubai|durban|dvag|dz|earth|eat|ec|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|er|erni|es|esq|estate|et|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|fage|fail|fairwinds|faith|family|fan|fans|farm|fashion|fast|feedback|ferrero|fi|film|final|finance|financial|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|florist|flowers|flsmidth|fly|fm|fo|foo|football|ford|forex|forsale|forum|foundation|fox|fr|fresenius|frl|frogans|frontier|fund|furniture|futbol|fyi|ga|gal|gallery|gallup|game|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|gold|goldpoint|golf|goo|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|group|gs|gt|gu|gucci|guge|guide|guitars|guru|gw|gy|hamburg|hangout|haus|hdfcbank|health|healthcare|help|helsinki|here|hermes|hiphop|hitachi|hiv|hk|hm|hn|hockey|holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hr|hsbc|ht|hu|hyundai|ibm|icbc|ice|icu|id|ie|ifm|iinet|il|im|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|international|investments|io|ipiranga|iq|ir|irish|is|iselect|ist|istanbul|it|itau|iwc|jaguar|java|jcb|je|jetzt|jewelry|jlc|jll|jm|jmp|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kitchen|kiwi|km|kn|koeln|komatsu|kp|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|lamborghini|lamer|lancaster|land|landrover|lanxess|lasalle|lat|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|legal|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|limited|limo|lincoln|linde|link|live|living|lixil|lk|loan|loans|local|locus|lol|london|lotte|lotto|love|lr|ls|lt|ltd|ltda|lu|lupin|luxe|luxury|lv|ly|ma|madrid|maif|maison|makeup|man|management|mango|market|marketing|markets|marriott|mba|mc|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|mg|mh|miami|microsoft|mil|mini|mk|ml|mm|mma|mn|mo|mobi|mobily|moda|moe|moi|mom|monash|money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mp|mq|mr|ms|mt|mtn|mtpc|mtr|mu|museum|mutuelle|mv|mw|mx|my|mz|na|nadex|nagoya|name|natura|navy|nc|ne|nec|net|netbank|network|neustar|new|news|nexus|nf|ng|ngo|nhk|ni|nico|nikon|ninja|nissan|nl|no|nokia|norton|nowruz|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|office|okinawa|om|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|origins|osaka|otsuka|ovh|pa|page|pamperedchef|panerai|paris|pars|partners|parts|party|passagens|pe|pet|pf|pg|ph|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pohl|poker|porn|post|pr|praxi|press|pro|prod|productions|prof|promo|properties|property|protection|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|racing|re|read|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|ricoh|rio|rip|ro|rocher|rocks|rodeo|room|rs|rsvp|ru|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|saxo|sb|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scor|scot|sd|se|seat|security|seek|select|sener|services|seven|sew|sex|sexy|sfr|sg|sh|sharp|shell|shia|shiksha|shoes|show|shriram|si|singles|site|sj|sk|ski|skin|sky|skype|sl|sm|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|st|stada|star|starhub|statefarm|statoil|stc|stcgroup|stockholm|storage|store|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|taobao|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|team|tech|technology|tel|telecity|telefonica|temasek|tennis|tf|tg|th|thd|theater|theatre|tickets|tienda|tiffany|tips|tires|tirol|tj|tk|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tp|tr|trade|trading|training|travel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubs|ug|uk|unicom|university|uno|uol|us|uy|uz|va|vacations|vana|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|viking|villas|vin|vip|virgin|vision|vista|vistaprint|viva|vlaanderen|vn|vodka|volkswagen|vote|voting|voto|voyage|vu|vuelos|wales|walter|wang|wanggou|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|wme|wolterskluwer|work|works|world|ws|wtc|wtf|xbox|xerox|xin|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|youtube|yt|za|zara|zero|zip|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

/**
	The scanner provides an interface that takes a string of text as input, and
	outputs an array of tokens instances that can be used for easy URL parsing.

	@module linkify
	@submodule scanner
	@main scanner
*/

var NUMBERS = '0123456789'.split('');
var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
var makeState = function makeState(tokenClass) {
	return new _state.CharacterState(tokenClass);
};

// Frequently used states
var S_START = makeState();
var S_NUM = makeState(_text.NUM);
var S_DOMAIN = makeState(_text.DOMAIN);
var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
var S_WS = makeState(_text.WS);

// States for special URL symbols
S_START.on('@', makeState(_text.AT)).on('.', makeState(_text.DOT)).on('+', makeState(_text.PLUS)).on('#', makeState(_text.POUND)).on('?', makeState(_text.QUERY)).on('/', makeState(_text.SLASH)).on('_', makeState(_text.UNDERSCORE)).on(':', makeState(_text.COLON)).on('{', makeState(_text.OPENBRACE)).on('[', makeState(_text.OPENBRACKET)).on('<', makeState(_text.OPENANGLEBRACKET)).on('(', makeState(_text.OPENPAREN)).on('}', makeState(_text.CLOSEBRACE)).on(']', makeState(_text.CLOSEBRACKET)).on('>', makeState(_text.CLOSEANGLEBRACKET)).on(')', makeState(_text.CLOSEPAREN)).on('&', makeState(_text.AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(_text.PUNCTUATION));

// Whitespace jumps
// Tokens of only non-newline whitespace are arbitrarily long
S_START.on('\n', makeState(_text.NL)).on(WHITESPACE, S_WS);

// If any whitespace except newline, more whitespace!
S_WS.on(WHITESPACE, S_WS);

// Generates states for top-level domains
// Note that this is most accurate when tlds are in alphabetical order
for (var i = 0; i < tlds.length; i++) {
	var newStates = (0, _state.stateify)(tlds[i], S_START, _text.TLD, _text.DOMAIN);
	domainStates.push.apply(domainStates, newStates);
}

// Collect the states generated by different protocls
var partialProtocolFileStates = (0, _state.stateify)('file', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolFtpStates = (0, _state.stateify)('ftp', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolHttpStates = (0, _state.stateify)('http', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolMailtoStates = (0, _state.stateify)('mailto', S_START, _text.DOMAIN, _text.DOMAIN);

// Add the states to the array of DOMAINeric states
domainStates.push.apply(domainStates, partialProtocolFileStates);
domainStates.push.apply(domainStates, partialProtocolFtpStates);
domainStates.push.apply(domainStates, partialProtocolHttpStates);

// Protocol states
var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
var S_MAILTO = partialProtocolMailtoStates.pop();
var S_PROTOCOL_SECURE = makeState(_text.DOMAIN);
var S_FULL_PROTOCOL = makeState(_text.PROTOCOL); // Full protocol ends with COLON
var S_FULL_MAILTO = makeState(_text.MAILTO); // Mailto ends with COLON

// Secure protocols (end with 's')
S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

domainStates.push(S_PROTOCOL_SECURE);

// Become protocol tokens after a COLON
S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
S_MAILTO.on(':', S_FULL_MAILTO);

// Localhost
var partialLocalhostStates = (0, _state.stateify)('localhost', S_START, _text.LOCALHOST, _text.DOMAIN);
domainStates.push.apply(domainStates, partialLocalhostStates);

// Everything else
// DOMAINs make more DOMAINs
// Number and character transitions
S_START.on(NUMBERS, S_NUM);
S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

// All the generated states should have a jump to DOMAIN
for (var _i = 0; _i < domainStates.length; _i++) {
	domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
}

S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

// Set default transition
S_START.defaultTransition = makeState(_text.SYM);

/**
	Given a string, returns an array of TOKEN instances representing the
	composition of that string.

	@method run
	@param {String} str Input string to scan
	@return {Array} Array of TOKEN instances
*/
var run = function run(str) {

	// The state machine only looks at lowercase strings.
	// This selective `toLowerCase` is used because lowercasing the entire
	// string causes the length and character position to vary in some in some
	// non-English strings. This happens only on V8-based runtimes.
	var lowerStr = str.replace(/[A-Z]/g, function (c) {
		return c.toLowerCase();
	});
	var len = str.length;
	var tokens = []; // return value

	var cursor = 0;

	// Tokenize the string
	while (cursor < len) {
		var state = S_START;
		var secondState = null;
		var nextState = null;
		var tokenLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
			secondState = null;
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			tokenLength++;
			cursor++;
		}

		if (sinceAccepts < 0) {
			continue;
		} // Should never happen

		// Roll back to the latest accepting state
		cursor -= sinceAccepts;
		tokenLength -= sinceAccepts;

		// Get the class for the new token
		var TOKEN = latestAccepting.emit(); // Current token class

		// No more jumps, just make a new token
		tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
	}

	return tokens;
};

var start = S_START;
exports.State = _state.CharacterState;
exports.TOKENS = TOKENS;
exports.run = run;
exports.start = start;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(6);

var _text = __webpack_require__(1);

var TEXT_TOKENS = _interopRequireWildcard(_text);

var _multi = __webpack_require__(25);

var MULTI_TOKENS = _interopRequireWildcard(_multi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var makeState = function makeState(tokenClass) {
	return new _state.TokenState(tokenClass);
};

// The universal starting state.
/**
	Not exactly parser, more like the second-stage scanner (although we can
	theoretically hotswap the code here with a real parser in the future... but
	for a little URL-finding utility abstract syntax trees may be a little
	overkill).

	URL format: http://en.wikipedia.org/wiki/URI_scheme
	Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
	reference)

	@module linkify
	@submodule parser
	@main parser
*/

var S_START = makeState();

// Intermediate states for URLs. Note that domains that begin with a protocol
// are treated slighly differently from those that don't.
var S_PROTOCOL = makeState(); // e.g., 'http:'
var S_MAILTO = makeState(); // 'mailto:'
var S_PROTOCOL_SLASH = makeState(); // e.g., '/', 'http:/''
var S_PROTOCOL_SLASH_SLASH = makeState(); // e.g., '//', 'http://'
var S_DOMAIN = makeState(); // parsed string ends with a potential domain name (A)
var S_DOMAIN_DOT = makeState(); // (A) domain followed by DOT
var S_TLD = makeState(_multi.URL); // (A) Simplest possible URL with no query string
var S_TLD_COLON = makeState(); // (A) URL followed by colon (potential port number here)
var S_TLD_PORT = makeState(_multi.URL); // TLD followed by a port number
var S_URL = makeState(_multi.URL); // Long URL with optional port and maybe query string
var S_URL_NON_ACCEPTING = makeState(); // URL followed by some symbols (will not be part of the final URL)
var S_URL_OPENBRACE = makeState(); // URL followed by {
var S_URL_OPENBRACKET = makeState(); // URL followed by [
var S_URL_OPENANGLEBRACKET = makeState(); // URL followed by <
var S_URL_OPENPAREN = makeState(); // URL followed by (
var S_URL_OPENBRACE_Q = makeState(_multi.URL); // URL followed by { and some symbols that the URL can end it
var S_URL_OPENBRACKET_Q = makeState(_multi.URL); // URL followed by [ and some symbols that the URL can end it
var S_URL_OPENANGLEBRACKET_Q = makeState(_multi.URL); // URL followed by < and some symbols that the URL can end it
var S_URL_OPENPAREN_Q = makeState(_multi.URL); // URL followed by ( and some symbols that the URL can end it
var S_URL_OPENBRACE_SYMS = makeState(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
var S_URL_OPENBRACKET_SYMS = makeState(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENANGLEBRACKET_SYMS = makeState(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENPAREN_SYMS = makeState(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
var S_EMAIL_DOMAIN = makeState(); // parsed string starts with local email info + @ with a potential domain name (C)
var S_EMAIL_DOMAIN_DOT = makeState(); // (C) domain followed by DOT
var S_EMAIL = makeState(_multi.EMAIL); // (C) Possible email address (could have more tlds)
var S_EMAIL_COLON = makeState(); // (C) URL followed by colon (potential port number here)
var S_EMAIL_PORT = makeState(_multi.EMAIL); // (C) Email address with a port
var S_MAILTO_EMAIL = makeState(_multi.MAILTOEMAIL); // Email that begins with the mailto prefix (D)
var S_MAILTO_EMAIL_NON_ACCEPTING = makeState(); // (D) Followed by some non-query string chars
var S_LOCALPART = makeState(); // Local part of the email address
var S_LOCALPART_AT = makeState(); // Local part of the email address plus @
var S_LOCALPART_DOT = makeState(); // Local part of the email address plus '.' (localpart cannot end in .)
var S_NL = makeState(_multi.NL); // single new line

// Make path from start to protocol (with '//')
S_START.on(_text.NL, S_NL).on(_text.PROTOCOL, S_PROTOCOL).on(_text.MAILTO, S_MAILTO).on(_text.SLASH, S_PROTOCOL_SLASH);

S_PROTOCOL.on(_text.SLASH, S_PROTOCOL_SLASH);
S_PROTOCOL_SLASH.on(_text.SLASH, S_PROTOCOL_SLASH_SLASH);

// The very first potential domain name
S_START.on(_text.TLD, S_DOMAIN).on(_text.DOMAIN, S_DOMAIN).on(_text.LOCALHOST, S_TLD).on(_text.NUM, S_DOMAIN);

// Force URL for protocol followed by anything sane
S_PROTOCOL_SLASH_SLASH.on(_text.TLD, S_URL).on(_text.DOMAIN, S_URL).on(_text.NUM, S_URL).on(_text.LOCALHOST, S_URL);

// Account for dots and hyphens
// hyphens are usually parts of domain names
S_DOMAIN.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL_DOMAIN.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Hyphen can jump back to a domain name

// After the first domain and a dot, we can find either a URL or another domain
S_DOMAIN_DOT.on(_text.TLD, S_TLD).on(_text.DOMAIN, S_DOMAIN).on(_text.NUM, S_DOMAIN).on(_text.LOCALHOST, S_DOMAIN);

S_EMAIL_DOMAIN_DOT.on(_text.TLD, S_EMAIL).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.NUM, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL_DOMAIN);

// S_TLD accepts! But the URL could be longer, try to find a match greedily
// The `run` function should be able to "rollback" to the accepting state
S_TLD.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Become real URLs after `SLASH` or `COLON NUM SLASH`
// Here PSS and non-PSS converge
S_TLD.on(_text.COLON, S_TLD_COLON).on(_text.SLASH, S_URL);
S_TLD_COLON.on(_text.NUM, S_TLD_PORT);
S_TLD_PORT.on(_text.SLASH, S_URL);
S_EMAIL.on(_text.COLON, S_EMAIL_COLON);
S_EMAIL_COLON.on(_text.NUM, S_EMAIL_PORT);

// Types of characters the URL can definitely end in
var qsAccepting = [_text.DOMAIN, _text.AT, _text.LOCALHOST, _text.NUM, _text.PLUS, _text.POUND, _text.PROTOCOL, _text.SLASH, _text.TLD, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND];

// Types of tokens that can follow a URL and be part of the query string
// but cannot be the very last characters
// Characters that cannot appear in the URL at all should be excluded
var qsNonAccepting = [_text.COLON, _text.DOT, _text.QUERY, _text.PUNCTUATION, _text.CLOSEBRACE, _text.CLOSEBRACKET, _text.CLOSEANGLEBRACKET, _text.CLOSEPAREN, _text.OPENBRACE, _text.OPENBRACKET, _text.OPENANGLEBRACKET, _text.OPENPAREN];

// These states are responsible primarily for determining whether or not to
// include the final round bracket.

// URL, followed by an opening bracket
S_URL.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// URL with extra symbols at the end, followed by an opening bracket
S_URL_NON_ACCEPTING.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// Closing bracket component. This character WILL be included in the URL
S_URL_OPENBRACE.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_Q.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_Q.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_Q.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_Q.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_SYMS.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_SYMS.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_SYMS.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_SYMS.on(_text.CLOSEPAREN, S_URL);

// URL that beings with an opening bracket, followed by a symbols.
// Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
// has a single opening bracket for some reason).
S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// URL that begins with an opening bracket, followed by some symbols
S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// Account for the query string
S_URL.on(qsAccepting, S_URL);
S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

// Email address-specific state definitions
// Note: We are not allowing '/' in email addresses since this would interfere
// with real URLs

// For addresses with the mailto prefix
// 'mailto:' followed by anything sane is a valid email
S_MAILTO.on(_text.TLD, S_MAILTO_EMAIL).on(_text.DOMAIN, S_MAILTO_EMAIL).on(_text.NUM, S_MAILTO_EMAIL).on(_text.LOCALHOST, S_MAILTO_EMAIL);

// Greedily get more potential valid email values
S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

// For addresses without the mailto prefix
// Tokens allowed in the localpart of the email
var localpartAccepting = [_text.DOMAIN, _text.NUM, _text.PLUS, _text.POUND, _text.QUERY, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND, _text.TLD];

// Some of the tokens in `localpartAccepting` are already accounted for here and
// will not be overwritten (don't worry)
S_DOMAIN.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_TLD.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

// Okay we're on a localpart. Now what?
// TODO: IP addresses and what if the email starts with numbers?
S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT) // close to an email address now
.on(_text.DOT, S_LOCALPART_DOT);
S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
S_LOCALPART_AT.on(_text.TLD, S_EMAIL_DOMAIN).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL);
// States following `@` defined above

var run = function run(tokens) {
	var len = tokens.length;
	var cursor = 0;
	var multis = [];
	var textTokens = [];

	while (cursor < len) {
		var state = S_START;
		var secondState = null;
		var nextState = null;
		var multiLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
			// Starting tokens with nowhere to jump to.
			// Consider these to be just plain text
			textTokens.push(tokens[cursor++]);
		}

		while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {

			// Get the next state
			secondState = null;
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			cursor++;
			multiLength++;
		}

		if (sinceAccepts < 0) {

			// No accepting state was found, part of a regular text token
			// Add all the tokens we looked at to the text tokens array
			for (var i = cursor - multiLength; i < cursor; i++) {
				textTokens.push(tokens[i]);
			}
		} else {

			// Accepting state!

			// First close off the textTokens (if available)
			if (textTokens.length > 0) {
				multis.push(new _multi.TEXT(textTokens));
				textTokens = [];
			}

			// Roll back to the latest accepting state
			cursor -= sinceAccepts;
			multiLength -= sinceAccepts;

			// Create a new multitoken
			var MULTI = latestAccepting.emit();
			multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
		}
	}

	// Finally close off the textTokens (if available)
	if (textTokens.length > 0) {
		multis.push(new _multi.TEXT(textTokens));
	}

	return multis;
};

exports.State = _state.TokenState;
exports.TOKENS = MULTI_TOKENS;
exports.run = run;
exports.start = S_START;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.URL = exports.TEXT = exports.NL = exports.EMAIL = exports.MAILTOEMAIL = exports.Base = undefined;

var _createTokenClass = __webpack_require__(7);

var _class = __webpack_require__(0);

var _text = __webpack_require__(1);

/******************************************************************************
	Multi-Tokens
	Tokens composed of arrays of TextTokens
******************************************************************************/

// Is the given token a valid domain token?
// Should nums be included here?
function isDomainToken(token) {
	return token instanceof _text.DOMAIN || token instanceof _text.TLD;
}

/**
	Abstract class used for manufacturing tokens of text tokens. That is rather
	than the value for a token being a small string of text, it's value an array
	of text tokens.

	Used for grouping together URLs, emails, hashtags, and other potential
	creations.

	@class MultiToken
	@abstract
*/
var MultiToken = (0, _createTokenClass.createTokenClass)();

MultiToken.prototype = {
	/**
 	String representing the type for this token
 	@property type
 	@default 'TOKEN'
 */
	type: 'token',

	/**
 	Is this multitoken a link?
 	@property isLink
 	@default false
 */
	isLink: false,

	/**
 	Return the string this token represents.
 	@method toString
 	@return {String}
 */
	toString: function toString() {
		var result = [];
		for (var i = 0; i < this.v.length; i++) {
			result.push(this.v[i].toString());
		}
		return result.join('');
	},


	/**
 	What should the value for this token be in the `href` HTML attribute?
 	Returns the `.toString` value by default.
 		@method toHref
 	@return {String}
 */
	toHref: function toHref() {
		return this.toString();
	},


	/**
 	Returns a hash of relevant values for this token, which includes keys
 	* type - Kind of token ('url', 'email', etc.)
 	* value - Original text
 	* href - The value that should be added to the anchor tag's href
 		attribute
 		@method toObject
 	@param {String} [protocol] `'http'` by default
 	@return {Object}
 */
	toObject: function toObject() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		return {
			type: this.type,
			value: this.toString(),
			href: this.toHref(protocol)
		};
	}
};

/**
	Represents an arbitrarily mailto email address with the prefix included
	@class MAILTO
	@extends MultiToken
*/
var MAILTOEMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true
});

/**
	Represents a list of tokens making up a valid email address
	@class EMAIL
	@extends MultiToken
*/
var EMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true,
	toHref: function toHref() {
		var tokens = this.v;
		return 'mailto:' + this.toString();
	}
});

/**
	Represents some plain text
	@class TEXT
	@extends MultiToken
*/
var TEXT = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'text' });

/**
	Multi-linebreak token - represents a line break
	@class NL
	@extends MultiToken
*/
var NL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'nl' });

/**
	Represents a list of tokens making up a valid URL
	@class URL
	@extends MultiToken
*/
var URL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'url',
	isLink: true,

	/**
 	Lowercases relevant parts of the domain and adds the protocol if
 	required. Note that this will not escape unsafe HTML characters in the
 	URL.
 		@method href
 	@param {String} protocol
 	@return {String}
 */
	toHref: function toHref() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		var hasProtocol = false;
		var hasSlashSlash = false;
		var tokens = this.v;
		var result = [];
		var i = 0;

		// Make the first part of the domain lowercase
		// Lowercase protocol
		while (tokens[i] instanceof _text.PROTOCOL) {
			hasProtocol = true;
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Skip slash-slash
		while (tokens[i] instanceof _text.SLASH) {
			hasSlashSlash = true;
			result.push(tokens[i].toString());
			i++;
		}

		// Lowercase all other characters in the domain
		while (isDomainToken(tokens[i])) {
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Leave all other characters as they were written
		for (; i < tokens.length; i++) {
			result.push(tokens[i].toString());
		}

		result = result.join('');

		if (!(hasProtocol || hasSlashSlash)) {
			result = protocol + '://' + result;
		}

		return result;
	},
	hasProtocol: function hasProtocol() {
		return this.v[0] instanceof _text.PROTOCOL;
	}
});

exports.Base = MultiToken;
exports.MAILTOEMAIL = MAILTOEMAIL;
exports.EMAIL = EMAIL;
exports.NL = NL;
exports.TEXT = TEXT;
exports.URL = URL;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _verbEditorViewModel = __webpack_require__(27);

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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _functionEditorViewModel = __webpack_require__(29);

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
/* 29 */
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
/* 30 */
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
/* 31 */
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