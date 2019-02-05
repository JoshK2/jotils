import assert from 'assert';
import getSourceFile from './';

const currentPath = process.cwd();

describe('getSourceFile', function () {
    it('return data of file', () => {
        const result = getSourceFile(`${currentPath}/src/components/getSourceFile/test-help.txt`);
        assert(result === 'text to be returned');
    });
});