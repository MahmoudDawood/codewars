function alphanumeric(string){
  // make a function to check string as lower case array
  const alpha = string.split('').filter(x => x.toLowerCase() !== x.toUpperCase()).length ? true : false
  const rem = string.split('').filter(x => x.toLowerCase() !== x.toUpperCase() || (parseInt(x) >= 0 && parseInt(x) <= 9)).join('')
  return alpha && rem === string ? true : false
    // if any is not a char or number >> return false
      // input string must contain at least one letter
  // return true
}
// console.log(parseInt('0'))
console.log(alphanumeric("Mazinkaiser")) //, true)
console.log(alphanumeric("hello world_")) //, false)
console.log(alphanumeric("PassW0rd")) //, true)
console.log(alphanumeric("     ")) //, false)

// Parameters: A string
// Returns: If this string is alphanumeric
// Examples:
  // (alphanumeric("Mazinkaiser")) //, true)
  // (alphanumeric("hello world_")) //, false)
  // (alphanumeric("PassW0rd")) //, true)
  // (alphanumeric("     ")) //, false)
// Pseudocode:
  // make a function to check string as lower case array
    // if any is not a char or number >> return false
      // input string must contain at least one letter
  // return true