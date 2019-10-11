let maxAreaOfIsland = function(grid) {
  var max = 0;
  for (var i = 0; i < grid.length; i++) {
    {
      for (var j = 0; j < grid[i].length; j++) {
        {
          if (grid[i][j] === 1) {
            var area = this.dfs(grid, i, j, 0);
            if (area > max) max = area;
          }
        }
      }
    }
  }
  return max;
};

let dfs = function(grid, i, j, area) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] === 0
  ) {
    return area;
  }
  grid[i][j] = 0;
  area++;
  area = this.dfs(grid, i - 1, j, area);
  area = this.dfs(grid, i + 1, j, area);
  area = this.dfs(grid, i, j + 1, area);
  area = this.dfs(grid, i, j - 1, area);
  return area;
};
