const removeValueFromArray = require('./').default;

describe('removeValueFromArray', function() {
    test('removeValueFromArray function return an array after remove value', () => {
        expect(removeValueFromArray([1, 2, 3, 1, 3], 3)).toEqual([1, 2, 1], "remove specific value not working on numbers");
        expect(removeValueFromArray(["1", "2", "3", "1", "3"], "1")).toEqual(["2", "3", "3"], "remove specific value not working on string");
    });
});

