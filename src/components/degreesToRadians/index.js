/**
 * Converts an angle from degrees to radians.
 *
 * @param {number} Angle in degrees.
 * @returns {number} Angle in radians.
 *
 * @example
 * // returns 2π
 * degreesToRadians(360);
 */
export default function degreesToRadians(angle) {
    return angle * Math.PI / 180;
}
