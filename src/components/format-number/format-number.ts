/**
 * @description
 * function that retrun a formated number
 * @param {string | number} number
 * @returns {string} formated number
 * @example
 * import formatNumber from '@bit/joshk.jotils.format-number'
 * export default formatNumber('123456') // => 123,456
 */
export function formatNumber(number: string | number): string {
    number = number.toString()
    return number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
