const getRandomColor = require('./').default;

describe('getRandomColor', function() {
    test('getRandomColor function return hex random color', () => {
        expect(getRandomColor()).toContain('#', "the color not have #");
        expect(getRandomColor()).toHaveLength(7, "the hex result is not correct length");
    });
});

