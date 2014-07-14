var ko = require('knockout')
  , editor

function init(element) {
  editor = window.ace.edit(element)
  editor.setTheme('ace/theme/tomorrow_night_bright')
}

function update(element, valueAccessor) {
  var binding = ko.utils.unwrapObservable(valueAccessor())
    , session

  if (!binding) {
    return
  }

  session = binding.session()

  if (!session) {
    // initialize a new session
    session = window.ace
                    .createEditSession(binding.value(), 'ace/mode/javascript')
    session.setTabSize(2)
    binding.session(session)

    // bind changes from session to view model
    session.on('change', function() {
      var newValue = session.getValue()
        , currentValue = binding.value()

      if (newValue !== currentValue) {
        binding.value(newValue)
      }
    })

    // bind changes from view model to session
    binding.value.subscribe(function(newValue) {
      var currentValue = session.getValue()

      if (newValue !== currentValue) {
        session.setValue(newValue)
      }
    })
  }

  if (session !== editor.getSession()) {
    editor.setSession(session)
  }
}

ko.bindingHandlers.ace = { init: init, update: update }
