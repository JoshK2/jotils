/**
 * @description
 * check if value is boolean type
 * @param {any} any value
 * @returns {boolean} true or false
 * @example
 * import isBoolean from '@bit/joshk.jotils.is-boolean'
 * export default isBoolean(true) // => true
 *
 * @example
 * import isBoolean from '@bit/joshk.jotils.is-boolean'
 * export default isBoolean("true") // => false
 *
 * @example
 * import isBoolean from '@bit/joshk.jotils.is-boolean'
 * export default isBoolean(false) // => true
 *
 * @example
 * import isBoolean from '@bit/joshk.jotils.is-boolean'
 * export default isBoolean("false") // => false
 */
export function isBoolean(value) {
    return typeof value === 'boolean'
}
