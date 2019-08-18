import assert from 'assert'
import { arrayDiff } from './array-diff'

describe('arrayDiff', function() {
    it('check with two array', () => {
        assert.deepEqual(arrayDiff(['a', 'b'], ['a', 'b', 'c', 'd']), ['c', 'd'])
    })
    it('check with two string', () => {
        assert.deepEqual(arrayDiff(['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd', 'e']), ['e'])
    })
    it('check with two equal string', () => {
        assert.deepEqual(arrayDiff(['z', 'x', 'c'], ['z', 'x', 'c']), [])
    })
})
