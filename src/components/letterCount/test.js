const letterCount = require('./').default;

const str = 'abcd';

describe('letterCount', function() {
    test('letterCount function return the number of time that character appears in a string', () => {
        expect(letterCount(str, 'a')).toEqual(1, "the number of time is not 1");
        expect(letterCount(str, 'A', false)).toEqual(1, "the number of time is not 1");
    });
});

