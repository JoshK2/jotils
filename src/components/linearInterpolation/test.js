import assert from 'assert';
import linearInterpolation from './';

describe('linearInterpolation', function () {
    it('Linearly interpolates between two values using the formula: (min + max - min) * amount', () => {
        const result1 = linearInterpolation(0, 10, .5);
        assert(result1 === 5);
        const result2 = linearInterpolation(0, 5, .8);
        assert(result2 === 4);
    });
});