describe('test the brain function using stubs(spies) for the other functions', function () {

    var myCalculator;
    beforeEach(function(){
        myCalculator = new Calculator();
        spyOn(myCalculator,'printToScreen');
        spyOn(myCalculator,'getInput');
        spyOn(myCalculator,'calculate').and.callThrough();
        spyOn(myCalculator,'resetData').and.callThrough();
        spyOn(myCalculator,'validate').and.callThrough();
    });

    afterEach(function(){
        myCalculator=null;
    });


    it ('should make sure that C value calls printScreen with 0 and reset the data', function(){
        myCalculator.brain('C');
        expect(myCalculator.printToScreen).toHaveBeenCalledWith('0');
        expect(myCalculator.resetData).toHaveBeenCalled();
    });

    it('should make sure that = value will call the calculate function is there is data to calculate, then resetData', function(){
        var tmpResponse = {0:'4', 1:'+', 2:'5'};
        spyOn(myCalculator, 'getResponse').and.returnValue(tmpResponse);
        myCalculator.brain('=');
        expect(myCalculator.calculate).toHaveBeenCalledWith(tmpResponse);
        expect(myCalculator.resetData).toHaveBeenCalled();
        expect(myCalculator.printToScreen).toHaveBeenCalled();
    });

    it('should make sure that digit value calls getInput with the digit and the previous response', function(){
    });
});