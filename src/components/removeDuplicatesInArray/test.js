const removeDuplicatesInArray = require('./').default;

describe('removeDuplicatesInArray', function() {
    test('removeDuplicatesInArray function return an array without duplicates value', () => {
        expect(removeDuplicatesInArray([1, 2, 3, 1, 3])).toEqual([1, 2, 3], "remove duplicates not working on numbers");
        expect(removeDuplicatesInArray(["1", "2", "3", "1", "3"])).toEqual(["1", "2", "3"], "remove duplicates not working on string");
    });
});

