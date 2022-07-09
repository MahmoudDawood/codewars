function toUnderscore(string) {
  // iterate over string chars
  return string.toString().split('').map((x, i) => x === x.toLowerCase() ? x : i !== 0 ? '_' + x.toLowerCase() : x.toLowerCase()).join('')
    // if char is upper case >> insert a '-' and convert to lower case
    // if(x !== x.toLowerCase())
}
console.log(toUnderscore("TestController"))
console.log(toUnderscore("MoviesAndBooks"))
console.log(toUnderscore("App7Test"))
console.log(toUnderscore("1"))
console.log(toUnderscore(5))
// Parameters: Pascal case string
// Returns: snake case string
// Examples:
  // "TestController"  -->  "test_controller"
  // "MoviesAndBooks"  -->  "movies_and_books"
  // "App7Test"        -->  "app7_test"
  // 1                 -->  "1"
// Pseudocode:
  // iterate over string chars
    // if char is upper case >> insert a '-' and convert to lower case