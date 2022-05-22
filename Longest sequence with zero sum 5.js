// PREP
var maxZeroSequence = function(arr) {
  // Get the accumilative sum array
  for(let i = 1; i < arr.length; i++) arr[i] += arr[i - 1]

  // Iterate over each element and get the index & maximum distance till the last same element
  let sum = 0, start = 0, end = 0, zEnd = 0
  arr.forEach((x, i) => {
    if(sum <= arr.lastIndexOf(x) - i){
      start = i
      sum = arr.lastIndexOf(x) - i
    }
  })
  end = arr.lastIndexOf(arr[start])
  
  // Compare with last instance of zero
  if(sum < arr.lastIndexOf(0)) zEnd = arr.lastIndexOf(0)
  
  // Revert to original array
  for(let i = arr.length - 1; i > 0; i--) arr[i] -= arr[i - 1]

  // return the right sequence [start + 1, end] when it's for zeros starts at element 0
  return zEnd ? arr.slice(0, zEnd + 1) : arr.slice(start + 1, end + 1)
}
  // maxZeroSequence([1, 2, -3, 7, 8, -16])
  //                 [1, 2, -3]
  // maxZeroSequence([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])
  //                                 [92, -115, 17, 2, 2, 2]

// console.log(maxZeroSequence([1, 2, -3, 7, 8, -16]))
// console.log(maxZeroSequence([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11]))
console.log(maxZeroSequence([-31,-95,52,54,66,-30,8,7,48,85,-41,86,-44,-78,-39,0,-71,20,-11,88,-97,7,58,32,-100,20,11,37,-89,28,13,79,79,-46,48,96,40,-24,16,47,-82,55,62,91,84,-80,2,34,-64,-69,-47,15,-45,-70,-15,33,-86,-79,82,-19]))
// expected [ 32, -100, 20, 11, 37 ] to deeply equal [ 11, 37, -89, 28, 13 ]

// console.log(maxZeroSequence([99,10,-21,-50,-54,69,37,-57,-1,-94,14,92,79,-54,-51,21,20,-24,
//   -71,-54,40,-56,56,26,-47,-83,77,1,-4,-42,64,1,99,-42,-12,-60,73,-11,68,78,92,20,-97,-34,
//   -10,-34,61,6,-37,-88,8,-6,-75,-44,97,27,29,87,64,50]))
  // [ 1,99,-42,-12,-60,73,-11,68,78,92,20,-97,-34,-10,-34,61,6,-37,-88,8,-6,-75 ]
  // [ 99,10,-21,-50,-54,69,37,-57,-1,-94,14,92,79,-54,-51,21,20,-24,-71,-54,40,-56,56,26,-47,-83,77,1,-4,-42,64,1,99,-42 ]

// Parameters: Array of integers +ve and -ve
// Returns: Longest contiguous sequence with elements sum = 0
// Examples:
  // maxZeroSequence([1, 2, -3, 7, 8, -16])
  //                 [1, 2, -3]
  // maxZeroSequence([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])
  //                                 [92, -115, 17, 2, 2, 2]
//Pseducode:
  // Get the accumilative sum
  // Iterate over each element and get the index & maximum distance till the last same element
  // Compare with last instance of zero
  // Revert to original array
  // return the right sequence [start + 1, end] when it's for zeros starts at element 0