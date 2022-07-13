function isSolved(board) {
  function checkRows(){
    for(let i = 0; i < 3; i++){
      let flag = true
      for(let j = 0; j < 3; j++)
        if(board[i][j] !== board[i][0]) flag = false
      if(flag === true && board[i][0]) return board[i][0]
    }
    return false
  }
  function checkColumns(){
    for(let i = 0; i < 3; i++){
      let flag = true
      for(let j = 0; j < 3; j++)
        if(board[j][i] !== board[0][i]) flag = false
      if(flag === true && board[0][i]) return board[0][i]
    }
    return false
  }
  function checkDiagonals(){
    let diagonal1 = true, diagonal2 = true
    for(let i = 0; i < 3; i++)
      if(board[i][i] !== board[1][1]) diagonal1 = false
    for(let i = 0; i < 3; i++)
      if(board[i][2-i] !== board[1][1]) diagonal2 = false
    return (diagonal1 || diagonal2) && board[1][1]
  }
  function checkZeros(){
    for(let i = 0; i < 3; i++)
      for(let j = 0; j < 3; j++)
        if(board[i][j] === 0) return true
    return false
  }

  return checkRows() ? checkRows() : checkColumns() ? checkColumns() : checkDiagonals() ? checkDiagonals() : checkZeros ? -1 : 0
  // if(checkRows()) return checkRows()
  // else if(checkColumns()) return checkColumns()
  // else if(checkDiagonals()) return checkDiagonals()
  // else if(checkZeros()) return -1
  // else return 0
  // >> 0
}
console.log(isSolved([[0,0,1],
                  [0,1,2],
                  [2,1,0]]))

// Parameters: 3 * 3 tic-tac-toe board of 0, 1, 2
// Returns: -1 if game still running, 1 if X wins, 2 if O wins, 0 if draw
// Examples:
  // [[0,0,1],
  // [0,1,2],
  // [2,1,0]]) === -1);
// Pseudocode:
  // Check for winning rows >> 1 || 2
  // Check for winning columns >> 1 || 2
  // Check for winning diagonals >> 1 || 2
  // Check for zeros >> -1
  // >> 0