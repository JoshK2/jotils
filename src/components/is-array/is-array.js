/**
 * @description
 * check if value is array type
 * @param {any} any value
 * @returns {boolean} true or false
 * @example
 * import { isArray } from '@bit/joshk.jotils.is-array'
 * export default isArray(1) // => false
 *
 * @example
 * import { isArray } from '@bit/joshk.jotils.is-array'
 * export default isArray("1") // => false
 *
 * @example
 * import { isArray } from '@bit/joshk.jotils.is-array'
 * export default isArray([]) // => true
 *
 * @example
 * import { isArray } from '@bit/joshk.jotils.is-array'
 * export default isArray({}) // => false
 */
export function isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array
}
