describe('test the reset data function', function () {

    var myCalculator;

    beforeEach(function () {
        myCalculator = new Calculator();
    });

    afterEach(function () {
        myCalculator = null;
    });

    it('should return an empty response object', function () {
        var response = myCalculator.resetData();
        expect(response).toEqual({0: '', 1: '', 2: ''});
    });
});