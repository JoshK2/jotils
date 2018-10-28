/**
@description
return random number between min and max parameters.  
*/
export default function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}