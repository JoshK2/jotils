/**
 * Linearly interpolates between two values using the formula: (min + max - min) * amount.
 * Passing amount a value of 0 will cause min to be returned, passing 1 will cause max to be returned.
 * Trying to pass an amount greater than 1 or lesser than 0 will return.
 *
 * @see {@link https://en.wikipedia.org/wiki/Linear_interpolation|Linear Interpolation on Wikipedia} for further information
 *
 * @param {number} min Source value.
 * @param {number} max Destination value.
 * @param {number} amount Value between 0 - 1.
 * @returns {number} Interpolated value.
 * @example
 * import linearInterpolation from '@bit/joshk.jotils.linear-interpolation'
 * export default linearInterpolation(0, 10, .5) // return 5
 *
 * @example
 * import linearInterpolation from '@bit/joshk.jotils.linear-interpolation'
 * export default linearInterpolation(0, 5, .8) // return 4
 */
export function linearInterpolation(min, max, amount) {
  // Make sure the amount is between 0 and 1.
  amount = Math.max(Math.min(1, amount), 0);
  return min + (max - min) * amount;
}
