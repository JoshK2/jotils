const sumTwo = require('./').default;

describe('sumTwo', function() {
    test('sumTwo return the sum of two numbers', () => {
        expect(sumTwo(1,2)).toBe(3);
    });
});