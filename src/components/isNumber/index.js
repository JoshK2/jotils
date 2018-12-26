/**
 * @description
 * check if value is number type
 * @param {any} any value 
 * @returns {boolean} true or false
 * @example
 * isNumber(1) // => true
 * isNumber("1") // => false
 * isNumber(1.2) // => true
 * isNumber("1.2") // => false
*/
export default function isNumber(value) {
    return typeof value === 'number';
}