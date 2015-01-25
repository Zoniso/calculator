function Calculator() {

    //var valA = '', valB = '', action = ''; //These variables will hold the desired numbers and math operation
    //var IsA = true, IsB, IsAction; //flags which will reflect which value is relevant ATM
    //var PrevResponse={0:'', 1:'', 2:''};
    //var response={0:'', 1:'', 2:''};
    //var self = this;

    setTimeout(
        function () {
            document.getElementsByClassName('loading')[0].style.display = 'none';
            document.getElementsByClassName('content')[0].style.display = 'block';
        }, 2000);

    this.brain = function (val) { //This function will call the other functions by order
        var response = this.getResponse();
        if (val === 'C') { //user wants to clear the screen
            response = this.resetData();
            this.printToScreen('0');
        }
        else if (val === '=') {//user want to see the solution to his equation
            if (response[0] !== '' && response[2] !== '' && response[1] !== '') {
                var sol = this.calculate(response);
                sol = sol.toString();
                if (sol.length > 10) {
                    sol = sol.substring(0, 10);
                }
                this.printToScreen(sol);
                response=this.resetData();
            }
            else {
                console.log('invalid input');
                this.printToScreen('0');
            }
        }
        else {//user input for valA, valB, action
            response = this.getInput(val, response);
            //valA=response[0]; valB=response[2]; action=response[1];
            if (response[0] !== '') {
                this.printToScreen(response[0] + response[1] + response[2]);
            }
            else {
                this.printToScreen('0');
            }
        }
    };

    this.getResponse = function(){
        return {0:'', 1:'', 2:''};
    };

    this.getInput = function (val, PrevResponse) { //this function will get and save the input from the user into it's return value {0: valueA, 1: action, 2: valueB}
        var response=PrevResponse;
        //start with valA
        if (response[0] === '') {//new valA
            var valid = this.validate(val, 'number');
            if (valid) {
                response[0] = val;
                console.log(response[0]); //for debug
            }
            else if (val === '.') {
                response[0] = '0.';
                console.log(response[0]); //for debug
            }
            else {
                console.log('invalid input');
            }
        }
        else if (response[1] === '' && response[2] === '') {//in the middle of valA
            valid = this.validate(val, 'number');
            if (valid) {
                response[0] = response[0] + val;
                console.log(response[0]); //for debug
            }
            else if (val === '.') {
                response[0] = response[0] + '.';
                console.log(response[0]); //for debug
            }
            else if (val === '+' || val === '-' || val === '*' || val === '/') {//input is an action
                response[1] = val;
                console.log(response[1]); //for debug
            }
            else{
                console.log('invalid input');
            }
        }
        else if (response[1] !== '' && response[2] === '') {//an additional action was pressed - override the existing
            valid = this.validate(val, 'operation');
            if (valid) {
                response[1] = val;
                console.log(response[1]); //for debug
            }
            else if (val === '.') {
                console.log('invalid input');
            }
            else {
                if (this.validate(val, 'number')) {//input is a number
                    response[2] = val;
                    console.log(response[2]); //for debug
                }
                else{//input is unexpected
                    console.log('invalid input');
                }
            }
        }
        else if (response[1] !== '' && response[2]!=='') {//in the middle of valB
            valid = this.validate(val, 'number');
            if (valid) {
                response[2] = response[2] + val;
                console.log(response[2]); //for debug
            }
            else if (val === '.') {
                response[2] = response[2] + '.';
                console.log(response[2]); //for debug
            }
            else {
                console.log('invalid input');
            }
        }
        else{
            console.log('invalid input');
        }
        return response;
    };

    this.validate = function (val, type) { //This function will verify the input from the user according to the desired type
        switch (type) {
            case 'number':
                if (isNaN(val)) { //if input is not a number
                    return false;
                }
                else { //input is a number
                    return true;
                }
                break;
            case 'operation':
                if (val === '+' || val === '-' || val === '*' || val === '/') {
                    return true;
                }
                else {
                    return false;
                }
                break;
            default :
                return false;
        }
    };

    this.calculate = function (response) {
        var sol;
        response[0] = parseFloat(response[0]);//valA
        response[2] = parseFloat(response[2]);//valB
        switch (response[1]) {//the action
            case '+':
                sol = response[0] + response[2];
                break;
            case '-':
                sol = response[0] - response[2];
                break;
            case '*':
                sol = response[0] * response[2];
                break;
            case '/':
                sol = response[0] / response[2];
                break;
        }
        return sol;
    };

    this.resetData = function () {//don't need the value
        return {0:'', 1:'', 2:''};
    };

    this.printToScreen = function (input) { //this function will print the user input to the calculator screen
        var elem = document.getElementById('screenText');
        elem.value = input;
        return elem.value; //for testing
    };
}

var calculator = new Calculator();
