let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid(density) {
  const gridContainer = document.getElementById('grid-container');
  const currentPixelDensity = density; //25, 50, 100
  const gridDimension = currentPixelDensity;
  const boxDimension = (500 / gridDimension);
  const gridArrayDiv = [];
  const gridArrayElements = [];

  gridContainer.style.width = `${boxDimension * gridDimension}px`;
  gridContainer.style.height = `${boxDimension * gridDimension}px`;


  for (let i = 0; i < gridDimension; i++) {
    gridArrayDiv[i] = document.createElement('div');
    gridContainer.appendChild(gridArrayDiv[i]);
    gridArrayElements[i] = [];
    for (let j = 0; j < gridDimension; j++) {
      gridArrayElements[i][j] = document.createElement('div');
      gridArrayDiv[i].appendChild(gridArrayElements[i][j]);
      gridArrayElements[i][j].classList.add('innerDiv');
      gridArrayElements[i][j].style.width = `${boxDimension}px`;
      gridArrayElements[i][j].style.height = `${boxDimension}px`;
      gridArrayElements[i][j].style.backgroundColor = '#ddd';
      gridArrayElements[i][j].addEventListener('mouseover', () => {
        if (mouseDown) { gridArrayElements[i][j].style.backgroundColor = 'black'; }
      })
    }
  }
}

// on document load
createGrid(50);

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', () => {
  resetGrid();
});

function resetGrid() {
  let innerDivs = document.getElementsByClassName('innerDiv');
  for (item of innerDivs) { item.style.backgroundColor = '#ddd'; }
}

const densityButton25px = document.getElementById('25px-density');
const densityButton50px = document.getElementById('50px-density');
const densityButton100px = document.getElementById('100px-density');

densityButton25px.addEventListener('click', () => {
  document.getElementById('grid-container').innerHTML = '';
  createGrid(25);
});

densityButton50px.addEventListener('click', () => {
  document.getElementById('grid-container').innerHTML = '';
  createGrid(50);
});

densityButton100px.addEventListener('click', () => {
  document.getElementById('grid-container').innerHTML = '';
  createGrid(100);
});