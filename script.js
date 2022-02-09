const gridContainer = document.getElementById('grid-container');
const gridDimension = 16 //a means grid dimension axa
const boxDimension = 20 //a means box dimension axa
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
  }
}