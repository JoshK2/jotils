/**
 * @description
 * check if value is string type
 * @param {any} any value 
 * @returns {boolean} true or false
 * @example
 * isString(1) // => false
 * isString("1") // => true
 * isString([]) // => false
 * isString({}) // => false
*/
export default function isString(value) {
    return typeof value === 'string' || value instanceof String;
}