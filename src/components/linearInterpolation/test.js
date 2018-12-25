const linearInterpolation = require('./').default;

describe('linearInterpolation', function() {
    test('Linearly interpolates between two values using the formula: (min + max - min) * amount', () => {
        expect(linearInterpolation(0, 10, .5)).toBe(5);
    });
    test('Linearly interpolates between two values using the formula: (min + max - min) * amount', () => {
        expect(linearInterpolation(0, 5, .8)).toBe(4);
    });
});

