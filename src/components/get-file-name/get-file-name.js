/**
 * @description
 * get file name from path
 * @param {string} path path to get file name
 * @returns {string} file name
 * @example
 * import getFileName from '@bit/joshk.jotils.get-file-name'
 * export default getFileName('getFileName/index.js') // => index.js
 */
export function getFileName(path) {
  return path.replace(/^.*[\\\/]/, "");
}
