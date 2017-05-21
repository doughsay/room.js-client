function register (ko, CodeMirror) {
  function init (element, valueAccessor, allBindings) {
    const options = allBindings.get('codemirrorOptions') || {}
    options.value = ko.unwrap(valueAccessor())
    const editor = CodeMirror(element, options) // eslint-disable-line new-cap

    editor.on('change', cm => {
      const value = valueAccessor()
      value(cm.getValue())
    })

    element.editor = editor
  }

  function update (element, valueAccessor) {
    const observedValue = ko.unwrap(valueAccessor())

    if (element.editor) {
      const changed = observedValue !== element.editor.getValue()

      if (changed) {
        element.editor.setValue(observedValue)
        element.editor.refresh()
      }
    }
  }

  ko.bindingHandlers.codemirror = { init, update }
}

export default { register }
