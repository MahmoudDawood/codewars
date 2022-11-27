function oddRow(n) {
  let arr = [n * n - n + 1]
  while(--n)
    arr.push(arr[arr.length - 1] + 2)
  return arr
  // Get first element in row
  // Add 2 each time till we reach n elements, return this array
}

// Params: index of odd pyramid row
// Returns: specified row
// Examples: 
  odd_row(1)  ==  [1]
  odd_row(2)  ==  [3, 5]
  odd_row(3)  ==  [7, 9, 11]
// Pseudocode: 
