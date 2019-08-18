/**
 * @description
 * get file extension from path
 * @param {string} path path of the file to get file extension
 * @returns {string} file extension
 * @example
 * import getFileExtension from '@bit/joshk.jotils.get-file-extension'
 * export default getFileExtension('getFileExtension/index.js') // => js
 */
export function getFileExtension(path : string): string {
    var regexp = /\.([0-9a-z]+)(?:[\?#]|$)/i
    var extension = path.match(regexp)
    return extension && extension[1]
}
