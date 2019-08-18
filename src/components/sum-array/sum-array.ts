/**
 * @description
 * return the sum in array of numbers
 * @param {number[]} array an array of numbers
 * @returns {number} sum of numbers
 * @example
 * import { sumArray } from '@bit/joshk.jotils.sum-array'
 * export default sumArray([1,2,3]) // => 6
 */
export function sumArray(array: Array<number>): number {
    return array.reduce((a, b) => a + b, 0)
}
