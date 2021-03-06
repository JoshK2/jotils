/**
 * @description
 * check if value is number type
 * @param {any} any value
 * @returns {boolean} true or false
 * @example
 * import { isNumber } from '@bit/joshk.jotils.is-number'
 * export default isNumber(1) // => true
 *
 * @example
 * import { isNumber } from '@bit/joshk.jotils.is-number'
 * export default isNumber("1") // => false
 *
 * @example
 * import { isNumber } from '@bit/joshk.jotils.is-number'
 * export default isNumber(1.2) // => true
 *
 * @example
 * import { isNumber } from '@bit/joshk.jotils.is-number'
 * export default isNumber("1.2") // => false
 */
export function isNumber(value: any): boolean {
    return typeof value === 'number'
}
