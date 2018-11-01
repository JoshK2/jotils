/**
 * @description
 * random number between min and max parameters
 * @param {number} min minimun number to random
 * @param {number} max maximum number to random
 * @returns {number} random number
 * @example
 * randomBetween(1, 10) // => 7
*/
export default function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}