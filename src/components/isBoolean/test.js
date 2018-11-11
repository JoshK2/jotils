const isBoolean = require('./').default;

describe('isBoolean', function() {
    test('isBoolean function return true or false if value is boolean or not', () => {
        expect(isBoolean(true)).toEqual(true, "the value is boolean and the function retrun that is not boolean");
        expect(isBoolean("true")).toEqual(false, "the value is not boolean and the function retrun that is boolean");
        expect(isBoolean(false)).toEqual(true, "the value is boolean and the function retrun that is not boolean");
        expect(isBoolean("false")).toEqual(false, "the value is not boolean and the function retrun that is boolean");
    });
});

