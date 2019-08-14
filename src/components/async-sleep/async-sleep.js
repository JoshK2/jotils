/**
 * @description
 * simple await in async function
 * @param {number} ms is milliseconds.
 * @example
 * await asyncSleep(10000) //wait 10 secondes before code continue
 */
export async function asyncSleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms))
}
