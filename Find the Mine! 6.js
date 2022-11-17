function mineLocation(field){
  // Iterate over field row by row
  for(let i = 0; i < field.length; i++)
    for(let j = 0; j < field.length; j++)
      if(field[i][j]) return [i, j]
  // If found mine >> return [row, col]
}

// Params: Field n * n (2D Array)
// Returns: Position of mine [x, y]
// Ex:
  console.log(mineLocation([ [1, 0], [0, 0] ]), [0, 0]);
  console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]), [0, 0]);
  console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]), [2, 2]);
// Pseudocode:
  // Iterate over field row by row
  // If found mine >> return [row, col]