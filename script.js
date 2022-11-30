const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');
const btnEqual = document.querySelectorAll('.equal');
const btnDot = document.querySelectorAll('.dot');
const btnClear = document.querySelectorAll('.clear');
const display = document.querySelector('.display');

let displayValue = 0;
let value1;
let value2;
let operatorValue;

display.textContent = displayValue; 

btnNumbers.forEach(button => {button.addEventListener('click', number)});
btnOperators.forEach(button => {button.addEventListener('click', operator)});
btnEqual.forEach(button => {button.addEventListener('click', equals)});
btnDot.forEach(button => {button.addEventListener('click', dot)});
btnClear.forEach(button => {button.addEventListener('click', clear)});

function number(event) {
  button = event.target;
  return (displayValue == 0 && button.value == 0) ? false : updateDisplay(button.value);
}

function updateDisplay(btnValue) {
  displayValue === 0 ? (displayValue = btnValue) : (displayValue = displayValue + btnValue);
  return display.textContent = displayValue; 
}

function resetDisplay() {
  displayValue = undefined;
}

function operator(event) {
  button = event.target;
  operatorValue = button.value;
  if (value1 === undefined) {
    value1 = displayValue;
    resetDisplay();
  } else {
    value2 = resetDisplay;
    equals(operatorValue);
  }
}

function equals(operatorValue) {
  if (operatorValue === "/" && value2 === 0) {
    clear();
  } else {
    if (operatorValue === "+") {
      add();  
    } else if { 
    } else if {
    } else if {
    } else if {
  }
  
}


function dot() {
  null
}

function clear() {
  null
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