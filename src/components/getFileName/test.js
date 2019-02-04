const getFileName = require('./').default;
const currentPath = process.cwd();

describe('getFileName', function() {
    test('getFileName function return string of file name', () => {
        expect(getFileName(`${currentPath}/src/components/getFileName/index.js`)).toEqual('index.js', "the file name is incorect");
        expect(getFileName(`/example/components/test/index.js`)).toEqual('index.js', "the file name is incorect");
        expect(getFileName(`/example/components/test/480dfln.txt`)).toEqual('480dfln.txt', "the file name is incorect");
        expect(getFileName(`/example/components/test/480dfln.txt/example/components/test/test.json`)).toEqual('test.json', "the file name is incorect");
    });
});