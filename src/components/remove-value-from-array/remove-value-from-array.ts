/**
 * @description
 * remove value from array
 * @param {Array.<number | string | boolean>} array an array
 * @param {number | string | boolean} value value to remove
 * @returns {Array.<number | string | boolean>} new array after remove
 * @example
 * import { removeValueFromArray } from '@bit/joshk.jotils.remove-value-from-array'
 * export default removeValueFromArray([1,2,3], 1) // => [2, 3]
 */
export function removeValueFromArray(
    array: Array<number | string | boolean>,
    value: number | string | boolean
): Array<number | string | boolean> {
    return array.filter(e => e != value)
}
