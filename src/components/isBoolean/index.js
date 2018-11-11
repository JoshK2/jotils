/**
 * @description
 * check if value is boolean type
 * @param {any} any value 
 * @returns {boolean} true or false
 * @example
 * isBoolean(true) // => true
 * isBoolean("true") // => false
 * isBoolean(false) // => true
 * isBoolean("false") // => false
*/
export default function isBoolean(value) {
    return typeof value === 'boolean';
}