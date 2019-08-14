/**
 * @description
 * return longest word length in text
 * @param {string} text text
 * @returns {number} length of longest word
 * @example
 * import getLongestWordLength from '@bit/joshk.jotils.get-longest-word-length'
 * export default getLongestWordLength('abc abcd abcde') // => 5
 */
import { getLongestWord } from '../get-longest-word'

export function getLongestWordLength(text) {
    const longestWord = getLongestWord(text)
    return longestWord.length
}
