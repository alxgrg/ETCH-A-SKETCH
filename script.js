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

function buildGrid(rows = 16, cols = 16) {
  grid.innerHTML = '';
  for (let i = 0; i < cols; i++) {
    let col = document.createElement('div');
    for (let j = 0; j < rows; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = '';
      col.appendChild(cell);
    }
    grid.appendChild(col);
  }
}

function handleGridSizeChange(rows, cols) {
  buildGrid(rows, cols);
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
  let rows = event.target.elements['rows'].value;
  let cols = event.target.elements['cols'].value;
  handleGridSizeChange(rows, cols);
  initCells();
  mapListeners();
});
