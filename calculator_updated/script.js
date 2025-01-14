let memory = 0;
let history = [];

// Append value to the display
function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

// Clear the display
function clearResult() {
    document.getElementById('result').value = '';
}

// Delete the last character
function deleteLast() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

// Calculate and update the result
function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        const result = eval(resultField.value);
        history.push(resultField.value + ' = ' + result);
        resultField.value = result;
    } catch {
        resultField.value = 'Error';
    }
}

// Memory functions
function memoryStore() {
    memory = parseFloat(document.getElementById('result').value) || 0;
}

function memoryRecall() {
    document.getElementById('result').value += memory;
}

function memoryClear() {
    memory = 0;
}

// Toggle between light and dark themes
document.getElementById('themeButton').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Unit conversion
function convertUnit() {
    const value = parseFloat(document.getElementById('unitInput').value);
    const unitType = document.getElementById('unitType').value;
    let result;

    switch (unitType) {
        case 'cmToInches':
            result = value / 2.54;
            break;
        case 'inchesToCm':
            result = value * 2.54;
            break;
        case 'kgToLbs':
            result = value * 2.20462;
            break;
        case 'lbsToKg':
            result = value / 2.20462;
            break;
        default:
            result = 'Invalid unit type';
    }

    document.getElementById('unitResult').innerText = `Result: ${result}`;
}

// Show history
document.getElementById('historyButton').addEventListener('click', () => {
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = history.map(item => `<p>${item}</p>`).join('');
});
