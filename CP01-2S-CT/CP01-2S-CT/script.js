// script.js
const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".num-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";
let currentOperator = "";
let prevInput = "";

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput.length < 10) {
            currentInput += button.textContent;
            display.value = currentInput;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        prevInput = currentInput;
        currentInput = "";
        currentOperator = button.textContent;
    });
});

equalsButton.addEventListener("click", () => {
    if (currentInput !== "" && prevInput !== "" && currentOperator !== "") {
        const num1 = parseFloat(prevInput);
        const num2 = parseFloat(currentInput);
        let result;

        switch (currentOperator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    display.value = "Error";
                    return;
                }
                break;
        }

        if (result.toString().length <= 10) {
            display.value = result;
            currentInput = result.toString();
            prevInput = "";
            currentOperator = "";
        } else {
            display.value = "Error";
        }
    }
});

clearButton.addEventListener("click", () => {
    currentInput = "";
    currentOperator = "";
    prevInput = "";
    display.value = "";
});
