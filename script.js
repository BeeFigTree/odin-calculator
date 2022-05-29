// Variables
const calculatorDisplay = document.querySelector(".calculator__display");
const calculatorNumberButtons = Array.from(document.querySelectorAll(".button--number"));
const calculatorOperations = Array.from(document.querySelectorAll(".operation"));

class Calculator {
    constructor(previousValue, currentValue, currentOperation) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
        this.currentOperation = currentOperation;
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

    updateDisplay = (event) => {
        if(!event) {
            calculatorDisplay.innerHTML = this.previousValue + " " + this.currentOperation;
            calculatorDisplay.value = undefined;
            return;
        }

        if(calculatorDisplay.value) {
            calculatorDisplay.value = calculatorDisplay.value + event.target.value;
        } else {
            calculatorDisplay.value = event.target.value;
        }
        if(!this.currentOperation) {
            calculatorDisplay.innerHTML = calculatorDisplay.value;
        } else {
            calculatorDisplay.innerHTML = calculatorDisplay.innerHTML + " " + calculatorDisplay.value;
        }
    }

    setOperation = (operation) => {
        this.currentOperation = operation.target.value;
        this.setPreviousValue(this.getCurrentValue());
        this.updateDisplay();
        console.log(this.previousValue, this.currentOperation)
    }
    
    setPreviousValue = (currentValue) => {
        this.previousValue = currentValue;
    }
    
    getCurrentValue = () => {
        return calculatorDisplay.value;
    }

    addition = () => {
        return this.previousValue + this.currentValue;
    }
    
    subtraction = () => {
        return this.previousValue - this.currentValue;
    }
    
    division = () => {
        return this.previousValue / this.currentValue;
    }
    
    multiplication = () => {
        return this.previousValue * this.currentValue;
    }
    
    percentage = () => {
        return (this.previousValue / 100) * this.currentValue;
    }

}

const calculator = new Calculator(null, 0, null);

// Event listeners
calculatorOperations.map(operation => {
    operation.addEventListener("click", calculator.setOperation)
});

calculatorNumberButtons.map(number => {
    number.addEventListener("click", calculator.updateDisplay)
});