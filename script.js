// Variables
const calculatorDisplay = document.querySelector(".calculator__display");
const calculatorNumberButtons = Array.from(document.querySelectorAll(".button--number"));
const calculatorOperations = Array.from(document.querySelectorAll('.operation'));

class Calculator {
    constructor(previousValue, currentValue, currentOperation) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.currentOperation = currentOperation;
    }
}

const calculator = new Calculator(null, 0, null);


const operationMap = {
    "%": "",
    "CE": "",
    "C": "",
    "/": "",
    "*": "",
    "-": "",
    "+": "",
}

// Util functions


// Math functions



// Event listeners
