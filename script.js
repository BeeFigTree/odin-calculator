// Variables
const calculatorDisplay = document.querySelector(".calculator__display");
const calculatorNumberButtons = Array.from(document.querySelectorAll(".button--number"));
const calculatorOperations = Array.from(document.querySelectorAll('.operation'));

const operationMap = {
    "%": "",
    "CE": "",
    "C": "",
    "/": "",
    "*": "",
    "-": "",
    "+": "",
}

class Calculator {
    constructor(previousValue, currentValue, currentOperation) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.currentOperation = currentOperation;
    }
}

const calculator = new Calculator(null, 0, null);

// Util functions
const setOperation = (operation) => {
    calculator.currentOperation = operation.target.value;
}

const setPreviousValue = () => {
    calculator.previousValue = currentValue;
}

// Math functions


// Event listeners
calculatorOperations.map(operation => {
    operation.addEventListener("click", setOperation)
})