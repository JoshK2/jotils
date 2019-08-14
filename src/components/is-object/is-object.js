/**
 * @description
 * check if value is object type
 * @param {any} any value
 * @returns {boolean} true or false
 * @example
 * import { isObject } from '@bit/joshk.jotils.is-object'
 * export default isObject(1) // => false
 *
 * @example
 * import { isObject } from '@bit/joshk.jotils.is-object'
 * export default isObject("1") // => false
 *
 * @example
 * import { isObject } from '@bit/joshk.jotils.is-object'
 * export default isObject([]) // => false
 *
 * @example
 * import { isObject } from '@bit/joshk.jotils.is-object'
 * export default isObject({}) // => true
 */
export function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object
}
