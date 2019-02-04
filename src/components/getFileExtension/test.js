const getFileExtension = require('./').default;
const currentPath = process.cwd();

describe('getFileExtension', function() {
    test('getFileExtension function return string of file extension', () => {
        expect(getFileExtension(`${currentPath}/src/components/getFileName/index.js`)).toEqual('js', "the file extension is incorect");
        expect(getFileExtension(`https://www.example.com/article/image/dog.jpg?param=value#link"`)).toEqual('jpg', "the file extension is incorect");
        expect(getFileExtension(`/example/components/test/480dfln.txt`)).toEqual('txt', "the file extension is incorect");
        expect(getFileExtension(`/example/components/test/480dfln.txt/example/components/test/test.json`)).toEqual('json', "the file extension is incorect");
    });
});