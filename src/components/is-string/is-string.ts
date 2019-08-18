/**
 * @description
 * check if value is string type
 * @param {any} any value
 * @returns {boolean} true or false
 * @example
 * import { isString } from '@bit/joshk.jotils.is-string'
 * export default isString(1) // => false
 *
 * @example
 * import { isString } from '@bit/joshk.jotils.is-string'
 * export default isString("1") // => true
 *
 * @example
 * import { isString } from '@bit/joshk.jotils.is-string'
 * export default isString([]) // => false
 *
 * @example
 * import { isString } from '@bit/joshk.jotils.is-string'
 * export default isString({}) // => false
 */
export function isString(value:any) : boolean {
    return typeof value === 'string' || value instanceof String
}
