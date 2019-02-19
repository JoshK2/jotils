/**
 * @description
 * random number between 0 and 1, or between 0 and max parameter(optional)
 * @param {number} max max parameter(optional)
 * @returns {number} random number
 * @example
 * import random from '@bit/joshk.jotils.random'
 * export default random() // => 0.123
 *
 * @example
 * import random from '@bit/joshk.jotils.random'
 * export default random(1, 10) // => 7
 */
export default function random(max = null) {
  return max != null ? Math.floor(Math.random() * max + 1) : Math.random();
}
