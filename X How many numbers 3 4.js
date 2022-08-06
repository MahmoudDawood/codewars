function findAll(sum, digits) {
  // Make array of results, starting array at 1s
  let results = {}, arr = Array(digits).fill(1)
  // console.log(arr)
  let cnt = arr.length - 1, prev = arr.length - 2
  // store all values count aka array length - 1
  while(prev >= 0 && arr.length <= digits){
    // If the remainder fits as, previous <= rem <= 9, put it in last place && push to results
    // console.log({sum, cnt, prev})
    if(sum - cnt >= arr[digits - 2] && sum - cnt <= 9 && arr[digits - 1] >= arr[digits - 2]) {
      arr[digits - 1] = sum - cnt
      results[arr.join('')] = 1
      // if(Object.keys(results).length < 3)console.log(results)
      prev = digits - 2
    }
    // append 1 to previous digit and recalculate starting at last = prev until not applicable

    // reset to next digits
    arr[prev]++
    for(let j = prev + 1; j < arr.length; j++){
      arr[j] = arr[prev]
    }
    cnt = arr.reduce((acc, curr) => acc + curr) - arr[prev]
    
    if(cnt + arr[prev] > sum) prev--
  }
  // append previous value and all following values and calculate again
  const temp = Object.keys(results)
  // console.log(temp)
  return [temp.length, temp[0], temp.pop()]
}

console.log(findAll(10, 3)) // => [8, "118", "334"]
console.log(findAll(27, 3)) // => [1, "999", "999"]
console.log(findAll(84, 4)) // => []
console.log(findAll(35, 6)) // => [123, '116999', '566666']

// Params: sum between 20, 65 && digits between 2, 17
// Returns: Count of applicable numbers in ascending digits
// Examples: 
  // (findAll(10, 3)) // => [8, "118", "334"]
  // (findAll(27, 3)) // => [1, "999", "999"]
  // (findAll(84, 4)) // => []
  // (findAll(35, 6)) // => [123, '116999', '566666']
// Pseudocode:
  // Make array of results, starting array at 1s
  // store all values count aka array length - 1
  // If the remainder fits as, previous <= rem <= 9, put it in last place && push to results
  // append 1 to previous digit and recalculate starting at last = prev until not applicable
  // append previous value and all following values and calculate again