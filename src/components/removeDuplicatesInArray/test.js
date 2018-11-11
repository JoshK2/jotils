const removeDuplicatesInArray = require('./').default;

describe('removeDuplicatesInArray', function() {
    test('removeDuplicatesInArray function return an array without duplicates value', () => {
        expect(removeDuplicatesInArray([1, 2, 3, 1, 3].sort())).toEqual([1, 2, 3].sort(), "remove duplicates not working on numbers");
        expect(removeDuplicatesInArray(["1", "2", "3", "1", "3"].sort())).toEqual(["1", "2", "3"].sort(), "remove duplicates not working on string");
    });
});

