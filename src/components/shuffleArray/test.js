const shuffleArray = require('./').default;

describe('shuffleArray', function() {
    test('return shuffle array', () => {
        expect(shuffleArray([1,2,3])).toHaveLength(3, 'the length of the shuffle array is not like the original array');
    });
});

