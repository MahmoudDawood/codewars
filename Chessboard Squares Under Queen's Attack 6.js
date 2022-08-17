function chessboardSquaresUnderQueenAttack(a, b){
    // Make a function that computes sum of squares under attack in diagonal
  // (x, y)
  function diagonalSum(row, col) {
    let sum = 0, i = 1
    // sum of row + 1, col + 1 as row <= a - 1 & col <= b - 1  // bot right
    while(row + i <= a - 1 && col + i++ <= b - 1) sum++
    // sum of row - 1, col + 1 as row >= 0 & col <= b - 1  // top right
    i = 1
    while(row - i >= 0 && col + i++ <= b - 1) sum++
    // sum of row - 1, col - 1 as row >= 0 & col >= 0 // top left
    i = 1
    while(row - i >= 0 && col - i++ >= 0) sum++
    // sum of row + 1, col - 1 as row <= a - 1 & col >= 0 // bot left
    i = 1
    while(row + i <= a - 1 && col - i++ >= 0) sum++
    // return sum
    // console.log({row, col, sum})
    return sum
  }

  // Make a recursive function to get sum of squares under attack for each queen position
  // (x, y, sum)
  // let rowInc = 
  function getSum(x = 0, y = 0, sum = 0) {
    // console.log({x, y, sum})
    // return sum when x = a - 1 and y = b - 1
    if(x == a - 1 && y == b - 1) return sum + a - 1 + b - 1 + diagonalSum(x, y)

    // if y < b - 1, sum += function with y + 1, sum + (a - 1) + (b - 1) + DIAGONAL
    if(y < b - 1) sum += getSum(x, y + 1, sum) + a - 1 + b - 1 + diagonalSum(x, y)

    // else sum += function with x + 1, y = 0, sum + (a - 1) + (b - 1) + DIAGONAL
    else sum += getSum(x + 1, 0, sum) + a - 1 + b - 1 + diagonalSum(x, y)

    // return sum
    return sum
  }
  return getSum()
}
console.log(chessboardSquaresUnderQueenAttack(1,1), 0);
console.log(chessboardSquaresUnderQueenAttack(2,2), 12);
console.log(chessboardSquaresUnderQueenAttack(1,2), 2);
console.log(chessboardSquaresUnderQueenAttack(2,3), 26);
console.log(chessboardSquaresUnderQueenAttack(5,5), 320);

// Params: 1 <= two integers <= 20
// Returns: Sum of under attack squares by a queen at every position of a * b chess board
// Examples: 
  // (chessboardSquaresUnderQueenAttack(1,1), 0);
  // (chessboardSquaresUnderQueenAttack(2,2), 12);
  // (chessboardSquaresUnderQueenAttack(1,2), 2);
  // (chessboardSquaresUnderQueenAttack(2,3), 26);
  // (chessboardSquaresUnderQueenAttack(5,5), 320);
// Pseudocode:
  // Make a function that computes sum of squares under attack in diagonal
  // (x, y)
    // sum of row + 1, col + 1 as row <= a - 1 & col <= b - 1  // bot right
    // sum of row - 1, col + 1 as row >= 0 & col <= b - 1  // top right
    // sum of row - 1, col - 1 as row >= 0 & col >= 0 // top left
    // sum of row + 1, col - 1 as row <= a - 1 & col >= 0 // bot left
    // return sum

  // Make a recursive function to get sum of squares under attack for each queen position
  // (x, y, sum)
    // return sum when x = a - 1 and y = b - 1
    // if y < b - 1, sum += function with y + 1, sum + (a - 1) + (b - 1) + DIAGONAL
    // else sum += function with x + 1, y = 0, sum + (a - 1) + (b - 1) + DIAGONAL
    // return sum

/*
  Diagonals
  O O O O O O O
  O O O O O O O
  O O O O O O O
*/