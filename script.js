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
  button = Number(event.target.value);
  if (displayValue === 0 && button === 0) {
    displayValue = 0;
    return display.textContent = displayValue; 
  } else {
    updDisplayValue(button);
  }
}

function updDisplayValue(buttonValue) {
  displayValue === 0 ? (displayValue = buttonValue) : (displayValue = displayValue + buttonValue.toString()); // converting to string
  displayValue = Number(displayValue); //converting to nubmer
  return display.textContent = displayValue; 
}

function operator(event) {
  if (value1 !== undefined && value2 !== undefined && operatorValue !== undefined && displayValue !== value1) {
    operatorValue2 = event.target.value;
    equals(operatorValue); 
  } else if (value1 === undefined) {
    operatorValue = event.target.value;
    value1 = displayValue;
    displayValue = 0;
  } else {
    equals(operatorValue);
  }
}

function equals(operatorValue) {
  if (operatorValue === "/" && value2 === 0) {
    clear();
  } else { 
    value2 = displayValue;
    operate();
  }
}

function operate() {
  if (operatorValue === "+") {add(value1, value2);}
  else if (operatorValue === "-") {subtract(value1, value2);}
  else if (operatorValue === "*") {multiply(value1, value2);}
  else if (operatorValue === "/") {divide(value1, value2);}
  
  value1 = answer; // !!!
  value2 = undefined;
  displayValue = 0;
  operatorValue = operatorValue2;
  display.textContent = answer; 
}


function dot() {
  null
}

function clear() {
  displayValue = undefined;
  operatorValue = undefined;
  value1 = 0;
  value2 = undefined;
}






function add (a, b) {
  return answer = a + b;
}

function subtract (a, b) {
  return answer = a - b;
}

function multiply (a, b) {
  return answer = a * b;
}

function divide (a, b) {
  return answer = a / b;
}

