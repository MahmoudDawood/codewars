function sumProdDiags(matrix) {
  const n = matrix.length
  const forwardDiagonal = (row, col) => {
    let sum = 1
    while(row < n && col >= 0) sum *= matrix[row++][col--]
    return sum
  }
  const backwardDiagonal = (row, col) => {
    let sum = 1
    while(row < n && col < n) sum *= matrix[row++][col++]
    return sum
  }
  let sum1 = 0, sum2 = 0
  // Iterate on first row going left & down & same with last column
    // Add it's multiplication value to sum
  for(let j = 0; j < n; j++) sum1 += forwardDiagonal(0, j)
  for(let i = 1; i < n; i++) sum1 += forwardDiagonal(i, n - 1)

  // Iterate on first row from end going right & down till & same with first column
    // Add it's multiplication value to sum
  for(let j = 0; j < n; j++) sum2 += backwardDiagonal(0, j)
  for(let i = 1; i < n; i++) sum2 += backwardDiagonal(i, 0)
  
  return sum2 - sum1
}

let M2 = [
  [1, 4, 7, 6],
  [-3, 2, 8, 1],
  [6, 2, 9, 7],
  [1, -2, 4, -2]];
console.log(sumProdDiags(M2), -11);

let M1 = [
    [1, 4, 7, 6, 5],
    [-3, 2, 8, 1, 3],
    [6, 2, 9, 7, -4],
    [1, -2, 4, -2, 6],
    [3, 2, 2, -4, 7]]
console.log(sumProdDiags(M1), 1098)
// Params: n * n matrix
// Returns: Sum of forward slash diagonals - Sum of backslash diagonals
// Exampes:
  // let M1 = [
  //   [1, 4, 7, 6, 5],
  //   [-3, 2, 8, 1, 3],
  //   [6, 2, 9, 7, -4],
  //   [1, -2, 4, -2, 6],
  //   [3, 2, 2, -4, 7]]
  // (sumProdDiags(M1), 1098);

  // let M2 = [
  //   [1, 4, 7, 6],
  //   [-3, 2, 8, 1],
  //   [6, 2, 9, 7],
  //   [1, -2, 4, -2]];
  // (sumProdDiags(M2), -11);

  let M3 = [
    [1, 2, 3, 2, 1],
    [2, 3, 4, 3, 2],
    [3, 4, 5, 4, 3],
    [4, 5, 6, 5, 4],
    [5, 6, 7, 6, 5]];
  console.log(sumProdDiags(M3), 0);
// Pseudocode:
  // Iterate on first row going left & down & same with last column
    // Add it's multiplication value to sum
  // Iterate on first row from end going right & down till & same with first column
    // Add it's multiplication value to sum
  // return sum1 - sum2
  