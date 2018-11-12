const isString = require('./').default;

describe('isString', function() {
    test('isString function return true if value is string and false if is not', () => {
        expect(isString(1)).toEqual(false, "the value is not string and the function retrun that is string");
        expect(isString("1")).toEqual(true, "the value is string and the function retrun that is not string");
        expect(isString([])).toEqual(false, "the value is not string and the function retrun that is string");
        expect(isString({})).toEqual(false, "the value is not string and the function retrun that is string");
    });
});

