var ko = require('knockout')

function setHeight(element) {
  var windowHeight = window.innerHeight
    , offset = element.offsetTop
    , availableSpace = windowHeight - offset

  element.style.height = availableSpace + 'px'
}

function init(element) {
  window.addEventListener('resize', function() { setHeight(element) })
}

function update(element, valueAccessor) {
  var autoHeight = ko.utils.unwrapObservable(valueAccessor())

  if (autoHeight) {
    window.setTimeout(function() { setHeight(element) }, 50) // TODO ugh
  }
}

ko.bindingHandlers.autoHeight = { init: init, update: update }
