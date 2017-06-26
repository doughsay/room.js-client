import ko from 'knockout'

function register () {
  function init (element) {
    element.classList.remove('cloak')
  }

  ko.bindingHandlers.uncloak = { init }
}

export default { register }
