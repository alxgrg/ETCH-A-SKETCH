let grid = document.getElementById('grid');
let button = document.getElementById('new-sketch');

buildGrid();

let cells = document.getElementsByClassName('cell');
cells = [...cells];

cells.map((cell) => {
  cell.addEventListener('mouseover', () => {
    cell.classList.add('sketched');
  });
});

function buildGrid(rows = 16, cols = 16) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = '';
      grid.appendChild(cell);
    }
  }
}

function clearGrid() {
  cells.forEach((cell) => {
    cell.className = 'cell';
  });
}

button.addEventListener('click', () => {
  clearGrid();
});
