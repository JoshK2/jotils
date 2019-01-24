const getSourceFile = require('./').default;
const currentPath = process.cwd();

describe('getSourceFile', function() {
    test('getSourceFile function return string of file path', () => {
        expect(getSourceFile(`${currentPath}/src/components/getSourceFile/test-help.txt`)).toEqual('text to be returned', "the files array is not incorect");
    });
});