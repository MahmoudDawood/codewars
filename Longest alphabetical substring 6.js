function longest(str) {
  let startIdx = 0, maxIdx = 0, max = 1

  // Iterate over string from second char
  for(let i = 1; i < str.length; i++){
    // If the order of current char is less than prev >> continue
    // Else >> if current - start idx > longest, allocate it to longest & max idx, idx = curr
    if(str[i] < str[i - 1]){
      // console.log("IN", {startIdx, i})
      if(i - startIdx > max){
        max = i - startIdx
        maxIdx = startIdx
      }
      startIdx = i
    }
    
    // else if(i == str.length - 1) 
    // CASE OF WHOLE STRING IS A CORRECT SEQ
  }
  if(str.length - startIdx > max){
    // console.log("new max")
    // console.log({startIdx, max})
    max = str.length - startIdx
    maxIdx = startIdx
  }
  // return n (longest) chars sequence starting at max idx
  return str.slice(maxIdx, maxIdx + max)
}

console.log(longest('asd'), 'as')
console.log(longest('nab'), 'ab')
console.log(longest('abcdeapbcdef'), 'abcde')
console.log(longest('asdfaaaabbbbcttavvfffffdf'), 'aaaabbbbctt')
console.log(longest('asdfbyfgiklag'), 'fgikl')
console.log(longest('z'), 'z')
console.log(longest('zyba'), 'z')

console.log(longest("asdfaaaabbbbcttavvfffffdf"), "aaaabbbbctt")
console.log(longest("abcd"), "abcd")

// Params: A string
// Returns: Longest substring in alphabetical order
// Ex:
  // "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".
// Pseudocode:
  // Iterate over string from second char
    // If the order of current char is less than prev >> continue
    // Else >> if current - start idx > longest, allocate it to longest & max idx, idx = curr
  // return n (longest) chars sequence starting at max idx