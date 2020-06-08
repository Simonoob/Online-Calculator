const buttons = document.querySelectorAll("button");
const entry = document.querySelector(".display-text");
const history = document.querySelector(".history-text");
let currentEntry="";
let workingValue = undefined;
let operator;


buttons.forEach(button => button.addEventListener("click",execute));
function execute(e){
    const targetId = e.target.id;
    if (e.target.classList.value === "number"){
        entry.textContent = "";
        currentEntry += targetId;
        entry.textContent += targetId;
    }
    else{
        console.log(targetId);
        history.textContent += `${currentEntry} ${e.target.textContent} `;
        switch(targetId){
            case "equals":
                calculate();
                break;
            case "add":
                operator = "+";
                break;
            case "subtract":
                operator = "-";
                break;
        }
        console.log(operator);
        calculate();
    } 
}

let result;

function calculate(){
    if (currentEntry!="" && operator){
        workingValue === undefined ? workingValue=0:{};
        workingValue = parseInt(workingValue);
        currentEntry = parseInt(currentEntry);
        switch(operator){
            case "+":
                result = workingValue + currentEntry;
                break;
        }
        entry.textContent = result;
        currentEntry = "";
        workingValue = result;
    }
}