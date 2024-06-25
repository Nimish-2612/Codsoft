const calculateResultButton = document.getElementById("equal-btn");
const display = document.getElementById("display");
const inputButtonElements = document.querySelectorAll(".input-btn");
const clearButton = document.getElementById("clear-btn");

function selectOperand(event) {
  const selectedField = event.target.value;
  display.textContent += selectedField;

  if (display.textContent.length >= 10) {
    alert("Maximum 9 characters can be displayed at a time");
    display.textContent = display.textContent.substring(0, 9);
  }
}

function calculate() {
  display.textContent = eval(display.textContent);
}

function clearDisplay() {
  display.textContent = "";
}

for (const button of inputButtonElements)
  button.addEventListener("click", selectOperand);

calculateResultButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clearDisplay);
