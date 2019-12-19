/**
 * @description
 * remove duplicates value from array
 * @param {Array.<number | string | boolean>} array an array
 * @returns {Array.<number | string | boolean>} array without duplicates value
 * @example
 * import { removeDuplicatesInArray } from '@bit/joshk.jotils.remove-duplicates-in-array'
 * export default removeDuplicatesInArray([1,2,3,1,3,4]) // => [1,2,3,4]
 */
export function removeDuplicatesInArray(array: Array<number | string | boolean>): Array<number | string | boolean> {
    const uniqueArray = array.filter(function(item, pos) {
        return array.indexOf(item) == pos
    })
    return uniqueArray
}
