import assert from 'assert';
import getRandomColor from './';

describe('getRandomColor', function () {
    it('check have #', () => {
        const result = getRandomColor();
        assert(result.indexOf('#') > -1);
    });
    it('check length of the xex color', () => {
        const result = getRandomColor();
        assert(result.length === 7);
    });
});