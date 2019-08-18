/**
 * @description
 * check if value is unique in array
 * @param {Array} array array
 * @param {any} value a value to check if is unique
 * @returns {boolean} true or false if is unique or not
 * @example
 * import isUniqueInArray from '@bit/joshk.jotils.is-unique-in-array'
 * export default isUniqueInArray([1, 2, 3], 1) // => true
 *
 * @example
 * import isUniqueInArray from '@bit/joshk.jotils.is-undefined'
 * export default isUniqueInArray([1, 2, 3, 1], 1) // => false
 */
export function isUniqueInArray(array: Array<any>, value:any):boolean {
    let counter = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] === value) {
            counter++
        }
    }
    if (counter === 0) {
        return null
    }
    return counter === 1 ? true : false
}
