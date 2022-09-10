function whoIsWinner(piecesPositionList) {
  const backwardDiagonal = (col, row, move) => {
    while(row > 0 && col > 0) {
      col--
      row--
    }
    let cnt = 0, max = 0
    while(row <= 5 && col <= 6){
      if(board[col++][row++] == move) cnt++
      else cnt = 0
      max = Math.max(max, cnt)
    }
    if(max >= 4) return true
    return false
  }

  const forwardDiagonal = (col, row, move) => {
    while(row > 0 && col < 6) {
      col++
      row--
    }
    let cnt = 0, max = 0
    while(row <= 5 && col >= 0){
      if(board[col--][row++] == move) cnt++
      else cnt = 0
      max = Math.max(max, cnt)
    }
    if(max >= 4) return true
    return false
  }

  const moves = piecesPositionList.map(x => x.split('_'))
  
  // Make a board 2d array of 7 columns each of 6 rows & fill them with nulls
  const board = Array(7).fill(null).map(x => Array(6).fill(null))

  // Iterate over moves
  for(const move of moves){
    // Add color's name to the specified column at the last null in it
    const column = move[0].charCodeAt(0) - 65
    const row = board[column].lastIndexOf(null)
    board[column][row] = move[1]

    // Check if this move makes a win
    // Check column
    let start = row - 3 > 0 ? row - 3 : 0
    let end = row + 3 < 5 ? row + 3 : 5
    let cnt = 0, max = 0
    for(let i = start; i <= end; i++){
      if(board[column][i] == move[1]) cnt++
      else cnt = 0
      max = Math.max(max, cnt)
    }
    if(max >= 4) return move[1]

    // Check row
    start = column - 3 > 0 ? column - 3 : 0
    end = column + 3 < 6 ? column + 3 : 6
    cnt = 0, max = 0
    for(let i = start; i <= end; i++){
      if(board[i][row] == move[1]) cnt++
      else cnt = 0
      max = Math.max(max, cnt)
    }
    if(max >= 4) return move[1]

    // Check diagonal
    if(backwardDiagonal(column, row, move[1])) return move[1]
    if(forwardDiagonal(column, row, move[1])) return move[1]
  }
  return 'Draw'
      // return the color if so
  // Return draw

}

console.log(whoIsWinner([ 'B_Red',
  'E_Yellow',
  'F_Red',
  'E_Yellow',
  'B_Red',
  'F_Yellow',
  'C_Red',
  'A_Yellow',
  'B_Red',
  'E_Yellow',
  'E_Red',
  'C_Yellow',
  'G_Red',
  'D_Yellow',
  'F_Red',
  'G_Yellow',
  'E_Red',
  'D_Yellow',
  'F_Red',
  'E_Yellow' ]), "Yellow");
// console.log(whoIsWinner([ "A_Red",
//                 "B_Yellow",
//                 "A_Red",
//                 "E_Yellow",
//                 "A_Red",
//                 "G_Yellow", "A_Red"]), "Red");
// console.log(whoIsWinner([ "A_Red",
// "B_Yellow",
// "A_Red",
// "C_Yellow",
// "A_Red",
// "D_Yellow", "D_Red", "E_Yellow"]), "Yellow");
// console.log(whoIsWinner([ "A_Red",
//                 "B_Yellow",
//                 "A_Red",
//                 "E_Yellow",
//                 "F_Red",
//                 "G_Yellow"]), "Draw");

// // Parameters: List of moves in a connect 4 game, column_color
// // Returns: The winner color or draw
// // Examples:
// console.log(whoIsWinner([ "A_Red",
//                 "B_Yellow",
//                 "A_Red",
//                 "E_Yellow",
//                 "F_Red",
//                 "G_Yellow"]), "Draw");

// console.log(whoIsWinner(["C_Yellow",
//           "E_Red",
//           "G_Yellow",
//           "B_Red",
//           "D_Yellow",
//           "B_Red",
//           "B_Yellow",
//           "G_Red",
//           "C_Yellow",
//           "C_Red",
//           "D_Yellow",
//           "F_Red",
//           "E_Yellow",
//           "A_Red",
//           "A_Yellow",
//           "G_Red",
//           "A_Yellow",
//           "F_Red",
//           "F_Yellow",
//           "D_Red",
//           "B_Yellow",
//           "E_Red",
//           "D_Yellow",
//           "A_Red",
//           "G_Yellow",
//           "D_Red",
//           "D_Yellow",
//           "C_Red"]), "Yellow");

// console.log(whoIsWinner(["A_Yellow",
//                 "B_Red",
//                 "B_Yellow",
//                 "C_Red",
//                 "G_Yellow",
//                 "C_Red",
//                 "C_Yellow",
//                 "D_Red",
//                 "G_Yellow",
//                 "D_Red",
//                 "G_Yellow",
//                 "D_Red",
//                 "F_Yellow",
//                 "E_Red",
//                 "D_Yellow"]), "Red");

