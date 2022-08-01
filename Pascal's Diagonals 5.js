function generateDiagonal(n, l){
  // Create first diagonal array of 1s & length l
  let arr = Array(l).fill(1)
  // For each n above 1, start @ 2, nth element in arr = new n-1 + old n}
  for(let i = 0; i < n; i++) arr.forEach((x, i) => arr[i] = i ? arr[i - 1] + x : 1)
  return arr
}
console.log(generateDiagonal(2, 5)) // [1, 3, 6, 10, 15]
// console.log(generateDiagonal(1, 10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(generateDiagonal(3, 7)) // [1, 4, 10, 20, 35, 56, 84]

// Params: Two non negative integers
// Returns: Array of the first l numbers from the nth diagonal Pascal's triangle
// Examples:
  // (generateDiagonal(2, 5)) // [1, 3, 6, 10, 15]
  // (generateDiagonal(1, 10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // (generateDiagonal(3, 7)) // [1, 4, 10, 20, 35, 56, 84]
// Pseduocode:
  // Create first diagonal array of 1s & length l
  // For each n above 1, start @ 2, nth element in arr = new n-1 + old n