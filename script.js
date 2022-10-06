function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, symbol) {
    if(symbol === "plus") {
        return add(num1, num2);
    } else if(symbol === "minus") {
        return subtract(num1, num2);
    } else if(symbol === "times") {
        return multiply(num1, num2);
    } else if(symbol === "divide") {
        return divide(num1, num2);
    }
}

function clear() {
    numsArray.splice(0, numsArray.length) // clear the individual numbers and start from blank
    nums.splice (0, nums.length); // clear the total numbers, and start from blank
    symbol = ""; // clear the operator symbol
    screen.textContent = 0; // make the screen show 0;
    firstNum = true;
}

function checkNumber(check) {
    return (check !== 'plus' && check !== 'minus' && check !== 'times' && check !== 'divide' && check !== 'clear' && check !== 'equals')
}

let firstNum = true; // Check if a number has already been entered. Reset on clear.
let numsArray = []; // Numbers pressed on calculator
let nums = []; // Numbers joined together from the numsArray, to be shown on the screen, and used for math
let sym; // Symbol of operator, spelled out in english.
const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id === 'clear') {
            clear();
        } 
        else if(checkNumber(button.id)) {
            numsArray.push(button.id)
            screen.textContent = numsArray.join('');
        } 
        else if(button.id === 'plus' || button.id === 'minus' || button.id === 'times' || button.id === 'divide') {
            if(!sym) {
                sym = button.id;
                if(firstNum) {
                    nums[0] = numsArray.join(''); // Create the initial number to be used in math
                    firstNum = false;
                }
            }
            else {
                nums[1] = numsArray.join(''); // If the first number is already filled in, create another number to be used in operate()
                nums[0] = operate(+nums[0], +nums[1], sym); // use operate function to do math on the 2 numbers
                screen.textContent = nums[0];
                sym = button.id;
            }
            numsArray = [];
        } 
        else if(button.id === 'equals') {
            nums[1] = numsArray.join('');
            if(sym === 'divide' && (+nums[0] === 0 || +nums[1] === 0)) {
                alert("Cannot divide by 0! Now you must start over!")
                clear();
            } else {
                nums[0] = operate(+nums[0], +nums[1], sym)
                screen.textContent = nums[0];
                numsArray = [];
                sym = "";
            }
        }
    })
});