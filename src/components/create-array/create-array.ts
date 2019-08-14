/**
 * @description
 * create new array and return it
 * @param {number} length length for new array
 * @returns {Array} array with null values
 */

export function createArray(length: number): Array<null> {
    let array = []
    for (let num = 0; num < length; num++) {
        array.push(null)
    }
    return array
}
