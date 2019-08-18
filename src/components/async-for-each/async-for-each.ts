/**
 * @description
 * async for each function to call await functions inside the loop
 * @param {Array} array is an array that we use normaly whit normal foreach like array.foreach(...)
 * @param {Function} callback any function
 * @example
 * asyncForEach(array, async function(element) {
 *      await asyncSleep(10000);
 *      console.log(element);
 *      await asyncSleep(10000);
 * })
 */
export async function asyncForEach(array: Array<any>, callback: Function) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}
