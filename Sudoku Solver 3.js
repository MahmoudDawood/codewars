function sudoku(puzzle) {
  // Make set of size [9][9], solution set 
  let set = [...Array(9)].map(x => Array(9).fill(0)), ss = new Set(), zeros = 0
  puzzle.forEach((arr) => {
    arr.forEach(x => {
      if(x === 0) zeros++
    })
  })
  //// Arrange nine points as board squares top left corners
  // Make function that gets point, returns set of existing values
  function getSet(x, y) {
    const values = new Set()
    for(let i = 0 ; i < 9; i++) values.add(puzzle[i][y]) // add column values
    for(let j = 0 ; j < 9; j++) values.add(puzzle[x][j]) // add row values

    const x1 = x >= 6 ? 6 : x >= 3 ? 3: 0
    const y1 = y >= 6 ? 6 : y >= 3 ? 3: 0
    
    for(let i = x1; i < x1 + 3; i++){
      for(let j = y1; j < y1 + 3; j++)
        values.add(puzzle[i][j])
    }
    values.delete(0)
    return values
  }
  function removeFromSet(x, y, val){
    const values = new Set()
    for(let i = 0 ; i < 9; i++) if(typeof set[i][y] !== "number") set[i][y].delete(val) // add column values
    for(let j = 0 ; j < 9; j++) if(typeof set[x][j] !== "number") set[x][j].delete(val) // add row values

    const x1 = x >= 6 ? 6 : x >= 3 ? 3: 0
    const y1 = y >= 6 ? 6 : y >= 3 ? 3: 0
    
    for(let i = x1; i < x1 + 3; i++){
      for(let j = y1; j < y1 + 3; j++)
      if(typeof set[i][j] !== "number") set[i][j].delete(val)
    }
  }
  function guess(){
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        // For each zero element, zeros++
        if(puzzle[i][j] === 0){
          // add it's row, column, square 1-9 values to solution set
          ss = getSet(i, j)
  
          // add the remainder from set([1...9]) - solution set to element resulting set
          set[i][j] = new Set([1,2,3,4,5,6,7,8,9].filter(x => !ss.has(x)))
          // if resulting set length is 1
            // replace 0 element with the single set value
            // remove this value from row, column ,square sets. zeros--
          // clear solution set
          if([...set[i][j]].length === 1 && puzzle[i][j] === 0){
            set[i][j].forEach(x => puzzle[i][j] = x)
            zeros--
            removeFromSet(i, j, puzzle[i][j])
            ss = new Set()
          }
        }
      }
    }
  }
  guess()
  
  // While zeros > 0 recheck board
  while(zeros > 0) guess()
  return puzzle
}
const board = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]];
console.log(sudoku(board))
// console.log(sudoku([1,2]))


// Parameters: An unsolved sudoku board [9][9], unknown = 0
// Returns: A solved sudoku board [9][9]
// Examples:
  // [5      ,   3    ,     0   ,   0    ,     7     ,    0    ,     0    ,    0     , {2,4,8}]
  // [6      ,   0    ,     0   ,   1    ,     9     ,    5    ,     0    ,    0     , {2,4,7,8}]
  // [0      ,   9    ,     8   ,   0    ,     0     ,    0    ,     0    ,    6     , {2,4,7}]
  // [8      ,   0    ,     0   ,   0    ,     6     ,    0    ,     0    ,    0     ,    3]
  // [4      ,   0    ,     0   ,   8    ,     0     ,    3    ,     0    ,    0     ,    1]
  // [7      ,   0    ,     0   ,   0    ,     2     ,    0    ,     0    ,    0     ,    6]
  // [{1,3,9},   6    ,     0   ,   0    ,     0    ,     0     ,    2    ,     8    ,   0]
  // [{2,3}  ,   0    ,     0   ,   4    ,     1     ,    9    ,     0    ,{ 2,3,7}  ,    5]
  // [{1,2,3},   0    ,     0   ,   0    ,     8     ,    0    ,     0    ,    7     ,    9]
//Pseudocode:
  // Make set of size [9][9], solution set 
  //// Arrange nine points as board squares top left corners
  // Make function that gets point, returns array of existing values
  // For each zero element, zeros++
    // add it's row, column, square 1-9 values to solution set
      // add the remainder from [1...9] - solution set to element resulting set
      // if resulting set length is 1
        // replace 0 element with the single set value
        // remove this value from row, column ,square sets. zeros--
    // clear solution set
  // While zeros > 0
    // Check rows, columns, squares for set with one unique value
      // if found replace 0 element with this unique value
        // remove this value from row, column ,square sets. zeros--

