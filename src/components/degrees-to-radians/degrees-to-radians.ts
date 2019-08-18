/**
 * Converts an angle from degrees to radians.
 *
 * @param {number} Angle in degrees.
 * @returns {number} Angle in radians.
 * @example
 * import degreesToRadians from '@bit/joshk.jotils.degrees-to-radians'
 * export default degreesToRadians(360) // returns 2π
 */
export function degreesToRadians(angle: number) : number {
    return (angle * Math.PI) / 180
}
