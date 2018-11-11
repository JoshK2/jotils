const isUndefined = require('./').default;
const a = 1;
const obj = {};

describe('isUndefined', function() {
    test('isUndefined function return true if value is undefined and false if is not', () => {
        expect(isUndefined(a)).toEqual(false, "the value is defined and the function retrun that is undefined");
        expect(isUndefined(obj.not_defined)).toEqual(true, "the value is undefined and the function retrun that is defined");
    });
});

