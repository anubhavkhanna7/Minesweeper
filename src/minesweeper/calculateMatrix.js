function createdGridWithBombs(totalTiles, bombCount) {
  let grid = Array(totalTiles).fill(0);
  while (bombCount > 0) {
    let bombTile = Math.floor(Math.random() * (totalTiles));
    if(grid[bombTile] !== -1) {
      grid[bombTile] = -1;
      bombCount--;
    }
  }
  return grid;
}

function calculateMatrix(size = 9, dificulty = 'EASY', customBombs = 0) {
  let totalTiles = size * size;
  let countOfBombs;
  switch (dificulty) {
    case 'NOVICE':
      countOfBombs = (totalTiles*10)/100;
      break;
    case 'EASY':
      countOfBombs = (totalTiles*15)/100;
      break;
    case 'MEDIUM':
      countOfBombs = (totalTiles*20)/100;
      break;
    case 'HARD':
      countOfBombs = (totalTiles*25)/100;
      break;
    case 'EXTREME':
      countOfBombs = (totalTiles*30)/100;
      break;
    case 'INSANE':
      countOfBombs = (totalTiles*35)/100;
      break;
    case 'CUSTOM':
      countOfBombs = customBombs;
      break;
  }
  return createdGridWithBombs(totalTiles, countOfBombs);
}