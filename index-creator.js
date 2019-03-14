const { lstatSync, readdirSync } = require('fs');
const fs = require('fs');
const { path, join } = require('path')

const componentsDirectorie = 'src/components';
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory);

const dirNameToFunctionName = dir => {
    const array = dir.split('-');
    let funcName = '';
    array.forEach((element, index) => {
        if(index === 0) {
            funcName = element;
        } else {
            funcName += element[0].toUpperCase() + element.substring(1, element.length);
        }
    });
    return funcName;
}

const main = () => {
    let dirs = getDirectories(componentsDirectorie);
    dirs = dirs.map(value => value.replace(`${componentsDirectorie}/`, ''))
    console.log(dirs);
    console.log(`number of functions is ${dirs.length}`);
    let exportsText = '';
    dirs.forEach(element => {
        exportsText += `export { ${dirNameToFunctionName(element)} } from './${element}';\n`;
    });
    fs.writeFile(`${componentsDirectorie}/index.js`, exportsText, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The index file was saved!");
    });
}

main();