/**
 * @description
 * check if value is undefined type
 * @param {any} any value 
 * @returns {boolean} true or false
 * @example
 * const a = 1;
 * isUndefined(a) // => false
 * const obj = {};
 * isUndefined(obj.not_defined) // => true
*/
export default function isUndefined(value) {
    return typeof value === 'undefined';
}