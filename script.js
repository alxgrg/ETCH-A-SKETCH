let grid = document.getElementById('grid');

function buildGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = '';
      grid.appendChild(cell);
    }
  }
}

buildGrid();
