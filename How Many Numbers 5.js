function maxSumDig(nmax, maxsm) {
  function fits(n) {
    const digits = n.toString()
    for(let i = 0; i < digits.length - 3; i++){
      let sum = 0
      for(let j = i; j < i + 4; j++) sum += parseInt(digits[j])
      if(sum > maxsm) return false
    }
    return true
  }
  const ans = []
  // Iterate over number from 1 to nmax
    // check if all digit's 4 sums <= maxsm, append to answer (function)
  for(let i = 1000; i <= nmax; i++) if(fits(i)) ans.push(i)
  // Get answers mean >> get closest one to it
  const mean = ans.reduce((acc, curr) => acc += curr) / ans.length
  let nearest = ans.find(x => x >= mean)
  nearest = nearest - mean < mean - ans[ans.indexOf(nearest) - 1] ? nearest : ans[ans.indexOf(nearest) - 1]
  // Return [answers arr]
  return [ans.length, nearest, Math.round(mean * ans.length)]
}

console.log(maxSumDig(2000, 3))
console.log(maxSumDig(2000, 4))
console.log(maxSumDig(2000, 7))
console.log(maxSumDig(3000, 7))
// Paramers: Maximum number value & maximum 4 consecutive digits sum
// Returns: [Count of numbers applicable, Closest number to answers mean (smallest?), answers sum]
// Examples:
// max_sumDig(2000, 3) -------> [11, 1110, 12555]
// (1) -There are 11 found numbers: 1000, 1001, 1002, 1010, 1011, 1020, 1100, 1101, 1110, 1200 and 2000
// (2) - The mean of all the found numbers is:
//       (1000 + 1001 + 1002 + 1010 + 1011 + 1020 + 1100 + 1101 + 1110 + 1200 + 2000) /11 = 1141.36363,  
//       so 1110 is the number that is closest to that mean value.
// (3) - 12555 is the sum of all the found numbers
//       1000 + 1001 + 1002 + 1010 + 1011 + 1020 + 1100 + 1101 + 1110 + 1200 + 2000 = 12555
// max_sumDig(2000, 4) -----> [21, 1120, 23665]
// max_sumDig(2000, 7) -----> [85, 1200, 99986]
// max_sumDig(3000, 7) -----> [141, 1600, 220756]
// Pseudocode:
  // Iterate over number from 1 to nmax
    // check if all digit's 4 sums <= maxsm, append to answer (function)
  // Get answers mean >> get closest one to it
  // Return [answers arr]