const numbers = document.querySelectorAll("button");
const entry = document.querySelector(".display-text");
let entryValue="";


numbers.forEach(number => number.addEventListener("click",message));
function message(e){
    const targetId = e.target.id;
    if (e.target.classList.value === "number"){
        entryValue += targetId;
        entry.textContent += e.target.textContent;
        console.log(entryValue);
    }
    else{
        console.log(targetId);
        switch(targetId){
            case "add":
                entryValue+= "+";
                break;
        }
        
    } 
}