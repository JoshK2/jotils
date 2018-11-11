/**
 * @description
 * check if value is object type
 * @param {any} any value 
 * @returns {boolean} true or false
 * @example
 * isObject(1) // => false
 * isObject("1") // => false
 * isObject([]) // => false
 * isObject({}) // => true
*/
export default function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}