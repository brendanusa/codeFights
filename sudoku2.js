function sudoku2(grid) {

  let usedValues = {};
  let row = 0;

  // check for repeat chars in each:

  // row
  for (row; row < grid.length; row++) {
    usedValues = {};
    for (var col = 0; col < grid.length; col++) {
      if (grid[row][col] !== '.' && usedValues[grid[row][col]]) {
        return false;
      }
      usedValues[grid[row][col]] = 1;
    }
  }

  // column
  for (var i = 0; i < grid.length; i++) {
    usedValues = {};
    row = 0;
    for (row; row < grid.length; row++) {
      if (grid[row][i] !== '.' && usedValues[grid[row][i]]) {
        return false;
      }
      usedValues[grid[row][i]] = 1;
    }
  }

  // 3x3 grid
  for (var j = 0; j < 9; j += 3) {
    for (var k = 0; k < 9; k += 3) {
      usedValues = {};
      for (var l = 0; l < 3; l++) {
        for (var m = 0; m < 3; m++) {
          if (grid[j + l][k + m] !== '.' && usedValues[grid[j + l][k + m]]) {
            return false;
          }
          usedValues[grid[j + l][k + m]] = 1;
        }
      }
    }
  }

  return true;

}

grid = [["7",".",".",".","4",".",".",".","."], 
        [".",".",".","8","6","5",".",".","."], 
        [".","1",".","2",".",".",".",".","."], 
        [".",".",".",".",".","9",".",".","."], 
        [".",".",".",".","5",".","5",".","."], 
        [".",".",".",".",".",".",".",".","."], 
        [".",".",".",".",".",".","2",".","."], 
        [".",".",".",".",".",".",".",".","."], 
        [".",".",".",".",".",".",".",".","."]]

console.log(sudoku2(grid));