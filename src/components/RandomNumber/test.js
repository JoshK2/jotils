const F = require('./');

describe('RandomNumber', function() {
    test('random return random number between 0 and 1', () => {
        expect(F.random()).toBeGreaterThanOrEqual(0, "is not greater or equal than 0");
        expect(F.random()).toBeLessThanOrEqual(1, "is not less or equal than 1");
    });
    test('randomBetween return random number between min and max parameters', () => {
        expect(F.randomBetween(10, 15)).toBeGreaterThanOrEqual(10, "is not greater or equal than 10");
        expect(F.randomBetween(10, 15)).toBeLessThanOrEqual(15, "is not greater or equal than 15");
    });
});

