let grid = document.getElementById('grid');
let clearButton = document.getElementById('new-sketch');
let gridSize = document.getElementById('size');
let pen = document.querySelector('.pen');
let cellsUni = document.querySelector('.cells-uni');
let eraser = document.querySelector('.eraser');
let randomColor = 'random';
let cellColor = 'black';
let isSketching = false;

buildGrid();

let cells = document.getElementsByClassName('cell');
initCells();

mapListeners();

function initCells() {
  cells = document.getElementsByClassName('cell');
  cells = [...cells];
}

// function mapListeners() {
//   cells.map((cell) => {
//     cell.addEventListener('mouseover', () => {
//       if (cellColor === 'random') {
//         cell.style.backgroundColor =
//           '#' + Math.floor(Math.random() * 16777215).toString(16);
//       } else {
//         cell.style.backgroundColor = cellColor;
//       }
//     });
//   });
// }

function mapListeners() {
  cells.map((cell) => {
    cell.addEventListener('mousedown', () => {
      isSketching = true;
      if (cellColor === 'random') {
        cell.style.backgroundColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);
      } else {
        cell.style.backgroundColor = cellColor;
      }
    });
    cell.addEventListener('mouseup', () => {
      isSketching = false;
    });
    cell.addEventListener('mouseover', () => {
      if (isSketching) {
        if (cellColor === 'random') {
          cell.style.backgroundColor =
            '#' + Math.floor(Math.random() * 16777215).toString(16);
        } else {
          cell.style.backgroundColor = cellColor;
        }
      }
    });
  });
}

function buildGrid(size = 85) {
  grid.innerHTML = '';
  size = 101 - size;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = '';
      grid.appendChild(cell);
    }
  }
}

function handleGridSizeChange(size) {
  buildGrid(size);
}

function handleClearGrid() {
  cells.forEach((cell) => {
    cell.className = 'cell';
    cell.style = '';
  });
}

function handleColorChange(color) {
  cellColor = color;
}

clearButton.addEventListener('click', handleClearGrid);

gridSize.addEventListener('input', () => {
  let size = gridSize.value;
  handleGridSizeChange(size);
  initCells();
  mapListeners();
});

pen.addEventListener('click', () => {
  handleColorChange('black');
});

cellsUni.addEventListener('click', () => {
  handleColorChange(randomColor);
});

eraser.addEventListener('click', () => {
  handleColorChange('white');
});
