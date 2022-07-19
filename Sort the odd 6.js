function sortOdds(arr) {
  // Make an array of the given odd values, sort it, replace it with og array odd values & return
  const odds = arr.filter(x => x % 2).sort((a, b) => a - b)
  return arr.map((x, i, arr) => x % 2 ? odds.shift() : x)
}
console.log(sortOdds([
  5, 3,  2, 8,
  1, 4, 11
]))

// Params: array of numbers
// Returns: sorted odd values while even stay the same
// Examples:
  // [7, 1]  =>  [1, 7]
  // [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
  // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// Pseudocode:
  // Make an array of the given odd values, sort it, replace it with og array odd values & return