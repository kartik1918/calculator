const screen = document.querySelector('.screen');
const btns = Array.from(document.querySelectorAll('button'));
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const equalsBtn = document.getElementById('equals');
const addBtn = document.getElementById('add');
const numBtns = document.querySelectorAll('.btn')
let num = [], firstNumber, secondNumber, opera = '';

const numInput = function() {
        numBtns.forEach(function(numBtn) {
        numBtn.addEventListener('click', function() {
            num.push(Number(numBtn.textContent));
            screen.innerHTML += `<p class="display-text">${Number(numBtn.textContent)}</p>`
            console.log(num);
        })
    })
}

numInput();

function convertToNumber(num) {
    let operand = Number(num.join(''));
    console.log(operand);
    return operand;
}

// const addition = function() {
//         addBtn.addEventListener('click', function() {
//         screen.innerHTML += `<p class="display-text">${addBtn.textContent}</p>`;
//         firstNumber = convertToNumber(num);
//         num = [];
//         opera = addBtn.textContent;
//         return opera;
//     })
// }

addBtn.addEventListener('click', function() {
    screen.innerHTML += `<p class="display-text">${addBtn.textContent}</p>`;
    firstNumber = convertToNumber(num);
    num = [];
    opera = addBtn.textContent;
    console.log(opera);
})

subtractBtn.addEventListener('click', function() {
    screen.innerHTML += `<p class="display-text">${subtractBtn.textContent}</p>`;
})

divideBtn.addEventListener('click', function() {
    screen.innerHTML += `<p class="display-text">${divideBtn.textContent}</p>`;
})

multiplyBtn.addEventListener('click', function() {
    screen.innerHTML += `<p class="display-text">${multiplyBtn.textContent}</p>`;
})

equalsBtn.addEventListener('click', function() {
    secondNumber = convertToNumber(num);
    console.log(firstNumber, secondNumber);
    console.log(opera);
    console.log(operate(firstNumber, secondNumber, opera));
});

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

function operate(a, b, operator) {
    switch (operator) {
        case '+': return add(a, b);

        case '-': return subtract(a, b);

        case '÷': return divide(a, b);

        case 'x': return multiply(a, b);

        default: console.log('opera not defined');
        break;
    }
}