const random = require('./').default;

describe('random', function() {
    test('random return random number between 0 and 1', () => {
        expect(random()).toBeGreaterThanOrEqual(0, "is not greater or equal than 0");
        expect(random()).toBeLessThanOrEqual(1, "is not less or equal than 1");
    });
    test('random return random number between 0 and max parameter', () => {
        expect(random(10)).toBeGreaterThanOrEqual(0, "is not greater or equal than 0");
        expect(random(10)).toBeLessThanOrEqual(10, "is not less or equal than 10");
    });
});

