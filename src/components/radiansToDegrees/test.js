const radiansToDegrees = require('./').default;

describe('radiandToDegrees', function() {
    test('Converts Pi radians to 180 degrees', () => {
        expect(radiansToDegrees(Math.PI)).toBe(180);
    });
});
