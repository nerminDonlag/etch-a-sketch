let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const blankSquare = '#eee';
let coloredSquare = document.querySelector('#color-picker').value;

// density is the number of squares in a row / column
function createGrid(density) {
  const gridContainer = document.querySelector('.grid-container');
  const squareDimension = 500 / density;
  const gridRows = [];
  const gridSquares = [];
  for (let i = 0; i < density; i++) {
    gridRows[i] = document.createElement('div');
    gridRows[i].classList.add('grid-row');
    gridContainer.appendChild(gridRows[i]);
    gridSquares[i] = [];
    for (let j = 0; j < density; j++) {
      gridSquares[i][j] = document.createElement('div');
      gridSquares[i][j].classList.add('grid-square');
      gridRows[i].appendChild(gridSquares[i][j]);
      gridSquares[i][j].style.width = squareDimension;
      gridSquares[i][j].style.height = squareDimension;
      gridSquares[i][j].style.backgroundColor = blankSquare;
      gridSquares[i][j].addEventListener('mouseover', () => {
        if (mouseDown) { gridSquares[i][j].style.backgroundColor = coloredSquare; }
      });
    }
  }
}

// reset grid
const resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', () => {
  resetGrid();
});

function resetGrid() {
  let gridSquares = document.getElementsByClassName('grid-square');
  for (item of gridSquares) { item.style.backgroundColor = blankSquare; }
}

// on document load:
createGrid(50);

// set square density
let sliderValue = document.querySelector('#slider').value;
const slider = document.querySelector('#slider');
slider.addEventListener('change', () => {
  sliderValue = slider.value;
  const element = document.querySelector(".grid-container");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  createGrid(sliderValue);
});

// choose color
const colorPicker = document.querySelector('#color-picker');
colorPicker.addEventListener('change', () => {
  coloredSquare = colorPicker.value;
});