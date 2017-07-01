import test from 'ava'
import SearchResult from '../../src/lib/search-result'

test('SearchResult: newFromResult works for function result', t => {
  const result = { objectId: 'foo', function: 'bar' }
  const searchResult = SearchResult.newFromResult(result)

  t.truthy(searchResult)
})

test('SearchResult: newFromResult works for verb result', t => {
  const result = { objectId: 'foo', verb: 'bar' }
  const searchResult = SearchResult.newFromResult(result)

  t.truthy(searchResult)
})

test('SearchResult: newFromResult doesn\'t work for text result', t => {
  const result = { objectId: 'foo', text: 'bar' }
  const searchResult = SearchResult.newFromResult(result)

  t.falsy(searchResult)
})
