/**
 * @description
 * check if value is array type
 * @param {any} any value 
 * @returns {boolean} true or false
 * @example
 * isArray(1) // => false
 * isArray("1") // => false
 * isArray([]) // => true
 * isArray({}) // => false
*/
export default function isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
}