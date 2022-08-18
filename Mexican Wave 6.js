function wave(str) {
  return str.split('').reduce((acc, curr, i) => {
    if(curr == ' ') return acc
    acc.push(str.slice(0, i) + curr.toUpperCase() + str.slice(i + 1))
    return acc
  } ,[])
}

console.log(wave("hello world")) // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// Params: string will always be lower case but maybe empty.
// Returns: Mexian Wave list of input string
// Examples:
  // wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Pseudocode:
  // 