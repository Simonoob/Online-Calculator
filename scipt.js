class Calculator {
    constructor(historyText, entryText) {
        this.historyText = historyText;
        this.entryText = entryText;
        this.readyToReset = false;
        this.clear();
    }

    clear() {
        this.entry = "";
        this.history = "";
        this.operation = undefined;
    }

    delete() {
        this.entry = this.entry.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.entry=== ""){
            this.entry = "0.";
        }
        if (number === "." && this.entry.includes(".")) {
            return;
        }
        this.entry = this.entry.toString() + number.toString();
    }

    chooseOperation(operation) {
        this.operation = operation;
        if (this.entry === "") {
            return;
        }
        this.updateText();
        if (this.history !== "") {
            this.compute();
        }
        this.history = this.entry;
        this.entry = "";
    }

    compute() {
        let computation;
        const prev = parseFloat(this.history);
        const current = parseFloat(this.entry);
        if (isNaN(prev) || isNaN(current)) {
            return;
        }
        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            default:
                return;
        }
        this.readyToReset = true;
        this.entry = computation;
        this.operation = undefined;
        this.history = "";
        this.updateText();
    }

    getEntryNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerDigits.toLocaleString("en", {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDigits}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateText() {
        this.entryText.innerText = this.getEntryNumber(this.entry);

        if (this.operation !== undefined) {
            this.historyText.innerText = `${this.getEntryNumber(this.history)} ${this.operation}`;
        } else {
            this.historyText.innerText = "";
        }
        switch(this.entry){
            case "58008":
                this.historyText.innerText = "🥰";
                break;
            case "80085":
                this.historyText.innerText = "🥰";
                break;
            case "55378008":
                this.historyText.innerText = "😦";
                break;
            case "0.7738135":
                this.historyText.innerText = "✨💁‍♂️✨";
                break;
            case "0.7738":
                this.historyText.innerText = "✨💁‍♂️✨";
                break;
            case "379009":
                this.historyText.innerText = "Nerdy boy👨‍💻";
                break;
            case "376006":
                this.historyText.innerText = "Nerdy boy👨‍💻";
                break;
            case "05537":
                this.historyText.innerText = "🍠";
                break;
            case "1907039":
                this.historyText.innerText = "⚒️🗿";
                break;
            case "1607036":
                this.historyText.innerText = "⚒️🗿";
                break;
            case "0.5380":
                this.historyText.innerText = "🐷";
                break;
            case "35380":
                this.historyText.innerText = "🐷";
                break;
            case "5637335.1":
                this.historyText.innerText = "👀🦵";
                break;
            case "5637335.1":
                this.historyText.innerText = "👀🦵";
                break;
            case "317537":
                this.historyText.innerText = "👩";
                break;
            case "0.5535":
                this.historyText.innerText = "🛏️";
                break;
            case "455":
                this.historyText.innerText = "Thicc 🍑";
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

const calculator = new Calculator(historyText, entryText);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (calculator.history === "" && calculator.entry !== "" && calculator.readyToReset) {
            calculator.entry = "";
            calculator.readyToReset = false;
        }
        calculator.appendNumber(button.innerText);
        calculator.updateText();
    })
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateText();
    })
});

equalsButton.addEventListener("click", button => {
    calculator.compute();
    calculator.updateText();
})

allClearButton.addEventListener("click", button => {
    calculator.clear();
    calculator.updateText();
})

deleteButton.addEventListener("click", button => {
    calculator.delete();
    calculator.updateText();
})

document.addEventListener("keydown", e=> {
    switch(e.key){
        case "1":
            addNumber(e.key);
            break;
        case "2":
            addNumber(e.key);
            break;
        case "3":
            addNumber(e.key);
            break;
        case "4":
            addNumber(e.key);
            break;
        case "5":
            addNumber(e.key);
            break;
        case "6":
            addNumber(e.key);
            break;
        case "7":
            addNumber(e.key);
            break;
        case "8":
            addNumber(e.key);
            break;
        case "9":
            addNumber(e.key);
            break;
        case "0":
            addNumber(e.key);
            break;
        case ".":
            addNumber(e.key);
            break;
        case ",":
            addNumber(".");
            break;
        case "Delete":
            calculator.clear();
            calculator.updateText();
            break;
        case "Backspace":
            calculator.delete();
            calculator.updateText();
            break;
        case "Enter":
            calculator.compute();
            calculator.updateText();
            break;
        case "=":
            calculator.compute();
            calculator.updateText();
            break;
        case "*":
            calculator.chooseOperation(e.key);
            calculator.updateText();
        case "+":
            calculator.chooseOperation(e.key);
            calculator.updateText();
        case "-":
            calculator.chooseOperation(e.key);
            calculator.updateText();
        case "/":
            calculator.chooseOperation(e.key);
            calculator.updateText();     
    }
})

function addNumber(e){
    if (calculator.history === "" && calculator.entry !== "" && calculator.readyToReset) {
        calculator.entry = "";
        calculator.readyToReset = false;
    }
    calculator.appendNumber(e);
    calculator.updateText();
}