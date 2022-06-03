function validSolution(board){
  const check = (obj) =>  Object.keys(obj).every((x) => obj[x] === obj[1])
  // Initialize numbers obj from 1 to 9 // zeros
  const obj = {}
  for(let i = 1; i < 10; i++) obj[i] = 0

  // iterate over array rows, add values to each obj key
    // check each iteration if values in obj are different >> return false
    // if any element is zero >> return false
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(board[i][j] == 0) return false
      obj[board[i][j]]++
    }
    if(!check(obj)) return false
  }

  // iterate over array columns, add values to each obj key
    // check each iteration if values in obj are different >> return false
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++) obj[board[j][i]]++
    if(!check(obj)) return false
  }

  // iterate over 3 * 3 block starting from (0, 0) adding x + 3 two times nesting y + 3 two times
  for(let i = 0; i < 9; i += 3){
    for(let j = 0; j < 9; j += 3){
      for(let m = i; m < i + 3; m++){
        for(let n = j; n < j + 3; n++) obj[board[m][n]]++
      }
      if(!check(obj)) return false
    }
  }
  return true
}

console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]))

// Parameters: 9 * 9 array
// Returns: true or false depending on rows, columns, blocks, zeros
// Examples: 
  // validSolution([
  //   [5, 3, 4, 6, 7, 8, 9, 1, 2],
  //   [6, 7, 2, 1, 9, 5, 3, 4, 8],
  //   [1, 9, 8, 3, 4, 2, 5, 6, 7],
  //   [8, 5, 9, 7, 6, 1, 4, 2, 3],
  //   [4, 2, 6, 8, 5, 3, 7, 9, 1],
  //   [7, 1, 3, 9, 2, 4, 8, 5, 6],
  //   [9, 6, 1, 5, 3, 7, 2, 8, 4],
  //   [2, 8, 7, 4, 1, 9, 6, 3, 5],
  //   [3, 4, 5, 2, 8, 6, 1, 7, 9]
  // ]); // => true

  // validSolution([
  //   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  //   [6, 7, 2, 1, 9, 0, 3, 4, 8],
  //   [1, 0, 0, 3, 4, 2, 5, 6, 0],
  //   [8, 5, 9, 7, 6, 1, 0, 2, 0],
  //   [4, 2, 6, 8, 5, 3, 7, 9, 1],
  //   [7, 1, 3, 9, 2, 4, 8, 5, 6],
  //   [9, 0, 1, 5, 3, 7, 2, 1, 4],
  //   [2, 8, 7, 4, 1, 9, 6, 3, 5],
  //   [3, 0, 0, 4, 8, 1, 1, 7, 9]
  // ]); // => false
// Pseudocode:
  // Initialize numbers obj from 1 to 9 // zeros
  // iterate over array rows, add values to each obj key
    // check each iteration if values in obj are different >> return false
    // if any element is zero >> return false
  // iterate over array columns, add values to each obj key
    // check each iteration if values in obj are different >> return false
  // iterate over 3 * 3 block starting from (0, 0) adding x + 3 two times nesting y + 3 two times