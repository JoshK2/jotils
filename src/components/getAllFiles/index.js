/**
 * @description 
 * get all files from path directory recursively
 * @param {string} dir path to get all the files
 * @returns {string[]} array of files
 * @example 
 * getAllFiles('../') // => ['{path}/getAllFiles/index.js', '{path}/getAllFiles/test.js']
 */
import fs from 'fs';
import path from 'path';

const getAllFiles = dir =>
    fs.readdirSync(dir).reduce((files, file) => {
        const name = path.join(dir, file);
        const isDirectory = fs.statSync(name).isDirectory();
        return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
    }, []);

module.exports = getAllFiles;