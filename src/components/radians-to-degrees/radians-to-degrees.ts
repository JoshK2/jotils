/**
 * Converts an angle from radians to degrees.
 *
 * @param {number} angle in radians.
 * @returns {number} Angle in degrees.
 * @example
 * import { radiansToDegrees } from '@bit/joshk.jotils.radians-to-degrees'
 * export default radiansToDegrees(Math.PI); // returns 180
 */
export function radiansToDegrees(angle: number): number {
    return (angle * 180) / Math.PI
}
