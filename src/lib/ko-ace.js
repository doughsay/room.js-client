import ko from 'knockout';
let editor;

function init(element) {
  editor = window.ace.edit(element);
  editor.setTheme('ace/theme/tomorrow_night_bright');
}

function update(element, valueAccessor) {
  const binding = ko.utils.unwrapObservable(valueAccessor());
  let session;

  if (!binding) {
    return;
  }

  session = binding.session();

  if (!session) {
    // initialize a new session
    session = window.ace.createEditSession(binding.value(), 'ace/mode/javascript');
    session.setTabSize(2);
    binding.session(session);

    // bind changes from session to view model
    session.on('change', () => {
      const newValue = session.getValue();
      const currentValue = binding.value();

      if (newValue !== currentValue) {
        binding.value(newValue);
      }
    });

    // bind changes from view model to session
    binding.value.subscribe((newValue) => {
      const currentValue = session.getValue();

      if (newValue !== currentValue) {
        session.setValue(newValue);
      }
    });
  }

  if (session !== editor.getSession()) {
    editor.setSession(session);
  }
}

export default { init, update };
