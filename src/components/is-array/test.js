import assert from 'assert'
import { isArray } from './is-array'

describe('isArray', function() {
    it('check is array with number', () => {
        assert(isArray(1) === false)
    })
    it('check is array with string', () => {
        assert(isArray('1') === false)
    })
    it('check is array with array', () => {
        assert(isArray([]) === true)
    })
    it('check is array with object', () => {
        assert(isArray({}) === false)
    })
})
