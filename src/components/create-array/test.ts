import assert from 'assert'
import { createArray } from './create-array'

describe('createArray', function() {
    it('create array', () => {
        assert(createArray(10).length == 10)
    })
})
