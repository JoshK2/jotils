/**
 * Converts an angle from radians to degrees.
 *
 * @param {number} Angle in radians.
 * @returns {number} Angle in degrees.
 *
 * @example
 * // returns 180
 * radiansToDegrees(Math.PI);
 */
export default function radiansToDegrees(angle) {
    return angle * 180 / Math.PI;
}
