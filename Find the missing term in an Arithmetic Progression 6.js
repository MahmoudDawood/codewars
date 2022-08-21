var findMissing = function (list) {
  // iterate over array calculating diff between x, x + 1 elements
  let diff = list[1] - list[0]
  for(let i = 1; i < list.length; i++){
    // Once we reach a change in diff
    if(list[i + 1] - list[i] != diff){
      if(Math.abs(list[i + 1] - list[i]) > Math.abs(diff)) return list[i] + diff
      // console.log(i)
      return 2 * list[i] - list[i + 1]
    }
      // If it's absolute value is bigger, add previous diff to element at x and return 
      // else subtract previous diff from element at x and return
  }
}

console.log(findMissing([1, 3, 5, 9, 11])) // == 7
console.log(findMissing([7, 6, 4, 3])) // == 5
console.log(findMissing([7, 13, 16])) // == 10


// Params: list of arithmatic sequence of length >= 3, with 1 missig element
// Result: The missing value
// Examples:
  // findMissing([1, 3, 5, 9, 11]) == 7
  // [7, 6, 4, 3]

  // exactly 3 elements
  // inc or dec
// Pseudocode:
  // iterate over array calculating diff between x, x + 1 elements
  // Once we reach a change in diff
    // If it's absolute value is bigger, add previous diff to element at x and return 
    // else subtract previous diff from element at x and return
