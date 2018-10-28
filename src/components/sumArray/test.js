const sumArray = require('./').default;

describe('sumArray', function() {
    test('sumArray return the sum of array of numbers', () => {
        expect(sumArray([1,2,3])).toBe(6);
    });
});

