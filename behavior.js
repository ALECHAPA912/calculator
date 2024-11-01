const buttons = document.querySelectorAll("button");
const result = document.querySelector(".results");
let firstNumber = undefined;
let operator = undefined;
let secondNumber = undefined;
let banderita = true; // bandera que permite ingresar nuevo numero en la calculadora o no

buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        let value;
        switch (buttons.className) {
            case "zero" : value = "0";
            break;
            case "one": value = "1"; 
            break;
            case "two": value = "2";
            break;
            case "three": value = "3";
            break;
            case "four": value = "4";
            break;
            case "five": value = "5";
            break;
            case "six": value = "6"; 
            break;
            case "seven": value = "7"; 
            break;
            case "eight": value = "8"; 
            break;
            case "nine": value = "9"; 
            break;
            case "dot": value = ".";
            break;
            case "backspace": value = "b";
            break;
            case "clear": 
                result.textContent = "0";
                firstNumber = undefined; 
                secondNumber = undefined; 
                operator = undefined; 
                banderita = true;
            break;
            case "equals":
                if (firstNumber != undefined) {
                    secondNumber = parseFloat(result.textContent);
                    result.textContent = (operate(firstNumber, operator, secondNumber)).toString();
                }
                firstNumber = undefined;
                secondNumber = undefined;
                operator = undefined;
                banderita = true;
            break;
            default:
                if (firstNumber == undefined) {
                    firstNumber = parseFloat(result.textContent);
                    operator = buttons.className;
                }
                else {
                    secondNumber = parseFloat(result.textContent); 
                    firstNumber = operate(firstNumber, operator, secondNumber);
                    result.textContent = (firstNumber).toString();
                    secondNumber = undefined;
                    operator = buttons.className;
                }
                banderita = true;
            break;
        }

        
        if (!isNaN(parseFloat(value))) {
            
            if (banderita || result.textContent == "0") {
                result.textContent = value; 
                banderita = false;
            }  
            else result.textContent += value;  
            
        } 
        
        if (value == "." && !(result.textContent.includes("."))) {
            result.textContent += value;
        }
        
        if (value == "b" && result.textContent != "0") {
            let arr = result.textContent.split("");
            arr.pop();
            result.textContent = arr.join("");
            if (arr.length < 1) result.textContent = "0";
        } 
        
    });
});

function add(a, b) {
    return a+b;
}

function substract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operate(first, operator, second) {
    switch(operator){
        case "add": return add(first, second);
        case "substract": return substract(first, second);
        case "multiply": return multiply(first, second);
        case "divide": return  divide(first, second);
    }
}

