var numIslands = function(grid) {
  // General strategy is: Loop over grid, at the first 1, mark 1 island and kick off a dfs
  // Mark all the 1s you can find as 0s, and continue the loop
  // Every one you find in the loop will be the start of a new island

  let i, l, j, m;
  let count = 0;

  // dfs function that we use below inside the grid;
  let dfs = function(x, y) {
    // shorthand for up, down, left and right locations
    let dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]];

    // mark our current spot as a zero, or recursive dfs' will find this spot again
    grid[x][y] = '0';

    // loop over the directions, check if we're still on the "board" and if we find an attached 1,
    // then dfs from that location
    dirs.forEach(function(dir) {
      let posX = x + dir[0];
      let posY = y + dir[1];

      if (
        posX > -1 &&
        posX < grid.length &&
        posY > -1 &&
        posY < grid[0].length &&
        grid[posX][posY] === '1'
      ) {
        dfs(posX, posY);
      }
    });
  };

  // loop over grid to find 1s
  for (i = 0, l = grid.length; i < l; i++) {
    for (j = 0, m = grid[0].length; j < m; j++) {
      // when you find a 1, start a new island
      if (grid[i][j] === '1') {
        count++;
        // see which other 1s are attached to this 1, change those to zeroes
        // so that the next 1 we find in the grid loop has to be a new island
        // put a console.log(grid); above and below this line to see how islands get marked off
        dfs(i, j);
      }
    }
  }

  return count;
};
