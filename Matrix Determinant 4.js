// Function that takes a matrix, and index >> return a matrix without the index row & column
// function childDeterminant(m, idx) {
  // return a clone of this matrix where it ignores first row and removes the index column
  // m.splice(0, 1)
  // return m.slice(1).map(arr => arr.slice(0, idx).concat(arr.slice(idx + 1)))
// }
function determinant(m) {
  // If matrix size == 1 >> return it
  if(m.length == 1) return m[0][0]
  // else Iterate over first row
  let sum = 0
  m.forEach((row) => {
    row.forEach((element, i) => {
      // If it's index is even, add to sum multiply it by it's child determinant recrusively (even +)
      // if(!i % 2) sum += element * determinant(childDeterminant(Array(m), i))
      // else sum += -element * determinant(childDeterminant(Array(m), i))
      // else add to sum multiply it's negative by it's child determinant recrusively (odd -)
      sum += determinant(m.slice(1).map(arr => arr.slice(0, i).concat(arr.slice(i + 1)))) * (i % 2 ? -element : element)
    })
  })
  return sum
}

const m1 = [ [4, 6], [3,8]]
const m5 = [[2,4,2],[3,1,1],[1,2,0]]
console.log(determinant([[1]]),1)
console.log(determinant(m1), 14, "Should return 4*8 - 3*6, i.e. 14")
console.log(determinant(m5), 10, "Should return the determinant of [[2,4,2],[3,1,1],[1,2,0]], i.e. 10")

// [
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
// ]
// Params: 2D Matrix m of size n * n
// Returns: Determinant of the matrix
// Examples:
  // m1 = [ [4, 6], [3,8]]
  // m5 = [[2,4,2],[3,1,1],[1,2,0]]
  // assert.strictEqual(determinant([[1]]),1)
  // assert.strictEqual(determinant(m1), 14, "Should return 4*8 - 3*6, i.e. 14")
  // assert.strictEqual(determinant(m5), 10, "Should return the determinant of [[2,4,2],[3,1,1],[1,2,0]], i.e. 10")