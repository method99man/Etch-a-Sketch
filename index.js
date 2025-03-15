let userInput;

const container = document.querySelector(".container");
const genBtn = document.querySelector(".genBtn");

function createGrid(amountOfCells) {
  for (x = 1; x <= amountOfCells; x++) {
    const row = document.createElement("div");
    row.classList.add(`row${x}`);
    for (let i = 1; i <= amountOfCells; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("click", () => {
        square.classList.toggle("squareChangeColor");
      });
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function deleteGrid() {
  container.querySelectorAll(".square").forEach((s) => s.remove());
}

genBtn.addEventListener("click", () => {
  userInput = Number(
    prompt("Number of squares per side for the new grid. (Max 100)")
  );

  while (!Number.isInteger(userInput) || userInput >= 100) {
    userInput = Number(
      prompt("Number of squares per side for the new grid.(Max 100)")
    );
  }

  deleteGrid();
  createGrid(userInput);
});

// createGrid(32);
