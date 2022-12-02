const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');
const btnEqual = document.querySelectorAll('.equal');
const btnDot = document.querySelectorAll('.dot');
const btnClear = document.querySelectorAll('.clear');
const display = document.querySelector('.display');

btnNumbers.forEach(button => {button.addEventListener('click', number)});
btnOperators.forEach(button => {button.addEventListener('click', operator)});
btnEqual.forEach(button => {button.addEventListener('click', equals)});
btnDot.forEach(button => {button.addEventListener('click', dot)});
btnClear.forEach(button => {button.addEventListener('click', clear)});

let displayValue; // !!!
let firstNum;
let secondNum;
let mainOperator;
let nextOperator;

display.textContent = 0; // !!!

//checks for errors and calls display update
function number(event) {
  button = Number(event.target.value);
  if (displayValue === undefined && button === 0) { //prevents 0 being assinged multiple times // !!!
    displayValue = 0;
    return display.textContent = displayValue; 
  } else {
    updDisplayValue(button); //if everything is ok - update display
  }
}

//updates display
function updDisplayValue(buttonValue) {
  if (displayValue === undefined){ // !!!
    displayValue = buttonValue; //prevents value to be assigned after 0
  } else {
    displayValue = displayValue + buttonValue.toString(); // string prevents numbers from being calculated
    displayValue = Number(displayValue); //converts back to number value for future calculation
  }
  return display.textContent = displayValue; 
}

//check for number assignment and the need for calculation
function operator(event) {
  let operatorValue = event.target.value;
  if (firstNum === undefined) {
    firstNum = displayValue;
    mainOperator = operatorValue;
    displayValue = 0; //because next we will need to fill in the secondNum
  } else if (firstNum !== undefined && secondNum === undefined && displayValue !== undefined){
    nextOperator = operatorValue; //saving next operator to be assigned to main AFTER calculation
    secondNum = displayValue;
    operate(mainOperator);
    mainOperator = nextOperator;//assigning next operator to main
  } else { //if non above true let change the operator
    mainOperator = operatorValue;
  }
}

function operate(mainOperator) {
  if (mainOperator === "+") {add(firstNum, secondNum);}
  else if (mainOperator === "-") {subtract(firstNum, secondNum);}
  else if (mainOperator === "*") {multiply(firstNum, secondNum);}
  else if (mainOperator === "/") {divide(firstNum, secondNum);}
  firstNum = answer;
  secondNum = undefined;
  displayValue = undefined;
  display.textContent = answer;
}




function equals() {
  if (mainOperator === "/" && secondNum === 0) {
    clear();
  } else { 
    secondNum = displayValue;
    operate(mainOperator);
  }
}



function dot() {
  null
}

function clear() {
  displayValue = undefined;
  operatorValue = undefined;
  firstNum = 0;
  secondNum = undefined;
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

