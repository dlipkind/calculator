const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');
const btnEqual = document.querySelectorAll('.equal');
const btnDot = document.querySelectorAll('.dot');
const btnClear = document.querySelectorAll('.clear');

btnNumbers.forEach(button => {button.addEventListener('click', numberCheck)});
btnOperators.forEach(button => {button.addEventListener('click', numberCheck)});
btnEqual.forEach(button => {button.addEventListener('click', numberCheck)});
btnDot.forEach(button => {button.addEventListener('click', numberCheck)});
btnClear.forEach(button => {button.addEventListener('click', numberCheck)});

function numberCheck() {
  alert("Hello");
}



function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}



function opertate (operator, a, b) {
    if (operator === "+") {
        add(a, b);
    } else if (operator === "-"){
        subtract(a, b);
    } else if (operator === "*"){
        multiply(a, b);
    } else if (operator === "/"){
        divide(a, b);
    }
}