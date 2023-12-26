// global variables
const gridContainer = document.getElementById('grid-container');

function createGrid(gridSize) {

  for (r = 0; r < gridSize; r++){
    let row = document.createElement("div");
    gridContainer.appendChild(row).className = "grid-item";
    for(c = 1; c < gridSize; c++){
      let column = document.createElement("div");
      gridContainer.appendChild(column).className = "grid-item";
    };
  };
}

createGrid(16);

function colorCell() {

  document.getElementsByClassName("grid-item").style.backgroundColor = "black";
}


