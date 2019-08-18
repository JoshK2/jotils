/**
 * @description
 * remove value from array
 * @param {any[]} array an array
 * @param {any} value value to remove
 * @returns {any[]} new array after remove
 * @example
 * import { removeValueFromArray } from '@bit/joshk.jotils.remove-value-from-array'
 * export default removeValueFromArray([1,2,3], 1) // => [2, 3]
 */
export function removeValueFromArray(array: Array<any>, value: any): Array<any> {
    return array.filter(e => e != value)
}
