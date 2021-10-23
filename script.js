let value1 = "";
let value2 = "";
let operation = "";
let decimalTrigger = false;
let numberTrigger = true;

const container = document.querySelector('#container');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const decimalBtn = document.querySelector('#decimal');
const delBtn = document.querySelector('#back');

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function operate(operator, a, b){
    if(operator === '+'){
        return add(a,b);
    }
    else if(operator === '-'){
        return subtract(a,b);
    }
    else if(operator === '*'){
        return multiply(a, b);
    }
    else if(operator === '/'){
        return divide(a, b);
    }
}

oneBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    document.getElementById("display").innerHTML += "1";
    value1 += "1";
});

twoBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    document.getElementById("display").innerHTML += "2";
    value1 += "2";
});

threeBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    document.getElementById("display").innerHTML += "3";
    value1 += "3";
});

fourBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    document.getElementById("display").innerHTML += "4";
    value1 += "4";
});

fiveBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    document.getElementById("display").innerHTML += "5";
    value1 += "5";
});

sixBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    document.getElementById("display").innerHTML += "6";
    value1 += "6";
});

sevenBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    document.getElementById("display").innerHTML += "7";
    value1 += "7";
});

eightBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    document.getElementById("display").innerHTML += "8";
    value1 += "8";
});

nineBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    document.getElementById("display").innerHTML += "9";
    value1 += "9";
});

zeroBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    document.getElementById("display").innerHTML += "0";
    value1 += "0";
});

decimalBtn.addEventListener('click', () => {
    if(numberTrigger){
        document.getElementById("display").innerHTML = "";
        numberTrigger = false;
        value1 = "";
        value2 = "";
    }
    if(!decimalTrigger){
        document.getElementById("display").innerHTML += ".";
        value1 += ".";
    }
    decimalTrigger = true;
});

plusBtn.addEventListener('click', () => {
    numberTrigger = false;
    if(!isNaN(parseFloat(value1)) && !isNaN(parseFloat(value2))){
        result = operate(operation, parseFloat(value2), parseFloat(value1));
        value1 = result;
        value2 = "";
        document.getElementById("display").innerHTML = parseFloat(result.toFixed(4));
    }
    document.getElementById("display").innerHTML += "+";
    operation = "+";
    value2 = value1;
    value1 = "";
    decimalTrigger = false;
});

minusBtn.addEventListener('click', () => {
    numberTrigger = false;
    if(!isNaN(parseFloat(value1)) && !isNaN(parseFloat(value2))){
        result = operate(operation, parseFloat(value2), parseFloat(value1));
        value1 = result;
        value2 = "";
        document.getElementById("display").innerHTML = parseFloat(result.toFixed(4));
    }
    document.getElementById("display").innerHTML += "-";
    operation = "-";
    value2 = value1;
    value1 = "";
    decimalTrigger = false;
});

multiplyBtn.addEventListener('click', () => {
    numberTrigger = false;
    if(!isNaN(parseFloat(value1)) && !isNaN(parseFloat(value2))){
        result = operate(operation, parseFloat(value2), parseFloat(value1));
        value1 = result;
        value2 = "";
        document.getElementById("display").innerHTML = parseFloat(result.toFixed(4));
    }
    document.getElementById("display").innerHTML += "*";
    operation = "*";
    value2 = value1;
    value1 = "";
    decimalTrigger = false;
});

divideBtn.addEventListener('click', () => {
    numberTrigger = false;
    if(!isNaN(parseFloat(value1)) && !isNaN(parseFloat(value2))){
        result = operate(operation, parseFloat(value2), parseFloat(value1));
        value1 = result;
        value2 = "";
        document.getElementById("display").innerHTML = parseFloat(result.toFixed(4));
    }
    document.getElementById("display").innerHTML += "/";
    operation = "/";
    value2 = value1;
    value1 = "";
    decimalTrigger = false;
});

equalsBtn.addEventListener('click', () => {
    console.log(value1);
    console.log(value2);
    if(isNaN(parseFloat(value1)) || isNaN(parseFloat(value2))){
        document.getElementById("display").innerHTML = "Missing number"
    }
    else if(operation === '/' && parseFloat(value1) === 0){
        document.getElementById("display").innerHTML = "ERROR - Cannot divide by 0";
        value1 = "";
        value2 = "";
    } else{
        result = operate(operation, parseFloat(value2), parseFloat(value1));
        value1 = result;
        value2 = "";
        document.getElementById("display").innerHTML = parseFloat(result.toFixed(4));
    }
    decimalTrigger = false;
    numberTrigger = true;
});

clearBtn.addEventListener('click', () => {
    value1 = "";
    value2 = "";
    document.getElementById("display").innerHTML = "";
    decimalTrigger = false;
});

delBtn.addEventListener('click', () => {
    screen = document.getElementById("display").innerHTML;
    value1 = value1.substring(0, value1.length-1);
    document.getElementById("display").innerHTML = screen.substring(0, screen.length-1);
    
})


//overflow text