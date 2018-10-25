
function additionNumbers(a, b) {
    return a + b;
}

function additionArray(array) {
    return array.reduce((a, b) => a + b, 0);
}

module.exports = {
    additionNumbers, 
    additionArray
}