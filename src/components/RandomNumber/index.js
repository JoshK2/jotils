
function random(max = null) {
    return max != null ? Math.floor((Math.random() * max) + 1) : Math.random();
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomValueFromArray(array) {
    return array[randomBetween(0, array.length - 1)];
}

module.exports = {
    random,
    randomBetween,
    randomValueFromArray
}