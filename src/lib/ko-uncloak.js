/* global ko */

function init(element) {
  element.classList.remove('cloak');
}

function register() {
  ko.bindingHandlers.uncloak = { init };
}

export default { register };
