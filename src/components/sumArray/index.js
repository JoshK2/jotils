import sumTwo from '../sumTwo';

//return the sum of array of numbers
export default function sumArray(array) {
    return array.reduce((a, b) => sumTwo(a, b), 0);
}