function kingIsInCheck (chessboard) {
  // Implement a function to check orthogonal directions of a piece for a facing king
  const orthogonal = (row, col) => {
    // horizontal check
    for(let i = col + 1; i < 8; i++){ // to the right
      if(chessboard[row][i] == '♔') return true
      else if(chessboard[row][i] !== ' ') break
    }
    for(let i = col - 1; i >= 0; i--){ // to the left
      if(chessboard[row][i] == '♔') return true
      else if(chessboard[row][i] !== ' ') break
    }

    // vertical check
    for(let i = row + 1; i < 8; i++){ // to the down
      if(chessboard[i][col] == '♔') return true
      else if(chessboard[i][col] !== ' ') break
    }
    for(let i = row - 1; i >= 0; i--){ // to the up
      if(chessboard[i][col] == '♔') return true
      else if(chessboard[i][col] !== ' ') break
    }
    return false
  }
  // Implement a function to check diagonally if a king is facing
  const diagonally = (row, col) => {
    // forward slash diagonal
    for(let i = 1; row - i >= 0 && col + i < 8; i++){  // upper side, dec row, inc col
        if(chessboard[row - i][col + i] == '♔') return true
        else if(chessboard[row - i][col + i] !== ' ') break
    }
    for(let i = 1; row + i < 8 && col - i >= 0; i++){  // lower side, inc row, dec col
      if(chessboard[row + i][col - i] == '♔') return true
      else if(chessboard[row + i][col - i] !== ' ') break
    }

    // back slash diagonal
    for(let i = 1; row - i >= 0 && col - i >= 0; i++){  // upper side, dec row, dec col
      if(chessboard[row - i][col - i] == '♔') return true
      else if(chessboard[row - i][col - i] !== ' ') break
    }
    for(let i = 1; row + i < 8 && col + i < 8; i++){  // lower side, inc row, inc col
      if(chessboard[row + i][col + i] == '♔') return true
      else if(chessboard[row + i][col + i] !== ' ') break
    }
    return false
  }
  // Iterate over the array for a piece other than space or the black king
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(chessboard[i][j] == '♛'){
        if(orthogonal(i, j)) return true
        if(diagonally(i, j)) return true
      }
      else if(chessboard[i][j] == '♝'){
        if(diagonally(i, j)) return true
      }
      else if(chessboard[i][j] == '♞'){
        if(i - 2 > 0){ // up
          if(j - 1 >= 0 && chessboard[i - 2][j - 1] == '♔') return true
          if(j + 1 < 8 && chessboard[i - 2][j + 1] == '♔') return true
        }
        if(i + 2 < 8){ // down
          if(j - 1 >= 0 && chessboard[i + 2][j - 1] == '♔') return true
          if(j + 1 < 8 && chessboard[i + 2][j + 1] == '♔') return true
        }
        if(j + 2 < 8){ // right
          if(i - 1 >= 0 && chessboard[i - 1][j + 2] == '♔') return true
          if(i + 1 < 8 && chessboard[i + 1][j + 2] == '♔') return true
        }
        if(j - 2 >= 0){ // left
          if(i - 1 >= 0 && chessboard[i - 1][j - 2] == '♔') return true
          if(i + 1 < 8 && chessboard[i + 1][j - 2] == '♔') return true
        }
      }
      else if(chessboard[i][j] == '♜'){
        if(orthogonal(i, j)) return true
      }
      else if(chessboard[i][j] == '♟'){
        if(i < 8){
          if(j > 0 && chessboard[i + 1][j - 1] == '♔') return true
          if(j < 8 && chessboard[i + 1][j + 1] == '♔') return true
        }
      }
    }
  }
  return false
  // Check it's directions for a black king in the way, Implement Knight & Pawn moves
}
'♔'
'♛'
'♝'
'♞'
'♜'
'♟'

// Params: 8*8 array of chessboard
// Returns: boolean if the black king in in check
// Examples:
let chessboard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '♟', ' ', ' ', ' ', ' '],
  [' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
  console.log(kingIsInCheck(chessboard))
  //   true

 chessboard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', '♝'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['♔', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
  console.log(kingIsInCheck(chessboard))
//   true

  chessboard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '♔', ' ', ' ', '♜', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
  console.log(kingIsInCheck(chessboard))
//   true

  chessboard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '♔', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['♞', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
  console.log(kingIsInCheck(chessboard))
//   true

  chessboard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '♛', ' ', '♔', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
  console.log(kingIsInCheck(chessboard))
//   true

  chessboard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '♔', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
  console.log(kingIsInCheck(chessboard))
//   false

  chessboard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['♛', ' ', ' ', '♞', ' ', ' ', ' ', '♛'],
  [' ', ' ', ' ', '♔', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
  console.log(kingIsInCheck(chessboard))
//   false

  chessboard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['♜', ' ', '♝', '♔', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
  console.log(kingIsInCheck(chessboard))
//   false