function register (ko) {
  function init (element) {
    element.classList.remove('cloak')
  }

  ko.bindingHandlers.uncloak = { init }
}

export default { register }
