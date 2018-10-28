//return random number between 0 and 1, or between 0 and max parameter(optional).  
export default function random(max = null) {
    return max != null ? Math.floor((Math.random() * max) + 1) : Math.random();
}