function listSquared(m, n) {
  // Iterate over each number in range
  const devisors = (num) => {
    const result = []
    for(let i = 1; i <= Math.sqrt(num); i++){
      if(num % i === 0 && i == Math.sqrt(num)) result.push(i)
      else if(num % i === 0) result.push(i, num / i)
    }
    return result
  }
  const arr = []

  // get all divisors from 1 -> sqrt(int), square them and add, check if result is a square
  for(let i = m; i <= n; i++){
    const dev = devisors(i)
    const sum = dev.map(x => x * x).reduce((acc, curr) => acc += curr)
    if(Number.isInteger(Math.sqrt(sum))) arr.push([i, sum])
    
  }
  return arr
  // If exists add to array of tuples as [[int, sum of divisors square]]
}

console.log(listSquared(1, 250)) //, [[1, 1], [42, 2500], [246, 84100]])
console.log(listSquared(42, 250)) //, [[42, 2500], [246, 84100]])
console.log(listSquared(250, 500)) //, [[287, 84100]])

// Params: 2 integers, 1 <= m <= n
// Returns: tuple of integers between m & n where the sum of the divisors squared is itself a square
// Examples:
  // (deepEqual(listSquared(1, 250))) //, [[1, 1], [42, 2500], [246, 84100]])
  // (deepEqual(listSquared(42, 250))) //, [[42, 2500], [246, 84100]])
  // (deepEqual(listSquared(250, 500))) //, [[287, 84100]])
// Pseudocode:
  // Iterate over each number in range
  // get all divisors from 1 -> sqrt(int), square them and add, check if result is a square
  // If exists add to array of tuples as [[int, sum of divisors square]]