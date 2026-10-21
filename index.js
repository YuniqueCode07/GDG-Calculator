let calculation = '';
let resultDisplayed = false;

function updateDisplay() {
    document.getElementById('display').textContent = calculation || '0';
}

function updateCalculation(value) {
    if (calculation === '' && [' + ', ' - ', ' X ', ' / '].includes(value)) {
        return;
    }

    if (resultDisplayed) {
        if ([' + ', ' - ', ' X ', ' / '].includes(value)) {
            resultDisplayed = false;
        } else {
            calculation = '';
            resultDisplayed = false;
        }
    }

    if (
        [' + ', ' - ', ' X ', ' / '].includes(value) &&
        ['+', '-', 'X', '/'].includes(calculation.trimEnd().slice(-1))
    ) {
        return;
    }

    calculation += value;
    console.log(calculation);
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(calculation.replaceAll('X', '*'));

        if (!Number.isFinite(result)) {
            console.log('Math Error');
            calculation = '';
            resultDisplayed = false;
            document.getElementById('display').textContent = 'Math Error';
            return;
        }

        result = Number(result.toFixed(10));

        console.log(calculation + ' = ' + result);
        calculation = String(result);
        resultDisplayed = true;
        updateDisplay();

    } catch (error) {
        console.log('Syntax Error');
        calculation = '';
        resultDisplayed = false;
        document.getElementById('display').textContent = 'Syntax Error';
    }
}

document.addEventListener('keydown', function(event) {
    let key = event.key;

    if (key >= '0' && key <= '9' || key === '.') {
        updateCalculation(key);
    } else if (key === '+') {
        updateCalculation(' + ');
    } else if (key === '-') {
        updateCalculation(' - ');
    } else if (key === '/') {
        updateCalculation(' / ');
    } else if (key === '*' || key === 'x' || key === 'X') {
        updateCalculation(' X ');
    } else if (key === '=' || key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLastCharacter();
    } else if (key === 'Escape') {
        clearCalculation();
    } else if (key === '(') {
        updateCalculation(' ( ');
    } else if (key === ')') {
        updateCalculation(' ) ');
    }
});

function deleteLastCharacter() {
    calculation = calculation.trimEnd().slice(0, -1).trimEnd();
    console.log(calculation);
    resultDisplayed = false;
    updateDisplay();
}

function clearCalculation() {
    calculation = '';
    console.log('AC');
    resultDisplayed = false;
    updateDisplay();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    let button = document.getElementById('theme-toggle');

    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '🌙';
    } else {
        button.textContent = '☀️';
    }
}