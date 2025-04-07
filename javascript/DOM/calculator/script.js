const operators = document.getElementsByClassName("operator");
const visor = document.getElementById("visor");
const numbers = document.getElementsByClassName("number");
const resultButton = document.getElementById("result-button");
const clearButton = document.getElementById("clear-button");
const deleteButton = document.getElementById("delete-button");

class Operation {
  constructor() {
    this.operations = [];
  }

  readValue = (value) => {
    if(value === 'x') this.operations.push('*');
    else this.operations.push(value);

    visor.innerText = this.operations.join("");
  };

  clear = () => {
    this.operations = [];
    visor.innerText = "0";
  }

  deleteLast = () => {
    if(this.operations.length === 1 || this.operations.length === 0) {
      visor.innerText = '0'
      return;
    }

    this.operations.pop()
    visor.innerText = this.operations.join("");
  }

  execute = () => {
    try {
      const result = eval(this.operations.join(""));
      visor.innerText = result;
      this.operations = [result];
    } catch {
      visor.innerText = "Error";
      this.operations = [];
    }
  };
}

const operation = new Operation();

// Add the event listener in the result and clear button
resultButton.addEventListener("click", () => operation.execute());
clearButton.addEventListener("click", () => operation.clear());
deleteButton.addEventListener("click", () => operation.deleteLast());

// Add the event listeners in the operators
for (let i = 0; i < operators.length; i++) {
  operators.item(i).addEventListener("click", (event) => {
    operation.readValue(event.target.innerText);
  });
}

// Add the event listeners in the numbers
for (let i = 0; i < numbers.length; i++) {
  numbers.item(i).addEventListener("click", (event) => {
    operation.readValue(event.target.innerText);
  });
}
