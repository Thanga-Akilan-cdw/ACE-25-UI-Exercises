
let calculator = {
    operand1  : "",
    operator  : "",
    operand2  : "",
    addOperands       : function(){ return (calculator.operand1 + calculator.operand2);},
    subtractOperands  : function(){ return (calculator.operand1 - calculator.operand2);},
    multiplyOperands  : function(){ return (calculator.operand1 * calculator.operand2);},
    divideOperands    : function(){ return (calculator.operand1 / calculator.operand2);},

}

function appendCharacter(character){
    let displayBox = document.getElementById("display-box");
    displayBox.value = displayBox.value + "" + character;
    calculator.operand2 = parseFloat(calculator.operand2 + "" +character)
}

function setOperand1(){
    let displayBox = document.getElementById("display-box");
    calculator.operand1 = parseFloat(displayBox.value);
}
function loadOperator(operator){
    setOperand1();
    appendCharacter(operator);
    calculator.operator = operator;
    calculator.operand2 = "";
}

function computeResult(){
    let displayBox = document.getElementById("display-box");
    switch(calculator.operator){
        case '+':
            displayBox.value = calculator.addOperands();
            break;
        case '-':
            displayBox.value = calculator.subtractOperands();
            break;
        case 'x':
            displayBox.value = calculator.multiplyOperands();
            break;
        case '/':
            displayBox.value = calculator.divideOperands();
            break;

    }
}

// Object with operations and prompt

let calculatorOperations = {
    add               : function(a,b){ return (parseInt(a)+parseInt(b));},
    subtract          : function(a,b){ return (a-b);},
    multiply          : function(a,b){ return (a*b);},
    divide            : function(a,b){ return (a/b);}
}

let operand1 = window.prompt("Enter first number ");
let operand2 = window.prompt("Enter second number");

let operation = window.prompt("Enter your operation (add/sub/mul/div)");
console.log(operation)
switch(operation){
    case "add":
        console.log(calculatorOperations.add(operand1,operand2));
        break;
    case "sub":
        console.log(calculatorOperations.subtract(operand1,operand2));
        break;
    case "mul":
        console.log(calculatorOperations.multiply(operand1,operand2));
        break;
    case "div":
        console.log(calculatorOperations.divide(operand1,operand2));
        break;
    default:
        console.log("Invalid input entered..");

}