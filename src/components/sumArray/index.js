/**
 * @description
 * return the sum of numbers in array
 * @param {number[]} array an array of numbers
 * @returns {number} sum of numbers
 * @example
 * sumArray([1,2,3]) // => 6
*/
import sumTwo from '../sumTwo';

export default function sumArray(array) {
    return array.reduce((a, b) => sumTwo(a, b), 0);
}