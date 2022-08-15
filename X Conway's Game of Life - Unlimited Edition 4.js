function getGeneration(cells, generations){
  // Make a function to get sum of neighbours
  function countNeighbours(x, y) {
    let result = 0
    for(let i = x-1; i < x+2; i++)
      for(let j = y-1; j < y+2; j++)
        if(i >= 0 && i < cells.length && j >= 0 && j < cells[0].length) result += cells[i][j]
    return result - cells[x][y]
  }

  let result = Array(cells.length).fill(null).map(x => Array(cells[0].length))
  // if neighbours < 2 OR neighbours > 3, cell in result is set to 0
  // else if neighbours = 3, set result to 1
  cells.forEach((row, i) => {
    row.forEach((cell, j) => {
      const sum = countNeighbours(i, j)
      result[i][j] = sum < 2 || sum > 3 ? 0 : sum == 3 ? 1 : cells[i][j]
    })
  })

  // call this function as many generations as we've
  if(generations > 1) getGeneration(result, generations - 1)
  return result
  // crop it if it's all zeros around ///
}
const cells = 
[[1,0,0],
[0,1,1],
[1,1,0]]

console.log(getGeneration(cells, 1))

// Params: A 2D array of cells, represented by 0s & 1s, 1 for living cell, 0 for dead cell
// Result: Result of generations where cells with neighbours < 2 dies
                                                // neightbours > 3 dies
                                                // neighbours = 3 lives (if it's dead)
// Examples:
  //[[1,0,0],
//   [0,1,1],
//   [1,1,0]], gen = 1

  //[[0,1,0],
//   [0,0,1],
//   [1,1,1]]

  //[[0,0,0],
//   [1,0,1],
//   [0,1,1]]
// Pseudocode:
  // Make a function to get sum of neighbours
  // if neighbours < 2 OR neighbours > 3, cell in result is set to 0
  // else if neighbours = 3, set result to 1
  // call this function as many generations as we've
  // crop it if it's all zeros around


  //[[1,0,0],
//   [0,1,1],
//   [1,1,0]], gen = 1

  //[[0,0,0],
//   [1,1,0],
//   [1,1,0]], gen = 1

