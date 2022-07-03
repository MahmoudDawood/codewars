function removeNb (n) {
  // Get sum of sequence {0, n}
  let sum = 0, a = 1, b = n, result = []
  for(let i = 1; i <= n; i++) sum += i
  // make two numbers, a starting @ 1 & b starting @ n
  // while a < n + 1 && b > 0
  while(a < n + 1 && b > 0){
    // If sum - product a,b - sum a,b = 0 >> append to result arr as a tuple [a, b]
    if(sum - (a + b) - (a * b) === 0) result.push([a++, b])
    // else if sum - product a,b - sum a,b > 0 >> a++
    else if(sum - (a + b) - (a * b) > 0) a++
    // else (< 0) >> b--
    else b--
  }
  // return result
  return result
}
// WE COULD HAVE GOTTEN B AS A FUNCTION OF A
// CHANGE A++ AND CHECK IF A,B SATISFIES
// >>>>>>>>>>>>>>>> 1 + 2 + 3 + ..... + n = n * (n+1) / 2
console.log(removeNb(26))
console.log(removeNb(100))

// Parameters: A positive integer > 0
// Returns: 2 number < input, where sum of sequence{0, n} excluding them = their product
// Examples:
  // (removeNb(26))   [[15,21], [21,15]]);
  // (removeNb(100))  []);
// Pseudocode:
  // Get sum of sequence {0, n}
  // make two numbers, a starting @ 1 & b starting @ n
  // while a < n + 1 && b > 0
    // If sum - product a,b - sum a,b = 0 >> append to result arr as a tuple [a, b]
    // else if sum - product a,b - sum a,b > 0 >> a++
    // else (< 0) >> b--
  // return result