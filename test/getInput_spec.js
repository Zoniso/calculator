describe('Test the getInput function', function () {

            var myCalculator;

            beforeEach(function(){
                myCalculator = new Calculator();
            });

            afterEach(function(){
                myCalculator=null;
            });

            it('should send the user input (any digit) and verify it is saved into valA', function () { //test getInput function
                var prev = {0: '', 1: '', 2: ''};
                var response = myCalculator.getInput('8', prev);
                expect(response).toEqual({0: '8', 1: '', 2: ''});
            });

            it('should send the user input (decimal point) and verify it is concatenated to valA', function () { //test getInput function
                var prev = {0: '8', 1: '', 2: ''};
                var response = myCalculator.getInput('.', prev);
                expect(response).toEqual({0: '8.', 1: '', 2: ''});
            });

            it('should send the user input (action) and verify it is saved into the action', function () { //test getInput function
                var prev = {0: '8.4', 1: '', 2: ''};
                var response = myCalculator.getInput('/', prev);
                expect(response).toEqual({0: '8.4', 1: '/', 2: ''});
            });

            it('should send the user input (additional action) and verify it replaces the existing action', function () { //test getInput function
                var prev = {0: '8.4', 1: '/', 2: ''};
                var response = myCalculator.getInput('*', prev);
                expect(response).toEqual({0: '8.4', 1: '*', 2: ''});
            });

            it('should send the user input (digit) and verify it is saved into valB', function () { //test getInput function
                var prev = {0: '8.4', 1: '*', 2: ''};
                var response = myCalculator.getInput('2', prev);
                expect(response).toEqual({0: '8.4', 1: '*', 2: '2'});
            });

            it ('should send the user input (action) while valB is current and verify it is not saved', function(){ //test getInput function
                var prev = {0:'8.4', 1:'*', 2:'2'};
                var response = myCalculator.getInput('+', prev);
                expect(response).not.toEqual({0:'8.4', 1:'+', 2:'2'});
            });

            it ('should send the user input (action) while valB is current and verify it is not saved', function(){ //test getInput function
                var prev = {0:'8.4', 1:'*', 2:'2'};
                var response = myCalculator.getInput('+', prev);
                expect(response).toEqual(prev);
            });

            it ('should make sure that unexpected input will not change the response',function(){
                var prev = {0:'555', 1:'/', 2:'5'};
                var response = myCalculator.getInput('',prev);
                expect(response).toEqual(prev);
            });

            it ('should make sure that unexpected input will not change the response',function(){
                var prev = {0:'555', 1:'', 2:''};
                var response = myCalculator.getInput('',prev);
                expect(response).toEqual(prev);
            });

            //it('should know about simpleCalc', function () {
            //   expect(printToScreen).toBeDefined();
            //});
            //
});