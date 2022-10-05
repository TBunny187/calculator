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
    if(symbol === "+") {
        return add(num1, num2);
    } else if(symbol === "-") {
        return subtract(num1, num2);
    } else if(symbol === "*") {
        return multiply(num1, num2);
    } else if(symbol === "/") {
        return divide(num1, num2);
    }
}

const nums = [];
const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        nums.push(button.id)
        screen.innerHTML = nums.join('');
    })
})