// Variables
const calculatorDisplay = document.querySelector(".calculator__display");
const prevCalculatorDisplay = document.querySelector(".calculator__prevdisplay");
const calculatorNumberButtons = Array.from(document.querySelectorAll(".button--number"));
const calculatorOperations = Array.from(document.querySelectorAll(".operation"));
const clearButtons = Array.from(document.querySelectorAll(".clear"));

class Calculator {
    constructor(previousValue, currentValue, currentOperation) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.currentOperation = currentOperation;
        this.decimal = false;
        this.operationMap = {
            "%": this.percentage,
            "CE": this.clearCurrentValue,
            "C": this.clearAll,
            "/": this.division,
            "*": this.multiplication,
            "-": this.subtraction,
            "+": this.addition,
        }
    }

    updateDisplay = () => {
        calculatorDisplay.innerText = this.currentValue.toString();
    }

    updateSecondaryDisplay = () => {
        if(!this.previousValue) {
            prevCalculatorDisplay.innerText = "";
            return;
        }
        prevCalculatorDisplay.innerText = this.previousValue.toString() + " " + this.currentOperation;
    }

    updateValue = (event) => {
        if(!this.currentValue) {
            this.currentValue = event.target.value;
        } else {
            this.currentValue = this.currentValue + event.target.value;
        }
        this.updateDisplay();
    }
    
    clearOperationHandler = (event) => {
        this.operationMap[event.target.value]();
    }

    setOperation = (operation) => {
        
    }
    
    setPreviousValue = (currentValue) => {
        this.previousValue = this.getCurrentValue();
        this.currentValue = 0;
        this.updateDisplay();
        this.updateSecondaryDisplay();
    }
    
    getCurrentValue = () => {
        return parseFloat(this.currentValue);
    }

    getPreviousValue = () => {
        return parseFloat(this.previousValue);
    }

    addition = () => {
        return this.previousValue + this.getCurrentValue();
    }
    
    subtraction = () => {
        return this.previousValue - this.getCurrentValue();
    }
    
    division = () => {
        return this.previousValue / this.getCurrentValue();
    }
    
    multiplication = () => {
        return this.previousValue * this.getCurrentValue();
    }
    
    percentage = () => {
        return (this.previousValue / 100) * this.getCurrentValue();
    }

    clearAll = () => {
        this.currentValue = 0;
        this.currentOperation = null;
        this.updateDisplay();
        this.updateSecondaryDisplay();
    }

    clearCurrentValue = () => {
        this.currentValue = 0;
        this.updateDisplay();
    }

    equals = () => {
        
    }

    decimalHandler = (event) => {
        if(this.decimal) return;
        this.updateValue(event);
        this.decimal = true;
    }

}

const calculator = new Calculator(null, null, null);

// Event listeners
calculatorOperations.map(operation => {
    operation.addEventListener("click", calculator.setOperation);
});

clearButtons.map(button => {
    button.addEventListener("click", calculator.clearOperationHandler);
});

calculatorNumberButtons.map(number => {
    number.addEventListener("click", calculator.updateValue);
});

document.querySelector(".button--decimal").addEventListener("click", calculator.decimalHandler);
document.querySelector(".button--equal").addEventListener("click", calculator.equals);