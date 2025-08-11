class Calculator {
  constructor(displayCurrent, displayPrevious) {
    this.displayCurrent = displayCurrent;
    this.displayPrevious = displayPrevious;
    this.clear();
  }

  clear() {
    this.currentOperand = "0";
    this.previousOperand = "";
    this.operation = undefined;
    this.resetScreen = false;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    if (this.currentOperand === "") {
      this.currentOperand = "0";
    }
  }

  appendNumber(number) {
    if (this.resetScreen) {
      this.currentOperand = number;
      this.resetScreen = false;
      return;
    }

    if (number === "." && this.currentOperand.includes(".")) return;

    if (this.currentOperand === "0" && number !== ".") {
      this.currentOperand = number;
    } else {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.calculate();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calculate() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "×":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = computation.toString();
    this.operation = undefined;
    this.previousOperand = "";
    this.resetScreen = true;
  }

  updateDisplay() {
    this.displayCurrent.innerText = this.currentOperand;
    if (this.operation != null) {
      this.displayPrevious.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.displayPrevious.innerText = "";
    }
  }
}

const displayCurrent = document.querySelector(".current-operation");
const displayPrevious = document.querySelector(".previous-operation");
const buttons = document.querySelectorAll(".button");

const calculator = new Calculator(displayCurrent, displayPrevious);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      if (button.dataset.number) {
        calculator.appendNumber(button.dataset.number);
      } else if (button.dataset.action === "decimal") {
        calculator.appendNumber(".");
      }
      calculator.updateDisplay();
    }

    if (
      button.classList.contains("operator") &&
      !button.classList.contains("equals")
    ) {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    }

    if (button.classList.contains("equals")) {
      calculator.calculate();
      calculator.updateDisplay();
    }

    if (button.classList.contains("function")) {
      if (button.dataset.action === "clear") {
        calculator.clear();
        calculator.updateDisplay();
      } else if (button.dataset.action === "sign") {
        // Toggle sign functionality
        if (calculator.currentOperand !== "0") {
          calculator.currentOperand =
            parseFloat(calculator.currentOperand) * -1;
          calculator.updateDisplay();
        }
      } else if (button.dataset.action === "percent") {
        // Percentage functionality
        calculator.currentOperand = (
          parseFloat(calculator.currentOperand) / 100
        ).toString();
        calculator.updateDisplay();
      }
    }
  });
});
