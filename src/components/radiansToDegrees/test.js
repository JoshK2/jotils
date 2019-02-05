import assert from 'assert';
import radiansToDegrees from './';

describe('radiandToDegrees', function () {
    it('Converts Pi radians to 180 degrees', () => {
        const result = radiansToDegrees(Math.PI);
        assert(result === 180);
    });
});