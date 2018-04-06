function countClouds(skyMap) {

  // start with 0 clouds
  let clouds = 0;

  // move through grid, if '1' is found, change to '0'
  for (let i = 0; i < skyMap.length; i++) {
    for (let j = 0; j < skyMap[0].length; j++) {
      if (skyMap[i][j] === '1') {
        clouds++;
        eraseCloud(i, j);
      }
    }
  }

  // check cells in all directions (up, down, L, R)
  function eraseCloud(x, y) {
    if (x >= 0 && x < skyMap.length && y >= 0 && y < skyMap[0].length) {
      if (skyMap[x][y] === '1') {
        skyMap[x][y] = '0';
        eraseCloud(x - 1, y);
        eraseCloud(x, y - 1);
        eraseCloud(x + 1, y);
        eraseCloud(x, y + 1);
      }
    }
  }

  return clouds;

}

skyMap = [['0', '1', '1', '0', '1'],
          ['0', '1', '1', '1', '1'],
          ['0', '1', '0', '0', '1'],
          ['1', '0', '0', '1', '1']]

console.log(countClouds(skyMap));
