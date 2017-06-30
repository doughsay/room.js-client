import test from 'ava'
import { boldRed, boldGreen, gray } from '../../src/lib/colors'

test('colors: boldRed', t => {
  const actual = boldRed('foo')
  const expected = '\u001b[1m\u001b[31mfoo\u001b[39m\u001b[22m'

  t.is(actual, expected)
})

test('colors: boldGreen', t => {
  const actual = boldGreen('foo')
  const expected = '\u001b[1m\u001b[32mfoo\u001b[39m\u001b[22m'

  t.is(actual, expected)
})

test('colors: gray', t => {
  const actual = gray('foo')
  const expected = '\u001b[90mfoo\u001b[39m'

  t.is(actual, expected)
})
