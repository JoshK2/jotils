
//return the sum of two numbers
function additionNumbers(a, b) {
    return a + b;
}

//return the sum of array of numbers
function additionArray(array) {
    return array.reduce((a, b) => additionNumbers(a, b), 0);
}

module.exports = {
    additionNumbers, 
    additionArray
}