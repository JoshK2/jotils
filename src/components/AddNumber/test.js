const F = require('./');

describe('AddNumber', function() {
    test('additionArray return the sum of array of numbers', () => {
        expect(F.additionArray([1,2,3])).toBe(6);
    });
    test('additionNumbers return the sum of two numbers', () => {
        expect(F.additionNumbers(1,2)).toBe(3);
    });
});

