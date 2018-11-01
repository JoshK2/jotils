import random from '../random';

/**
 * @description
 * shuffles an array and returns an new array
 * @param {any[]} array an array to shuffle
 * @returns {any[]} shuffled array
 * @example
 * shuffleArray([1,2,3]) // => [3,1,2]
*/
export default function shuffleArray(_array) {
    var array = [].concat(_array);
    return array.sort(() => random() - 0.5);
}