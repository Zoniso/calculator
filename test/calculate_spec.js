describe ('test the calculate function', function () {

            var myCalculator;

            beforeEach(function(){
                myCalculator = new Calculator();
            });

            afterEach(function(){
                myCalculator=null;
            });

            it ('should add two numbers', function(){
                var data = {0:'1', 1:'+', 2: '3'};
                var response = myCalculator.calculate(data);
                expect(response).toEqual(1+3);
            });

            it ('should subtract two numbers', function(){
                var data = {0:'1', 1:'-', 2: '3'};
                var response = myCalculator.calculate(data);
                expect(response).toEqual(1-3);
            });

            it ('should multiply two numbers', function(){
                var data = {0:'10.3', 1:'*', 2: '31'};
                var response = myCalculator.calculate(data);
                expect(response).toEqual(10.3*31);
            });

            xit ('should divide two numbers', function(){
                var data = {0:'555', 1:'/', 2: 'a'};
                var response = myCalculator.calculate(data);
                expect(response).toEqual(555/0);
            });
});
