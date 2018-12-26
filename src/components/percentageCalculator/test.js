const percentageCalculator = require('./').default;

describe('percentageCalculator', function() {
    test('percentageCalculator function calculate percentage of value inside another value', () => {
        expect(percentageCalculator(50, 100)).toEqual(50, "the percentage is not correct");
    });
});

