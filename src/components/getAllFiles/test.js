const getAllFiles = require('./');
const currentPath = process.cwd();

describe('getAllFiles', function() {
    test('getAllFiles function return array of files path inside directory', () => {
        console.log(getAllFiles(`${currentPath}/src/components/getAllFiles`));
        expect(getAllFiles(`${currentPath}/src/components/getAllFiles`)).toEqual([
            `${currentPath}/src/components/getAllFiles/index.js`,
            `${currentPath}/src/components/getAllFiles/test.js`
        ], "the files array is not incorect");
    });
});