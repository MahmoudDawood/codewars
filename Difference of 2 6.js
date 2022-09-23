function twosDifference(input) {
  let result = [], start = 0, end = 1
  input.sort((a, b) => a - b)
  while(end < input.length && start < end)
    input[end] - input[start] == 2 ? result.push([input[start++], input[end++]])
      : input[end] - input[start] == 1 ? end++ : end - start > 1 ? start++ : end++
    // if(input[end] - input[start] == 2) result.push([input[start++], input[end++]])
    // else if(input[end] - input[start] == 1) end++
    // else if(end - start > 1) start++
    // else end++
  
  return result
}

console.log(twosDifference([1, 2, 3, 4]))
console.log(twosDifference([4, 1, 2, 3]))
console.log(twosDifference([1, 23, 3, 4, 7]))
console.log(twosDifference([4, 3, 1, 5, 6]))
console.log(twosDifference([1, 3, 4, 6]))

// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]
// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]
// [1, 23, 3, 4, 7] should return [[1, 3]]
// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
// [1, 3, 4, 6] should return [[1, 3], [4, 6]]