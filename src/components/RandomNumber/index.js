
//return random number between 0 and 1.  
function random(max = null) {
    return max != null ? Math.floor((Math.random() * max) + 1) : Math.random();
}

//return random number between min and max parameters.  
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//return random value from array.
function randomValueFromArray(array) {
    return array[randomBetween(0, array.length - 1)];
}

module.exports = {
    random,
    randomBetween,
    randomValueFromArray
}