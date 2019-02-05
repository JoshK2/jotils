import assert from 'assert';
import isBoolean from './';

describe('isBoolean', function () {
    it('check is boolean with true', () => {
        assert(isBoolean(true) === true);
    });
    it('check is boolean with "true"', () => {
        assert(isBoolean("true") === false);
    });
    it('check is boolean with false', () => {
        assert(isBoolean(false) === true);
    });
    it('check is boolean with "false"', () => {
        assert(isBoolean("false") === false);
    });
});