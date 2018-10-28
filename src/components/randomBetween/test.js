const randomBetween = require('./').default;

describe('randomBetween', function() {
    test('randomBetween function return random number between min and max parameters', () => {
        expect(randomBetween(10, 15)).toBeGreaterThanOrEqual(10, "is not greater or equal than 10");
        expect(randomBetween(10, 15)).toBeLessThanOrEqual(15, "is not greater or equal than 15");
    });
});

