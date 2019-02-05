import assert from 'assert';
import randomValueFromArray from './';

describe('randomValueFromArray', function() {
    it('return random value from array', () => {
        const result = randomValueFromArray([10, 11, 12, 13]);
        assert(result >= 10 && result <= 13 && [10, 11, 12, 13].includes(result));
    });
});