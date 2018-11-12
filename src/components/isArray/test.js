const isArray = require('./').default;

describe('isArray', function() {
    test('isArray function return true if value is array and false if is not', () => {
        expect(isArray(1)).toEqual(false, "the value is not array and the function retrun that is array");
        expect(isArray("1")).toEqual(false, "the value is not array and the function retrun that is array");
        expect(isArray([])).toEqual(true, "the value is array and the function retrun that is not array");
        expect(isArray({})).toEqual(false, "the value is not array and the function retrun that is array");
    });
});

