function partsSums(ls) {
  // Get sum of input list, use it as first element in result list+
  if(!ls.length) return [0]
  const result = Array(ls.length + 1)
  let sum = ls.reduce((acc, curr) => acc + curr)
  // result[0] = sum

  // loop over input starting @ idx 1
  for(let i = 0; i < ls.length + 1; i++){
    // subtract prev element from sum
    if(i) sum -= ls[i - 1]
    // use sum in this variable in result
    result[i] = sum

  }
  // return result
  return result
}
// console.log([].reduce((acc, curr) => acc + curr))
console.log(partsSums([1, 2, 3, 4, 5, 6]))
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]))

// Params: list of intergers
// Returns: List of sums from index to end
// Examples:
  // ls = [1, 2, 3, 4, 5, 6] 
  // parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

  // ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
  // parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Pseudocode:
  // First element is always the array's sum & last is zero

  // Get sum of input list, use it as first element in result list
  // loop over input starting @ idx 1
  // subtract prev element from sum
  // use sum in this variable in result
  // return result