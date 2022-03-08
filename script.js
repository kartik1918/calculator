const screen = document.querySelector('.screen');
const btns = Array.from(document.querySelectorAll('button'));
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const equalsBtn = document.getElementById('equals');
const addBtn = document.getElementById('add');
const numBtns = document.querySelectorAll('.btn')
let num;

numBtns.forEach(function(numBtn) {
    numBtn.addEventListener('click', function() {
        num = Number(numBtn.textContent)
        screen.innerHTML += `<p class="display-text">${Number(numBtn.textContent)}</p>`
    })
})

addBtn.addEventListener('click', function(e) {
    console.log(addBtn.textContent)
    screen.innerHTML += `<p class="display-text">${addBtn.textContent}</p>`
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(a, b, operand) {
    switch (operand) {
        case '+': add(a, b);
        break;

        case '-': subtract(a, b);
        break;

        case '÷': divide(a, b);
        break;

        case 'x': multiply(a, b);
        break;
    }
}