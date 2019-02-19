/**
 * @description
 * get all files from path directory recursively
 * @param {string} dir path to get all the files
 * @returns {string[]} array of files
 * @example
 * getAllFiles('{path}/getAllFiles') // => ['{path}/getAllFiles/index.js', '{path}/getAllFiles/test.js']
 */
const fs = require("fs");
const path = require("path");

const getAllFiles = dir =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name];
  }, []);

module.exports = getAllFiles;
