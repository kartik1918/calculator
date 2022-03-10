const screen = document.querySelector('.screen');
const btns = Array.from(document.querySelectorAll('button'));
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const equalsBtn = document.getElementById('equals');
const addBtn = document.getElementById('add');
const numBtns = document.querySelectorAll('.btn')
const pointBtn = document.querySelector('.pointer');
const allClearBtn = document.getElementById('all-clear');
const backspaceBtn = document.getElementById('backspace');
let num = [], temp = [], firstNumber, secondNumber, opera = '', ops = [], result;

const numInput = function() {
        numBtns.forEach(function(numBtn) {
        numBtn.addEventListener('click', function() {
            num.push(Number(numBtn.textContent));
            temp.push(Number(numBtn.textContent));
            screen.innerHTML += `<p class="display-text">${parseFloat(numBtn.textContent)}</p>`
        })
    })
}

pointBtn.addEventListener('click', function() {
    screen.innerHTML += `<p class="display-text">${pointBtn.textContent}</p>`;
    num.push(('.  ').trim());
})

numInput();

function convertToNumber(num) {
    let operand = Number(num.join(''));
    ops.push(operand);
    return operand;
}

allClearBtn.addEventListener('click', clearScreen);

function clearScreen() {
    screen.innerHTML = '';
    ops = [];
    num = [];
}

backspaceBtn.addEventListener('click', deleteDigit);

function deleteDigit() {
    temp.pop();
    num.pop();
    const dataToShow = temp.join('');
    screen.innerHTML = `<p class="display-text">${dataToShow}</p>`;
}

const index = function(ops, btn) {
    const idx = ops.findIndex(function(item) {
        return item === '+';
    })
    opera = btn.textContent;
    ops.splice(idx, 1, btn.textContent);
}


function callOperation(sign, btn) {
    if (ops.includes(sign)) {
        opera = sign;
        secondNumber = convertToNumber(num);
        result = operate(firstNumber, secondNumber, opera)
        firstNumber = result;
        screen.innerHTML = `<p class="display-text">${(result)}</p>`;
        ops = [];
        num = [];
        ops.push(result);
        ops.push(sign);
        screen.innerHTML += `<p class="display-text">${btn.textContent}</p>`;
    } else {
        firstNumber = convertToNumber(num);
        num = [];
        opera = sign;
        ops.push(opera);
        temp.push(opera);
    }
}

addBtn.addEventListener('click', function() {
    screen.innerHTML += `<p class="display-text">${addBtn.textContent}</p>`;
    if (ops.includes(opera)) {
        callOperation(opera, addBtn);
        index(ops, addBtn);
    } else {
        callOperation('+', addBtn);
    }
})

subtractBtn.addEventListener('click', function() {
    screen.innerHTML += `<p class="display-text">${subtractBtn.textContent}</p>`;
    if (ops.includes(opera)) {
        callOperation(opera, subtractBtn);
        index(ops, subtractBtn);
    } else {
        callOperation('−', subtractBtn);
    }
})

divideBtn.addEventListener('click', function() {
    screen.innerHTML += `<p class="display-text">${divideBtn.textContent}</p>`;
    if (ops.includes(opera)) {
        callOperation(opera, divideBtn);
        index(ops, divideBtn);
    } else {
        callOperation('÷', divideBtn);
    }
})

multiplyBtn.addEventListener('click', function() {
    screen.innerHTML += `<p class="display-text">${multiplyBtn.textContent}</p>`;
    if (ops.includes(opera)) {
        callOperation(opera, multiplyBtn);
        index(ops, multiplyBtn);
    } else {
        callOperation('x', multiplyBtn);
    }
})

equalsBtn.addEventListener('click', function() {
    secondNumber = convertToNumber(num);
    result = operate(firstNumber, secondNumber, opera);
    screen.innerHTML = `<p class="display-text">${(result)}</p>`;
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (a === 1 && b === 0) {
        alert('GOTCHA! :D');
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+': return add(a, b);

        case '−': return subtract(a, b);

        case '÷': return divide(a, b);

        case 'x': return multiply(a, b);

        default: console.log('opera not defined');
        break;
    }
}