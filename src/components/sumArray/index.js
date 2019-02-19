/**
 * @description
 * return the sum in array of numbers
 * @param {number[]} array an array of numbers
 * @returns {number} sum of numbers
 * @example
 * import sumArray from '@bit/joshk.jotils.sum-array'
 * export default sumArray([1,2,3]) // => 6
 */
import sumTwo from "../sumTwo";

export default function sumArray(array) {
  return array.reduce((a, b) => sumTwo(a, b), 0);
}
