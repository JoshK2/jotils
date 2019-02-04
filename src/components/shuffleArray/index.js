/**
 * @description
 * shuffles an array and returns an new array
 * @param {any[]} array an array to shuffle
 * @returns {any[]} shuffled array
 * @example
 * import shuffleArray from '@bit/joshk.jotils.shuffle-array'
 * export default shuffleArray([1,2,3]) // => [3,1,2]
*/
import random from '../random';

export default function shuffleArray(_array) {
    let array = [].concat(_array);
    return array.sort(() => random() - 0.5);
}