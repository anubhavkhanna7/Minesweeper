function createdGridWithMines(totalTiles, mineCount) {
  let grid = Array(totalTiles).fill(0);
  while (mineCount > 0) {
    let mineTile = Math.floor(Math.random() * (totalTiles));
    if(grid[mineTile] !== -1) {
      grid[mineTile] = -1;
      mineCount--;
    }
  }
  return grid;
}

function calculateMatrix(size = 9, dificulty = 'EASY', customMines = 0) {
  let totalTiles = size * size;
  let countOfMines;
  switch (dificulty) {
    case 'NOVICE':
      countOfMines = (totalTiles*10)/100;
      break;
    case 'EASY':
      countOfMines = (totalTiles*15)/100;
      break;
    case 'MEDIUM':
      countOfMines = (totalTiles*20)/100;
      break;
    case 'HARD':
      countOfMines = (totalTiles*25)/100;
      break;
    case 'EXTREME':
      countOfMines = (totalTiles*30)/100;
      break;
    case 'INSANE':
      countOfMines = (totalTiles*35)/100;
      break;
    case 'CUSTOM':
      countOfMines = customMines;
      break;
  }
  return createdGridWithMines(totalTiles, countOfMines);
}