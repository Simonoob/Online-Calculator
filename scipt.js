class Calculator{
    constructor(historyText, entryText){
        this.historyText = historyText;
        this.entryText = entryText;
        this.readyToReset = false;
        this.clear();
    }
    
    clear(){
        this.entry = "";
        this.history = "";
        this.operation = undefined;
    }

    delete(){
        this.entry = this.entry.toString().slice(0,-1);
    }

    appendNumber(number){
        if (number === "." && this.entry.includes(".")){
            return;
        }
        this.entry = this.entry.toString() + number.toString();
    }

    chooseOperation(operation){
        if (this.entry===""){
            return;
        }
        if (this.history !== ""){
            this.compute();
        }
        this.operation = operation;
        this.history = this.entry;
        this.entry = "";
    }

    compute(){
        let computation;
        const prev = parseFloat(this.history);
        const current = parseFloat(this.entry);
        if (isNaN(prev) || isNaN(current)){
            return;
        }
        switch(this.operation){
            case "+": 
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "÷":
                computation = prev / current;
                break;
            default:
                return;
        }
        this.readyToReset = true;
        this.entry = computation;
        this.operation = undefined;
        this.history = "";
    }

    getEntryNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay;
        if (isNaN(integerDigits)){
            integerDisplay = "";
        } else {
            integerDisplay = integerDigits.toLocaleString("en", {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits!=null){
            return `${integerDigits}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateText(){
        this.entryText.innerText = this.getEntryNumber(this.entry);
        if (this.operation!== undefined){
            this.historyText.innerText = `${this.getEntryNumber(this.history)} ${this.operation}`;
        } else {
            this.historyText.innerText = "";
        }
    }
}


const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]"); 
const deleteButton = document.querySelector("[data-delete]"); 
const allClearButton = document.querySelector("[data-all-clear]"); 
const historyText = document.querySelector("[data-history]"); 
const entryText = document.querySelector("[data-entry]"); 

const calculator = new Calculator(historyText,entryText);

numberButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        if(calculator.history === "" && calculator.entry !== "" && calculator.readyToReset) {
            calculator.entry = "";
            calculator.readyToReset = false;
        }
        calculator.appendNumber(button.innerText);
        calculator.updateText();
    })
});

operationButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateText();
    })
});

equalsButton.addEventListener("click", button=> {
    calculator.compute();
    calculator.updateText();
})

allClearButton.addEventListener("click", button=> {
    calculator.clear();
    calculator.updateText();
})

deleteButton.addEventListener("click", button=> {
    calculator.delete();
    calculator.updateText();
})