function solution(input, markers) {
  // Split string into lines
  // console.log(input.split('\n'))
  // input.split('\n').forEach(x => console.log(x))
  return input.split('\n').map(x => {
    markers.forEach(comment => {
      if(x.includes(comment)) x = x.split(comment)[0].trim()
    })
    return x
  }).join('\n')

  // Clear comments
    // Find first index of comment in each line and strip it till the end
  // Clear white spaces
    // for each element, while there's white space @ end strip it
  // Join string lines and return
};
console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))


// Parameters: String with multiple lines '\n' with comments & comments markers notation in array
// Returns: String with strippped comments & white spaces at the end
// Examples:
  // solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
  // result should == "apples, pears\ngrapes\nbananas"
// Pseudocode:
  // Split string into lines
  // Clear comments
    // Find first index of comment in each line and strip it till the end
  // Clear white spaces
    // for each element, while there's white space @ end strip it
  // Join string lines and return