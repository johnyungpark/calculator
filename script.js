const display = document.querySelector('.display');
const zero = document.querySelector('button.zero');
const one = document.querySelector('button.one');
const two = document.querySelector('button.two');
const three = document.querySelector('button.three');
const four = document.querySelector('button.four');
const five = document.querySelector('button.five');
const six = document.querySelector('button.six');
const seven = document.querySelector('button.seven');
const eight = document.querySelector('button.eight');
const nine = document.querySelector('button.nine');
const plus = document.querySelector('button.plus');
const subt = document.querySelector('button.subt');
const mult = document.querySelector('button.mult');
const divi = document.querySelector('button.divi');
const clear = document.querySelector('button.clear');
const equal = document.querySelector('button.equal');

zero.addEventListener('click', () => { (display.textContent += 0) });
one.addEventListener('click', () => { (display.textContent += 1) });
two.addEventListener('click', () => { (display.textContent += 2) });
three.addEventListener('click', () => { (display.textContent += 3) });
four.addEventListener('click', () => { (display.textContent += 4) });
five.addEventListener('click', () => { (display.textContent += 5) });
six.addEventListener('click', () => { (display.textContent += 6) });
seven.addEventListener('click', () => { (display.textContent += 7) });
eight.addEventListener('click', () => { (display.textContent += 8) });
nine.addEventListener('click', () => { (display.textContent += 9) });
plus.addEventListener('click', () => { (display.textContent += "+") });
subt.addEventListener('click', () => { (display.textContent += "-")});
mult.addEventListener('click', () => { (display.textContent += "*")});
divi.addEventListener('click', () => { (display.textContent += "/")});

const erase = document.createElement('br');
clear.addEventListener('click', () => { (display.innerText = '') + (display.insertAdjacentHTML('beforeend', '<br>'))});

equal.addEventListener('click', function () {
    if (display.innerText.indexOf("+") != -1) {
        let final = display.innerText.split('+');
        let total = 0;
        for (let num of final) {
            total += parseInt(num);
        }
        display.innerText = total;
    } else if (display.innerText.indexOf("-") != -1) {
        let final = display.innerText.split('-');
        let total = final[0];
        for (let i = 1; i < final.length; i++) {
            total -= final[i];
        }
        display.innerText = total;
    } else if (display.innerText.indexOf("*") != -1) {
        let final = display.innerText.split('*');
        let total = final[0];
        for (let i = 1; i < final.length; i++) {
            total *= final[i];
        }
        display.innerText = total;
    } else if (display.innerText.indexOf("/") != -1) {
        let final = display.innerText.split('/');
        let total = final[0];
        for (let i = 1; i < final.length; i++) {
            total /= final[i];
        }
        let final2 = (total === Infinity) ? (display.innerText = "Error!") : (display.innerText = total);
    }
});

function subtract(array) {
    let total = array[0];
    for (let i = 1; i < array.length; i++) {
        total -= array[i];
    }
    alert(total);
}

function multiply(array) {
    let total = array[0];
    for (let i = 1; i < array.length; i++) {
        total *= array[i];
    }
    alert(total);
}

function divide(array) {
    let total = array[0];
    for (let i = 1; i < array.length; i++) {
        total /= array[i];
    }
    alert(total);
}

function operate() {
    let a = +prompt("enter first number", "");
    let b = +prompt("enter second number", "");
    let c = prompt("what operator?", "+, -, *, /");
    if (c === "+") {
        add([a,b]);
    } else if (c === "-") {
        subtract([a,b]);
    } else if (c === "*") {
        multiply([a,b]);
    } else if (c === "/") {
        divide([a,b]);
    }
}