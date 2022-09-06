function multiplication(size) {
  return Array(size).fill(Array(size).fill(null)).map((row, i) => row.map((x, j) => i + 1 + j * (i + 1)))
}

console.log(multiplication(3))
// 1 2 3
// 2 4 6
// 3 6 9

// [[1,2,3],[2,4,6],[3,6,9]]