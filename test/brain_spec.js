describe('test the brain function using stubs(spies) for the other functions', function () {

    var myCalculator;
    beforeEach(function(){
        myCalculator = new Calculator();
        spyOn(myCalculator,'printToScreen');
        spyOn(myCalculator,'getInput').and.callThrough();
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

    it('should make sure that = value will call the calculate function if there is data to calculate, then calls resetData', function(){
        var tmpResponse = {0:'4', 1:'+', 2:'5'};
        var sol = (4+5).toString();
        spyOn(myCalculator, 'getResponse').and.returnValue(tmpResponse);
        myCalculator.brain('=');
        expect(myCalculator.calculate).toHaveBeenCalledWith(tmpResponse);
        expect(myCalculator.resetData).toHaveBeenCalled();
        expect(myCalculator.printToScreen).toHaveBeenCalledWith(sol);
    });

    it('should make sure that = value when not all values were saved will not change the response data', function(){
        var tmpResponse = {0:'4', 1:'+', 2:''};
        spyOn(myCalculator, 'getResponse').and.returnValue(tmpResponse);
        myCalculator.brain('=');
        expect(myCalculator.calculate).not.toHaveBeenCalled();
        expect(myCalculator.resetData).not.toHaveBeenCalled();
        expect(myCalculator.printToScreen).not.toHaveBeenCalled();
    });


    it('should make sure that digit value calls getInput with the digit and the previous response, and print the response to screen', function(){
        var tmpResponse = {0:'3', 1:'*', 2:'5.'};
        var val = '5';
        spyOn(myCalculator, 'getResponse').and.returnValue(tmpResponse);
        myCalculator.brain(val);
        expect(myCalculator.getInput).toHaveBeenCalledWith(val, tmpResponse);
        expect(myCalculator.printToScreen).toHaveBeenCalledWith(tmpResponse[0]+tmpResponse[1]+tmpResponse[2]);
    });
});