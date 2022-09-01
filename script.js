const display = document.querySelector('.display');
let buttons = Array.from(document.getElementsByClassName('button'));
const equal = document.querySelector('button.equal');

window.addEventListener('keydown', keyboardInput);

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'Clear':
                display.innerText = '';
                break;
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                equate();
                break;
            case '.':
                if (display.textContent.includes('.')) {
                    return;
                } else display.innerText += ".";
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        display.innerText += e.key;
    } else if (e.key === '.') {
        if (display.textContent.includes('.')) {
            return;
        } else display.innerText += ".";
    } else if (e.key === 'Backspace') {
        display.innerText = display.innerText.slice(0, -1);
    } else if (e.key === 'Escape') {
        display.innerText = '';
    } else if (e.key === '+') {
        display.innerText += '+';
    } else if (e.key === '-') {
        display.innerText += '-';
    } else if (e.key === '*') {
        display.innerText += '*';
    } else if (e.key === '/') {
        display.innerText += '/';
    } else if (e.key === 'Enter' || e.key === '=') equate ();
};

// equal.addEventListener('click', equate);

function equate() {
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
        display.innerText = Math.round(total * 100)/100;
    } else if (display.innerText.indexOf("/") != -1) {
        let final = display.innerText.split('/');
        let total = final[0];
        for (let i = 1; i < final.length; i++) {
            total /= final[i];
        }
        let final2 = (total === Infinity) ? (display.innerText = "Error!") : (display.innerText = Math.round(total * 100)/100);
    }
};
