function permutations(string) {
  // Make a recursive (backtracking) function to add all possible permutations to an array
  function swap(arr, s, e){
    let temp = arr[s]
    arr[s] = arr[e]
    arr[e] = temp
  }
  function allPossiblePermutations (str, start) {
    if(start === string.length - 1) arr.push(str)
    else{
      for(let i = 0; i < string.length - start; i++){
        let temp = str.split('')
        swap(temp, start, start + i)
        // console.log(i, temp, start)
        allPossiblePermutations(temp.join(''), start + 1)
        swap(temp, start, start + i)
      }
    }
  }
  const arr = []
  allPossiblePermutations(string, 0)

  // return unique array elements
  return [...new Set(arr)]
}
console.log(permutations('a'))
console.log(permutations('ab'))
console.log(permutations('aabb'))

// Parameters: non empty string
// Returns: All possible unique permutations in an array
// Examples:
  // (permutations('a'), ['a']);
  // (permutations('ab').sort(), ['ab', 'ba'].sort());
  // (permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
// Pseudocode:
  // Make a recursive function to add all possible permutations to an array
  // Store the array elements to a set to get unique permutations
  // Spread an return set