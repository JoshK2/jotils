import assert from 'assert';
import sumTwo from './';

describe('sumTwo', function () {
    it('return the sum of two numbers', () => {
        const result = sumTwo(1, 2);
        assert(result === 3);
    });
});