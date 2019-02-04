/**
 * @description
 * count number of letter in a string
 * @param {string} string value 
 * @returns {number} number
 * @example
 * import letterCount from '@bit/joshk.jotils.letter-count'
 * export default letterCount('abcd', 'a') // => 1
 * 
 * @example
 * import letterCount from '@bit/joshk.jotils.letter-count'
 * export default letterCount('abcd', 'A', false) // => 1
*/
import isString from '../isString';

export default function letterCount(str, letter, casesensitive = true) {
    if(isString(str) == false)
        return 'the value is not string';
    
    const rgx = new RegExp(letter, casesensitive == true ? 'g':'gi');
    return str.split(rgx).length -1;
}