var solution = function(firstArray, secondArray) {
  // Iterate over both arrays, put difference of elements squared in a new array, return it's average
  return firstArray.reduce((acc, curr, i) => acc + (curr - secondArray[i]) ** 2, 0) / firstArray.length
}
console.log(solution([1,2,3],[4,5,6])) //  9
console.log(solution([10,20,10,2],[10,25,5,-2])) //  16.5
console.log(solution([0,-1], [-1,0])) //  1

// Params: 2 int arrays of equal length
// Returns: Average of absolute value difference between arrays squared
// Examples:
  // (solution([1,2,3],[4,5,6])) //  9
  // (solution([10,20,10,2],[10,25,5,-2])) //  16.5
  // (solution([0,-1], [-1,0])) //  1
// Pseudocode:
  // Iterate over both arrays, put difference of elements squared in a new array, return it's average