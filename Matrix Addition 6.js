function matrixAddition(arr1, arr2) {
  return arr1.map((row, i) => row.map((element, j) => element + arr2[i][j]))
}

console.log(matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
//      +
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] ))

// // returns:
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]