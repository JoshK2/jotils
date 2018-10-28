import randomBetween from '../randomBetween';

//return random value from array.
export default function randomValueFromArray(array) {
    return array[randomBetween(0, array.length - 1)];
}