/**
 * @description
 * check if value is include in array
 * @param {Array} array array
 * @param {any} value a value to check if is include
 * @returns {boolean} true or false if is include or not
 * @example
 * import { includes } from '@bit/joshk.jotils.includes'
 * export default includes([1, 2, 3], 1) // => true
 *
 * @example
 * import { includes } from '@bit/joshk.jotils.includes'
 * export default includes([1, 2, 3], 4) // => false
 */
export function includes(array: Array<any>, value:any) : boolean {
    return array.includes(value)
}
