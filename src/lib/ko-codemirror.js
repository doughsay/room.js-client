import ko from 'knockout'
import CodeMirror from 'codemirror'
require('codemirror/mode/javascript/javascript')

function register () {
  function init (element, valueAccessor, allBindings) {
    const options = allBindings.get('codemirrorOptions') || {}
    options.value = ko.unwrap(valueAccessor())
    const editor = CodeMirror(element, options)

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
