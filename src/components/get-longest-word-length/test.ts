import assert from 'assert'
import { getLongestWordLength } from './get-longest-word-length'

describe('getLongestWordLength', function() {
    it('check return the longest word length', () => {
        assert(getLongestWordLength('abc abcd abcde') === 5)
    })
})
