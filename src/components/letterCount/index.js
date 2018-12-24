/**
 * @description
 * count number of letter in a string
 * @param {string} string value 
 * @returns {number} number
 * @example
 * const str = 'abcd';
 * letterCount(str, 'a') // => 1
 * letterCount(str, 'A', false) // => 1
*/
import isString from '../isString';

export default function letterCount(str, letter, casesensitive = true) {
    if(isString(str) == false)
        return 'the value is not string';
    
    const rgx = new RegExp(letter, casesensitive == true ? 'g':'gi');
    return str.split(rgx).length -1;
}