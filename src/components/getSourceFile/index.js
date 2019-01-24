/**
 * @description 
 * get source file from path
 * @param {string} path path to get source of the file
 * @returns {string} string of file
 * @example 
 * getSourceFile('{path}/getSourceFile/test-help.txt') // => text to be returned
 */
import fs from 'fs';

export default function getSourceFile(path) {
    const fileData = fs.readFileSync(`${path}`).toString();
    return fileData;
}