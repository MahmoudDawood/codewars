function tripledouble(num1,num2) {
  // Iterate over num1 digits, start from third position
    // If two prior numbers where the same >> add this digit to resulting array
  return num1.toString().split('').reduce((acc, curr, i , arr) => {
    return curr == arr[i - 1] && curr == arr[i - 2] ? acc.concat(curr) : acc
  }, []).filter(digit => num2.toString().includes(digit + digit)).length ? 1 : 0
  // Iterate over resulting array digits
    // If any digit of them exists consecutive twice in num2 >> return 1
  // return 0
}

// Params: Two numbers
// Returns: A digit existing 3 consecutive times in num1, & 2 consecutive times in num2
// Examples:
console.log(tripledouble(451999277, 41177722899)) // 1 // num1 has straight triple 999s and // num2 has straight double 99s
console.log(tripledouble(1222345, 12345)) // 0 // num1 has straight triple 2s but num2 has only a single 2
console.log(tripledouble(12345, 12345)) // 0
console.log(tripledouble(666789, 12345667)) // 1
