var maxSequence = function(arr){
  const acc = []
  acc[0] = arr[0]
  for(let i = 1; i < arr.length; i++) acc[i] = (acc[i - 1] + arr[i])

  let max = Math.max(...acc)
  for(let i = 0; i <  acc.length - 1; i++){
    for(let j = i + 1; j < acc.length; j++){
      max = Math.max(acc[j] - acc[i], max)
    }
  }
  return max > 0 ? max : 0
}

// console.log(maxSequence([]))
console.log(maxSequence([ 33, -3, 34, -43, 36, -25, 1, -6, 39, -7 ]))

// Parameters: array of integers +/-
// Returns: Maximum subarray contiguous sum, 0 if all are -ve
// Examples:
  // [-2, 1, -3, 4, -1, 2, 1, -5, 4], 6    [4, -1, 2, 1]
  // [], 0

  // [ 2,-29,-44,34,-4,20,-36,-30,-3,-39,-47,5,-13,-45,-25,-25,4,-10,43,46,-28,37,-4,-45,-41,-48,-21,-44,19,-45,-20,43,-9,7,-37,-11,-49,-49,-44,33,-43,29,28,-2,-35,-27,32 ]
  // Expected: 98, instead got: 5

  // [ 14,2,2,25,-0,-7,-29,-8,-13,-33,6,44,-38,-27,-13,19,-26,44,-10,45 ]
  // Expected: 79, instead got: 53

  // [ -25, -13, -42, -11, 33, -15, -4, 25, -24, 14, -8, 2, 16, -50, -14, -32, -17 ]
  // Expected: 39, instead got: 0

  // [ -23, -45, -42, 21, 38, -31, 39 ]
  // Expected: 67, instead got: 25

  // [ 5, 27, -5, 14, 20, -31, -23, -9, 17, -33, -6, -6, 31, 7, -17, 44, -47 ]
  // Expected: 65, instead got: 61

// Pseudocode:
  // Get accumilative sum array
  // find index of max and min elements in acc array
  // if max > min 
    // return sliced array with min adjusted