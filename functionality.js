    // these variables store the html area for the buttons of the calculator app
    var oneButton = document.getElementById("one");
    var twoButton = document.getElementById("two");
    var threeButton = document.getElementById('three');
    var fourButton = document.getElementById('four');
    var fiveButton = document.getElementById('five');
    var sixButton = document.getElementById('six');
    var sevenButton = document.getElementById('seven');
    var eightButton = document.getElementById('eight');
    var nineButton = document.getElementById('nine');
    var zeroButton = document.getElementById('zero');
    var deleteButton = document.getElementById('delete');
    var plusButton = document.getElementById('plus');
    var minusButton = document.getElementById('minus');
    var divideButton = document.getElementById('divide');
    var multiplyButton = document.getElementById('multiplication');
    var equalsButton = document.getElementById('equals');

    // variables will do math for the calculator
    var firstNumber = '';
    var lastNumber ='';
    var operator;
    
    var lastNumBool = false;
    // this function will check to see if the last number bool is false or true and assign the value to the first number or last number
    function addNumber( i, value){
        if(i == false){
            firstNumber += value; // this will conncatenate the string into a number that will be used in the calculations
            return firstNumber;
    }
        else{
            lastNumber += value; // this will conncatenate the string into a number that will be used in the calculations
            return lastNumber;
        }
    }
    // this function will determine the value of if the last number is active or not
    function changeNumber(i){
        if(i ==1)
            return lastNumBool = true;
        else if(i ==0)
            return lastNumBool = false;
    }
    // function will take in the first and last number and do math depending on the operator
    function equalsPressed(firstNum, lastNum){
        l = Number(lastNum);
        f = Number(firstNum);
        var answer = 0;
        switch(operator){
            case "plus":
                answer = f + l;
                break;
            case "minus":
                answer = f - l;
                break;
            case "division":
                answer = f / l;
                break;
            case "multiplication":
                answer = f * l;
                break;               
        }
        return answer;
    }
    function deleteFunctionality( i, firstNumber, lastNumber){
        if(i == true){
            lastNumber = lastNumber.slice(0, -1);
            console.log(lastNumber, 'hello');
            return lastNumber;
        }
        else if(i == false){
            firstNumber = firstNumber.slice(0, -1);
            console.log(firstNumber, 'hello');
            return firstNumber;
        }
       
    }
    
    
// ONE BUTTON PRESSED
    oneButton.addEventListener('click', ()=>{
        const buttonValue = oneButton.value;
        console.log('stored vlaue: ', buttonValue);
       let displayNum = addNumber(lastNumBool, buttonValue);
        
        document.getElementById("screen").innerHTML = displayNum;
    });
// TWO BUTTON PRESSED
    twoButton.addEventListener('click', ()=>{
        const buttonValue = twoButton.value;
        console.log('stored value: ', buttonValue);
        let displayNum = addNumber(lastNumBool, buttonValue); // this will store or add onto first or last number used for the calculation
        document.getElementById("screen").innerHTML = displayNum; // this will allow the ui to display the number user enters
    });
// THREE BUTTON PRESSED
    threeButton.addEventListener('click', ()=>{
        const buttonValue = threeButton.value;
        console.log('stored value: ', buttonValue);
        let displayNum = addNumber(lastNumBool, buttonValue); // this will store or add onto first or last number used for the calculation
        document.getElementById("screen").innerHTML = displayNum; // this will allow the ui to display the number onto the screen
    });
// FOUR BUTTON PRESSED
    fourButton.addEventListener('click', ()=>{
        const buttonValue = fourButton.value;
        console.log('stored value: ', buttonValue);
        let displayNum = addNumber(lastNumBool, buttonValue); // this will store or add onto first or last number used for the calculation
        document.getElementById("screen").innerHTML = displayNum; // this will allow the ui to display the number onto the screen
    });
// FIVE BUTTON PRESSED
    fiveButton.addEventListener('click', ()=>{
        const buttonValue = fiveButton.value;
        let displayNum = addNumber(lastNumBool, buttonValue); // this will store or add onto first or last number used for the calculation
        document.getElementById("screen").innerHTML = displayNum; // this will allow the ui to display the number onto the screen
    });
// SIX BUTTON PRESSED
    sixButton.addEventListener('click', ()=>{
        const buttonValue = sixButton.value;
        let displayNum = addNumber(lastNumBool, buttonValue); // this will store or add onto first or last number used for the calculation
        document.getElementById("screen").innerHTML = displayNum; // this will allow the ui to display the number onto the screen
    });
// SEVEN BUTTON PRESSED
    sevenButton.addEventListener('click', ()=>{
        const buttonValue = sevenButton.value;
        let displayNum = addNumber(lastNumBool, buttonValue); // this will store or add onto first or last number used for the calculation
        document.getElementById("screen").innerHTML = displayNum; // this will allow the ui to display the number onto the screen
    });
// EIGHT BUTTON PRESSED
    eightButton.addEventListener('click', ()=>{
        const buttonValue = eightButton.value;
        let displayNum = addNumber(lastNumBool, buttonValue); // this will store or add onto first or last number used for the calculation
        document.getElementById("screen").innerHTML = displayNum; // this will allow the ui to display the number onto the screen
    });
// NINE BUTTON PRESSED
    nineButton.addEventListener('click', ()=>{
        const buttonValue = nineButton.value;
        let displayNum = addNumber(lastNumBool, buttonValue); // this will store or add onto first or last number used for the calculation
        document.getElementById("screen").innerHTML = displayNum; // this will allow the ui to display the number onto the screen
    });
// ZERO BUTTON PRESSED
    zeroButton.addEventListener('click', ()=>{
        const buttonValue = zeroButton.value;
        let displayNum = addNumber(lastNumBool, buttonValue); // this will store or add onto first or last number used for the calculation
        document.getElementById("screen").innerHTML = displayNum; // this will allow the ui to display the number onto the screen
    });
    // operator buttons
// DELETE BUTTON PRESSED
    deleteButton.addEventListener('click', ()=>{
        const buttonValue = deleteButton.value;
        console.log('stored value: ', buttonValue);
       
        if(lastNumBool === true){
            lastNumber = deleteFunctionality( lastNumBool, firstNumber, lastNumber);
            document.getElementById("screen").innerHTML = lastnumber;
        }
        else{
            firstNumber = deleteFunctionality( lastNumBool, firstNumber, lastNumber);
            document.getElementById("screen").innerHTML = firstNumber;
        }
    });
// PLUS BUTTON PRESSED
    plusButton.addEventListener('click', ()=>{
        const buttonValue = plusButton.value;
        operator = buttonValue;
        console.log('stored value', buttonValue, ' ', operator);
        changeNumber(1); // this will set the lastNumBool to true to indicate to store the nex number
    });
// MINUS BUTTON PRESSED
    minusButton.addEventListener('click', ()=>{
        const buttonValue = minusButton.value;
        operator = buttonValue;
        console.log('stored value', buttonValue, ' ', operator);
        changeNumber(1);
    });
// MULTIPLY BUTTON PRESSED
    multiplyButton.addEventListener('click', ()=>{
        const buttonValue = multiplyButton.value;
        operator = buttonValue;
        console.log('stored value', buttonValue, ' ', operator);
        changeNumber(1);
    });
// DIVIDE BUTTON PRESSED
    divideButton.addEventListener('click', ()=>{
        const buttonValue = divideButton.value;
        operator = buttonValue;
        console.log('stored value', buttonValue, ' ', operator);
        changeNumber(1);
    })
// EQUAL BUTTON PRESSED
    equalsButton.addEventListener('click', ()=>{
        const buttonValue = equalsButton.value;
        console.log('stored value: ', buttonValue);

        console.log( equalsPressed(firstNumber, lastNumber));
        // changeNumber if 0 will determine that the second value is filled
        changeNumber(0);
        // dislaying onto screen
        let numValue = equalsPressed(firstNumber, lastNumber);
        document.getElementById("screen").innerHTML = numValue;
        // this will reset the answer
        firstNumber = '';
        lastNumber = '';
        operator = '';

    });


    


