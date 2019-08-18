/**
 * @description
 * check if value is undefined type
 * @param {any} any value
 * @returns {boolean} true or false
 * @example
 * import isUndefined from '@bit/joshk.jotils.is-undefined'
 * const a = 1;
 * export default isUndefined(a) // => false
 *
 * @example
 * import isUndefined from '@bit/joshk.jotils.is-undefined'
 * const obj = {};
 * export default isUndefined(obj.not_defined) // => true
 */
export function isUndefined(value :any) : boolean {
    return typeof value === 'undefined'
}
