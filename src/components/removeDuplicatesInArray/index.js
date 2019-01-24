/**
 * @description
 * remove duplicates value from array
 * @param {any[]} array an array 
 * @returns {any} array without duplicates value
 * @example
 * removeDuplicatesInArray([1,2,3,1,3,4]) // => [1,2,3,4]
*/
export default function removeDuplicatesInArray(array) {
    const uniqueArray = [...new Set(array)];
    return uniqueArray;
}