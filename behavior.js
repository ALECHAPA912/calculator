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

let firstNumber, operator, secondNumber;

function operate(first, operator, second) {
    switch(operator){
        case "+": return add(first, second);
        case "-": return substract(first, second);
        case "*": return multiply(first, second);
        case "/": return divide(first, second);
    }
}