const numbers = document.querySelectorAll("button");
const entry = document.querySelector(".display-text");
let currentEntry="";
let lastEntry=0;
let operator;


numbers.forEach(number => number.addEventListener("click",message));
function message(e){
    const targetId = e.target.id;
    if (e.target.classList.value === "number"){
        currentEntry += targetId;
        entry.textContent += e.target.textContent;
    }
    else{
        console.log(targetId);
        switch(targetId){
            case "add":
                operator = "+";
                break;
            case "subtract":
                operator = "-";
                break;
        }
        lastEntry = currentEntry;
        console.log(operator);
        calculate();
    } 
}

let result;

function calculate(){
    if (lastEntry!= 0 && currentEntry!= 0 && operator){
        lastEntry = parseInt(lastEntry);
        currentEntry = parseInt(currentEntry);
        switch(operator){
            case "+":
                result = lastEntry + currentEntry;
                break;
        }
        entry.textContent = result;
    }
    else{}
}