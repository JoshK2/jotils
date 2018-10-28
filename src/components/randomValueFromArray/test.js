const randomValueFromArray = require('./').default;

describe('randomValueFromArray', function() {
    test('randomValueFromArray function return random value from array', () => {
        expect(randomValueFromArray([10, 11, 12, 13])).toBeGreaterThanOrEqual(10, "is not greater or equal than 10");
        expect(randomValueFromArray([10, 11, 12, 13])).toBeLessThanOrEqual(13, "is not greater or equal than 13");
    });
});

