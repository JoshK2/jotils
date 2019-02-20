/**
 * @description
 * remove duplicates value from array
 * @param {any[]} array an array
 * @returns {any} array without duplicates value
 * @example
 * import removeDuplicatesInArray from '@bit/joshk.jotils.remove-duplicates-in-array'
 * export default removeDuplicatesInArray([1,2,3,1,3,4]) // => [1,2,3,4]
 */
export function removeDuplicatesInArray(array) {
  const uniqueArray = [...new Set(array)];
  return uniqueArray;
}
