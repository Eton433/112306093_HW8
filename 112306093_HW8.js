document.getElementById('calculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const number1 = parseFloat(document.getElementById('number1').value);
    const operator = document.getElementById('operator').value;
    const number2 = parseFloat(document.getElementById('number2').value);

    // Validate inputs
    if (isNaN(number1) || isNaN(number2)) {
        alert('Please enter valid numbers.');
        return;
    }

    if (operator === '/' && number2 === 0) {
        alert('Division by zero is not allowed.');
        return;
    }

    // Perform the calculation
    let result;
    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            alert('Invalid operator.');
            return;
    }

    // Display the result
    document.getElementById('result').textContent = result.toFixed(2);
});

// Calculation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
