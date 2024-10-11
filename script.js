const squares = document.querySelectorAll('.color-square');
let selectedColor = 'black';
let memorycolor = 'black';
let pensileSize;
let squareCounter = 0;
const maxSquares = 15;

squares.forEach(square => {
  square.addEventListener('click', () => {
    selectedColor = window.getComputedStyle(square).backgroundColor;
    memorycolor = selectedColor;
    document.getElementById("bottom-square").style.backgroundColor = selectedColor;
  });
});

document.getElementById("square-color-input").addEventListener("input", function() {
    selectedColor = document.getElementById("square-color-input").value;
    memorycolor = document.getElementById("square-color-input").value;
    document.getElementById("bottom-square").style.backgroundColor = selectedColor;
});

const canvas = document.getElementById('canvas');
const grid = document.getElementById('grid');
const ctx = canvas.getContext('2d');
const ctxz = grid.getContext('2d');
let size = 32;
pensileSize = 1;

// Set grid dimensions (odd number to ensure a center cell)
const gridSize = 15; // You can adjust this to any odd number
canvas.width = grid.width = gridSize * size;
canvas.height = grid.height = gridSize * size;

// Draw grid
for (let x = 0; x <= grid.width; x += size) {
  ctxz.moveTo(x, 0);
  ctxz.lineTo(x, grid.height);
}

for (let y = 0; y <= grid.height; y += size) {
  ctxz.moveTo(0, y);
  ctxz.lineTo(grid.width, y);
}

ctxz.strokeStyle = "#ddd";
ctxz.stroke();

// Highlight the center cell
const centerX = Math.floor(gridSize / 2) * size;
const centerY = Math.floor(gridSize / 2) * size;
ctxz.strokeStyle = "#000";
ctxz.strokeRect(centerX, centerY, size, size);

canvas.addEventListener('click', function(e) {
  let x = Math.floor(e.offsetX / size) * size;
  let y = Math.floor(e.offsetY / size) * size;
  ctx.fillStyle = selectedColor;
  ctx.fillRect(x, y, size, size);
    if (pensileSize==2){
        ctx.fillRect(x+size, y, size, size);
        ctx.fillRect(x, y+size, size, size);
        ctx.fillRect(x, y-size, size, size);
        ctx.fillRect(x-size, y, size, size);
    }
});

const addSquareButton = document.getElementById('add-square-button');
const squareColorInput = document.getElementById('square-color-input');
const container = document.getElementById('sidebar');

addSquareButton.addEventListener('click', () => {
  if (squareCounter < maxSquares) { // Check if the limit is not reached
    const color = squareColorInput.value;
    const square = createSquare(color, 'color-square');
    square.addEventListener('click', () => {
      selectedColor = window.getComputedStyle(square).backgroundColor;
      document.getElementById("bottom-square").style.backgroundColor = selectedColor;
    });
    container.appendChild(square);
    squareCounter++; // Increment the counter
    selectedColor = color;
    document.getElementById("bottom-square").style.backgroundColor = selectedColor;
  } else {
    alert('numero massimo di colori raggiunto!');
  }
});

function createSquare(color, className) {
  const square = document.createElement('div');
  square.style.width = '25px';
  square.style.height = '25px';
  square.style.backgroundColor = color;
  square.style.margin = '2px';
  square.style.border = '1px solid black';
  square.style.borderRadius = '5px';
  square.classList.add(className);
  return square;
}

function gomma(){
    selectedColor = 'white';
    return selectedColor;
}

function matita(){
    selectedColor = memorycolor;
    return selectedColor;
}

function cancella(){
    ctx.fillStyle = "white";

    // Get the canvas width and height
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    // Color all the squares of the canvas white
    for (var x = 0; x < canvasWidth; x += 16) {
        for (var y = 0; y < canvasHeight; y += 16) {
        ctx.fillRect(x, y, 16, 16);
        }
    }
    ctx.fillStyle = selectedColor;
}

function saveDrawing() {
    html2canvas(document.getElementById('canvas')).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'disegninobbello0.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Get the slider element
var slider = document.getElementById("slider");

// Get the slider value display element
var sliderValue = document.getElementById("slider-value");

// Variable to store the slider value
var sliderVariable = 1;

// Add an input event listener to the slider
slider.addEventListener("input", function() {
  // Update the slider value display
  sliderValue.textContent = slider.value;

  // Update the slider variable in real-time
  sliderVariable = parseFloat(slider.value);
  pensileSize = sliderVariable
});
