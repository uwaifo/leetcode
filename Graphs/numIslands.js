/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let result = 0;
  //Put your code here.
  let gridLength, marker;

  for (let i = 0, gridLength = grid.length; i < gridLength; i++) {
    for (let inner = 0, marker = grid[0].length; inner < marker; inner++) {
      if (grid[i][inner] === '1') {
        result += 1;
        dfsHelper(i, inner);
      }
    }
  }
  //// HELPER FUNCTION

  

  return result;
}

function dfsHelper(xAxis, yAxis, argGrid) {
    let directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    argGrid[xAxis][yAxis] = '0';

    directions.forEach(point => {
        let xPoint = xAxis + point[0];
        let yPoint = yAxis + point[1];

        if (
            xPoint > -1 &&
            xPoint < argGrid.length &&
            yPoint > -1 &&
            yPoint < grid[0].length &&
            grid[xPoint][yPoint] === '1'
        ) {
            dfsHelper(xPoint, yPoint, argGrid);
        }
    });
}
