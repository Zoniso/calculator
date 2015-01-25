describe('test the validate function', function () {

    var myCalculator;

    beforeEach(function(){
        myCalculator = new Calculator();
    });

    afterEach(function(){
        myCalculator=null;
    });

    it('should send true if the input is a number', function () {
        var val = '88.1111';
        var ans = myCalculator.validate(val, 'number');
        expect(ans).toBe(true);
    });

    it('should send false if the input is not a number', function () {
        var val = '88.111*';
        var ans = myCalculator.validate(val, 'number');
        expect(ans).toBe(false);
    });

    it('should send true if the input is an operation', function () {
        var val = '/';
        var ans = myCalculator.validate(val, 'operation');
        expect(ans).toBe(true);
    });

    it('should send false if the input is not an operation', function () {
        var val = '55/';
        var ans = myCalculator.validate(val, 'operation');
        expect(ans).toBe(false);
    });

    it('should send false if the type input is unexpected', function () {
        var val = '55';
        var ans = myCalculator.validate(val, 'operatio');
        expect(ans).toBe(false);
    });
});