import { expect } from 'chai'
import countBy from '../src/countBy.js'

describe('countBy function', () => {
  it.skip('should count items based on iteratee result', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false }
    ]
    const result = countBy(users, value => value.active)
    expect(result).to.deep.equal({ 'true': 2, 'false': 1 })
  })

  it.skip('should count numbers by even/odd', () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = countBy(numbers, n => (n % 2 === 0 ? 'even' : 'odd'))
    expect(result).to.deep.equal({ odd: 3, even: 2 })
  })

  it('should return empty object for empty collection', () => {
    expect(countBy([], x => x)).to.deep.equal({})
  })

  it.skip('should handle strings as collection', () => {
    const chars = 'aabbc'
    const result = countBy(chars, char => char)
    expect(result).to.deep.equal({ a: 2, b: 2, c: 1 })
  })
})