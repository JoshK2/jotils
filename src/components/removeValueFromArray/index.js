/**
 * @description
 * remove value from array
 * @param {any[]} array an array
 * @param {any} value value to remove
 * @returns {any[]} new array after remove
 * @example
 * removeValueFromArray([1,2,3], 1) // => [2, 3]
*/
export default function removeValueFromArray(array, value) {
    return array.filter(e => e != value);
}