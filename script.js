// global variables
const gridContainer = document.getElementById('grid-container');
const EraseBtn = document.getElementById('reset-btn');

//create grid-board
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

//create drawing and drawing rules
function colorCell() {
  // document.getElementsByClassName("grid-item").style.backgroundColor = "black";
  const currentColor = this.style.backgroundColor;

  if (currentColor === 'black') {
    this.style.backgroundColor = 'white';
  } else {
    this.style.backgroundColor = 'black';
  }
}
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
  item.addEventListener('click', colorCell);
});

function resetDrawing() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.backgroundColor = 'white';
  });
}

// button to reset drawing

EraseBtn.addEventListener("click", resetDrawing);


