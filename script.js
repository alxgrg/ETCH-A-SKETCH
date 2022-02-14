let grid = document.getElementById('grid');
let clearButton = document.getElementById('new-sketch');
let gridSizeForm = document.getElementById('grid-form');

buildGrid();

let cells = document.getElementsByClassName('cell');
initCells();

mapListeners();

function initCells() {
  cells = document.getElementsByClassName('cell');
  cells = [...cells];
}

function mapListeners() {
  cells.map((cell) => {
    cell.addEventListener('mouseover', () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      cell.style.backgroundColor = '#' + randomColor;
    });
  });
}

function buildGrid(size = 16) {
  grid.innerHTML = '';
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

clearButton.addEventListener('click', () => {
  handleClearGrid();
});

gridSizeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let size = event.target.elements['size'].value;
  handleGridSizeChange(size);
  initCells();
  mapListeners();
});
