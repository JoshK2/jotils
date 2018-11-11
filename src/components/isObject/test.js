const isObject = require('./').default;

describe('isObject', function() {
    test('isObject function return true if value is object and false if is not', () => {
        expect(isObject(1)).toEqual(false, "the value is not object and the function retrun that is object");
        expect(isObject("1")).toEqual(false, "the value is not object and the function retrun that is object");
        expect(isObject([])).toEqual(false, "the value is not object and the function retrun that is object");
        expect(isObject({})).toEqual(true, "the value is object and the function retrun that is not object");
    });
});

