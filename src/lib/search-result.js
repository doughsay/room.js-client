import ko from 'knockout'

export default class SearchResult {
  constructor (data) {
    this.data = data
    this.objectId = data.objectId
    this.active = ko.observable(false)
    this.name = ko.computed(this.computeName.bind(this))
  }

  static newFromResult (result) {
    if (result.function) {
      return new FunctionSearchResult(result)
    } else if (result.verb) {
      return new VerbSearchResult(result)
    }

    return null
  }

  computeName () {
    throw new Error('Must be subclassed.')
  }

  openEditor () {
    throw new Error('Must be subclassed.')
  }
}

class FunctionSearchResult extends SearchResult {
  computeName () {
    return `${this.objectId}.${this.data.function}`
  }

  openEditor (socket, tabsViewModel) {
    const params = { objectId: this.objectId, name: this.data.function }
    socket.emit('get-function', params, data => {
      tabsViewModel.newEditFunctionTab(socket, data)
    })
  }
}

class VerbSearchResult extends SearchResult {
  computeName () {
    return `${this.objectId}.${this.data.verb}`
  }

  openEditor (socket, tabsViewModel) {
    const params = { objectId: this.objectId, name: this.data.verb }
    socket.emit('get-verb', params, data => {
      tabsViewModel.newEditVerbTab(socket, data)
    })
  }
}
