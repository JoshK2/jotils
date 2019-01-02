const degreesToRadians = require('./').default;

describe('degreesToRadians', function() {
    test('Converts 360 degrees to 2π radians', () => {
        expect(degreesToRadians(360)).toBe(2*Math.PI);
    });
});
