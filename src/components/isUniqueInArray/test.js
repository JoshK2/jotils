import assert from 'assert';
import isUniqueInArray from './';

describe('isUniqueInArray', function () {
    it('return true when value is unique in array', () => {
        const result = isUniqueInArray([1, 2, 3], 1);
        assert(result === true);
    });
    it('return false when value is not unique in array', () => {
        const result = isUniqueInArray([1, 2, 3, 1], 1);
        assert(result === false);
    });
});