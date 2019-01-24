const getFileName = require('./').default;
const currentPath = process.cwd();

describe('getFileName', function() {
    test('getFileName function return string of file name', () => {
        expect(getFileName(`${currentPath}/src/components/getFileName/index.js`)).toEqual('index.js', "the file name is incorect");
    });
});