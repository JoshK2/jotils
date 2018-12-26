const isNumber = require('./').default;

describe('isNumber', function() {
    test('isNumber function return true or false if value is number or not', () => {
        expect(isNumber(1)).toEqual(true, "the value is number and the function retrun that is not number");
        expect(isNumber("1")).toEqual(false, "the value is not number and the function retrun that is number");
        expect(isNumber(1.2)).toEqual(true, "the value is number and the function retrun that is not number");
        expect(isNumber("1.2")).toEqual(false, "the value is not number and the function retrun that is number");
    });
});

