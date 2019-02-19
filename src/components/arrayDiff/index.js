/**
 * @description
 * return diff of two array
 * @param {Array} a1 array 
 * @param {Array} a2 array 
 * @returns {Array} diff array
 * @example
 * import arrayDiff from '@bit/joshk.jotils.array-diff'
 * export default arrayDiff(['a', 'b'], ['a', 'b', 'c', 'd']) // => ['c', 'd']
 * 
 * @example
 * import arrayDiff from '@bit/joshk.jotils.array-diff'
 * export default arrayDiff("abcd", "abcde") // => ['e']
 * 
 * @example
 * import arrayDiff from '@bit/joshk.jotils.array-diff'
 * export default arrayDiff("zxc", "zxc") // => []
*/

export default function arrayDiff (a1, a2) {
    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
    return diff;
}