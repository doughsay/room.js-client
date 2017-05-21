function isElementVisibleIn (el, container) {
  const elRect = el.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  return (
    elRect.top >= containerRect.top &&
    elRect.left >= containerRect.left &&
    elRect.bottom <= containerRect.bottom &&
    elRect.right <= containerRect.right
  )
}

class SearchResult {
  constructor (ko, data) {
    this.data = data
    this.objectId = data.objectId
    this.active = ko.observable(false)
    this.name = ko.computed(this.computeName.bind(this))
  }

  static newFromResult (ko, result) {
    if (result.function) {
      // eslint-disable-next-line no-use-before-define
      return new FunctionSearchResult(ko, result)
    } else if (result.verb) {
      // eslint-disable-next-line no-use-before-define
      return new VerbSearchResult(ko, result)
    }
    throw new Error('Invalid result type.')
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

// TODO: socket permissions
export default class SearchViewModel {
  constructor ({ doc, ko }, parentViewModel, socket) {
    this.document = doc
    this.ko = ko
    this.parentViewModel = parentViewModel
    this.socket = socket
    this.inputHasFocus = true

    this.search = ko.observable('')
    this.results = ko.observableArray([])
    this.selectedIndex = ko.observable(0)
    this.selectionDirection = ko.observable(0)

    this.search.subscribe(this.onSearch.bind(this))

    this.activeResult = ko.computed(this.computeActiveResult.bind(this))
    this.hasResults = ko.computed(() => this.results().length > 0)
  }

  computeActiveResult () {
    const results = this.results()
    const selectedIndex = this.selectedIndex()

    if (results.length > 0) {
      results.forEach(result => { result.active(false) })
      results[selectedIndex].active(true)
      this.scrollActiveResultIntoView()
      return results[selectedIndex]
    }
    return null
  }

  scrollActiveResultIntoView () {
    const el = this.document.querySelector('.search .results li.active')
    const container = this.document.querySelector('.search .results')
    if (el && !isElementVisibleIn(el, container)) {
      el.scrollIntoView(this.selectionDirection() === -1)
    }
  }

  close () {
    this.parentViewModel.searchViewModel(null)
  }

  openActiveResult () {
    const activeResult = this.activeResult()
    activeResult.openEditor(this.socket, this.parentViewModel)
  }

  onSearch (str) {
    this.socket.emit('search', str, results => {
      this.selectedIndex(0)
      this.results(results.map(result => SearchResult.newFromResult(this.ko, result)))
    })
  }

  onKeyDown (_, event) {
    const key = typeof event.which === 'undefined' ? event.keyCode : event.which
    const selectedIndex = this.selectedIndex()

    switch (key) {
      case 13: { // enter key
        this.openActiveResult()
        this.close()
        return false
      }
      case 27: { // esc key
        this.close()
        return false
      }
      case 38: { // up key
        if (selectedIndex > 0) {
          this.selectedIndex(selectedIndex - 1)
        } else {
          this.selectedIndex(this.results().length - 1)
        }
        this.selectionDirection(-1)
        return false
      }
      case 40: { // down key
        if (selectedIndex < this.results().length - 1) {
          this.selectedIndex(selectedIndex + 1)
        } else {
          this.selectedIndex(0)
        }
        this.selectionDirection(1)
        return false
      }
      default: {
        return true
      }
    }
  }
}
