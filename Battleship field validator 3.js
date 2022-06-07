function validateBattlefield(field) {
  // Create array of ships for each index as ship size [0, 4, 3, 2, 1]
  const ships = [0, 4, 3, 2, 1]

  // Iterate over each element row by row column by column
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      // if found a 1, check it's upper and lower 1s (wrt boundaries)
      if(field[i][j] === 1){
        if(checkCorners(i, j)) return false
        let cnt = 1
        // if found count the upper and lower 1s
        let row = i
        while(field[++row][j] === 1){ // lower
          cnt++
          field[row][j] = 0
          // checking right left & right left upper lower corners, if any are 1s return false
          if(field[row][j+1] === 1 || field[row][j-1] === 1 || checkCorners(row, j)) return false
        }
        row = i
        while(row > 0 && field[--row][j] === 1){ // upper
          cnt++
          field[row][j] = 0
          // checking right left & right left upper lower corners
            // if any are 1s return false
          if(field[row][j+1] === 1 || field[row][j-1] === 1 || checkCorners(row, j)) return false
        }
        while(field[i][++j] === 1){ // right
          cnt++
          field[i][j] = 0
          // else count  right 1s checking up down & up down upper lower corners
            // if any are 1s return false
          if(i > 0 && (field[i-1][j] === 1 || field[i+1][j] === 1 || checkCorners(i, j))) return false
        }
        // get the 1s count and subtract 1 from the array index of count
        ships[cnt]--
        cnt = 0
      }
    }
  }
  // If there's a non zero element in array return false
  // return true
  return ships.filter(x => x != 0).length !== 0 ? false : true

  function checkCorners(i, j){
    if(i > 0)
    if((i < 9 && j < 9 && field[i+1][j+1] === 1) ||
      (i < 9 && j > 0 && field[i+1][j-1] === 1) ||
      (i > 0 && j < 9 && field[i-1][j+1] === 1) ||
      (i > 0 && j > 0 && field[i-1][j-1] === 1)) return true
    return false
  }
}

console.log(validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]))
// console.log(validateBattlefield([
//   [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//   [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]))

// Parameters: 10 * 10 array, with 1s for ships & 0s for free cells
// Returns: True if it has valid positions or false if not
// Examples: 
  // [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  // [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  // [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  // [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  // [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]     true
// Pseudocode:
  // Create array of ships for each index as ship size [0, 4, 3, 2, 1]
  // Iterate over each element row by row column by column
    // if found a 1, check it's upper and lower 1s (wrt boundaries)
      // if found count the upper and lower 1s checking right left & right left upper lower corners
        // if any are 1s return false
        // else continue search and turn 1s to 0s
          // get the 1s count and subtract 1 from the array index of count
      // else count upcoming right 1s checking up down & up down upper lower corners
        // if any are 1s return false
        // else continue search and turn 1s to 0s
          // get the 1s count and subtract 1 from the array index of count
  // If there's a non zero element in array return false
  // return true
    