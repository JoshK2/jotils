/**
 * @description
 * random number between min and max parameters
 * @param {number} min minimun number to random
 * @param {number} max maximum number to random
 * @returns {number} random number
 * @example
 * import randomBetween from '@bit/joshk.jotils.random-between'
 * export default randomBetween(1, 10) // => 7
 */
export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
