const mainContainer = document.getElementById("main");
const container = document.getElementById("container");
const button = document.getElementById("button");

let gridSize = 16;

mainContainer.style.height = "100vh";
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.gap = "2rem";
mainContainer.style.justifyContent = "center";
mainContainer.style.alignItems = "center";

const createGrid = () => {
  for (let row = 0; row < gridSize; row++) {
    const div = document.createElement("div");
    div.style.display = "flex";
    container.appendChild(div);
    for (let col = 0; col < gridSize; col++) {
      const childDiv = document.createElement("div");
      childDiv.style.height = "25px";
      childDiv.style.width = "25px";
      if (row === 0) childDiv.style.borderTop = "1px solid black";
      if (col === 0) childDiv.style.borderLeft = "1px solid black";
      childDiv.style.borderRight = "1px solid black";
      childDiv.style.borderBottom = "1px solid black";
      div.appendChild(childDiv);
      childDiv.addEventListener("mouseover", () => {
        childDiv.style.backgroundColor = "black";
        childDiv.style.cursor = "pointer";
      });
    }
  }
};

createGrid();

const deleteChild = () => {
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
};

button.addEventListener("click", () => {
  const grid = prompt("Choose GRID SIZE");
  gridSize = Number(grid);
  deleteChild();
  createGrid();
});
