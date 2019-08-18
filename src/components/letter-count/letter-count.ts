/**
 * @description
 * count number of letter in a string
 * @param {string} text value
 * @param {string} letter value to count
 * @param {boolean} ignorecasesensitive ignore case sensitive if true
 * @returns {number} number
 * @example
 * import { letterCount } from '@bit/joshk.jotils.letter-count'
 * export default letterCount('abcd', 'a') // => 1
 *
 * @example
 * import { letterCount } from '@bit/joshk.jotils.letter-count'
 * export default letterCount('abcd', 'A', false) // => 1
 */
export function letterCount(text: string, letter: string, ignorecasesensitive?: boolean): number {
    const rgx = new RegExp(letter, ignorecasesensitive ? 'gi' : 'g')
    return text.split(rgx).length - 1
}
