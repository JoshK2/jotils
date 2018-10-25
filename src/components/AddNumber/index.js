
function additionArray(array) {
    return array.reduce((a, b) => a + b, 0);
}

function additionNumbers(a, b) {
    return a + b;
}

module.exports = {
    additionNumbers, 
    additionArray
}