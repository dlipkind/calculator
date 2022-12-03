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

let storageNum; 
let firstNum;
let secondNum;
let mainOperator;
let nextOperator;
let answer;

display.textContent = 0; 

function number(event) { //checks for errors and calls for display update
  checkError();
  button = Number(event.target.value);
  if (storageNum === undefined && button === 0) { //prevents 0 being assinged multiple times 
    storageNum = 0;
    return display.textContent = storageNum; 
  } else {
    updDisplay(button);
  }
}

function dot(event) {
  checkError();
  dotSign = event.target.value;
  if (firstNum === answer && answer !== undefined) { //checks if calculation needs to start over after pressing "."
    clear();
    dot(event);
  } else if (storageNum === undefined) { 
    updDisplay(dotSign);
  } else if (storageNum.toString().indexOf(dotSign) > -1) { //prevents from "." being assigned many times 
    return;
  } else {
    updDisplay(dotSign);
  }
}

function operator(event) { //check for number assignment and the need for calculation
  checkError();
  let operatorValue = event.target.value;
  if (firstNum === undefined && secondNum === undefined && storageNum === undefined) {//prevents an error when operator is clicked first !!!!!
    return;
  } else if (firstNum === undefined) {
    firstNum = storageNum;
    checkDot("firstNum");
    checkString(firstNum, "firstNum");
    mainOperator = operatorValue;
    storageNum = undefined; //because we will need to fill in the secondNum
  } else if (firstNum !== undefined && secondNum === undefined && storageNum !== undefined){
    nextOperator = operatorValue; //saving next operator to be assigned to main AFTER calculation
    secondNum = storageNum;
    calculate(mainOperator);
    mainOperator = nextOperator;
  } else { //if non above true let change the operator
    checkDot("firstNum");
    mainOperator = operatorValue;
  }
}

function checkError() {
  if (display.textContent === "ERROR") {
    clear();
  } else {
    return;
  }
}

function checkDot(numType) { //prevents "x." numbers (removes ".")
  if (numType === "firstNum") {
    if (firstNum.toString().endsWith(".")) {
      firstNum = Number(firstNum.slice(0, -1));
    }
  } else if (numType === "secondNum") {
    if (secondNum.toString().endsWith(".")) {
      secondNum = Number(secondNum.slice(0, -1));
    }
  }
}

function checkString(num, numType) { //converts long decibel numbers to number format
  if (typeof num === 'string' && numType === "firstNum") {
    firstNum = Number(firstNum);
  } else if (typeof num === 'string' && numType === "secondNum") {
    secondNum = Number(secondNum);
  }
}

function updDisplay(buttonValue) { //updates display
  if (buttonValue === ".") { 
    if (storageNum === undefined) {
      storageNum = 0 + buttonValue.toString();
    } else {
      storageNum = storageNum + buttonValue.toString(); 
    }
  } else if (storageNum === undefined) {
    storageNum = buttonValue; //prevents values to be assigned after 0
  } else if ((storageNum.split(".").length - 1) <= 1) {
    storageNum = storageNum + buttonValue.toString(); //allows 0.00...
  } else {
    storageNum = storageNum + buttonValue.toString(); // string prevents numbers from being calculated
    storageNum = Number(storageNum); //converts back to number value for future calculation
  }
  return display.textContent = storageNum; 
}

function calculate(mainOperator) {
  if (mainOperator === "+") {answer = firstNum + secondNum;}
  else if (mainOperator === "-") {answer = firstNum - secondNum;}
  else if (mainOperator === "*") {answer = firstNum * secondNum;}
  else if (mainOperator === "/") {answer = firstNum / secondNum;}

  firstNum = answer;
  secondNum = undefined;
  storageNum = undefined;
  display.textContent = answer;
}

function equals() {
  if (firstNum === answer && storageNum === undefined) { //prevents equal sign-related errors
    return;
  } else if (mainOperator === "/" && storageNum === 0) {
    clear();
    display.textContent = "ERROR";
  } else { 
    secondNum = storageNum;
    checkDot("secondNum");
    checkString(secondNum, "secondNum");
    calculate(mainOperator);
  }
}

function clear() {
  answer = undefined;
  storageNum = undefined;
  firstNum = undefined;
  secondNum = undefined;
  operatorValue = undefined;
  mainOperator = undefined;
  nextOperator = undefined;
  display.textContent = 0;
}