let userInput;

const container = document.querySelector(".container");
const genBtn = document.querySelector(".genBtn");

function createGrid(amountOfCells) {
  for (x = 1; x <= amountOfCells; x++) {
    const row = document.createElement("div");
    row.classList.add(`row${x}`);
    for (let i = 0; i < amountOfCells; i++) {
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

genBtn.addEventListener("click", () => {
  userInput = parseInt(prompt("Number of squares per side for the new grid."));
  console.log(userInput);

  while (!Number.isInteger(userInput)) {
    userInput = parseInt(
      prompt("Number of squares per side for the new grid.")
    );
    console.log(userInput);
  }
});

createGrid(userInput);
