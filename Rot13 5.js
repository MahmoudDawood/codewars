function rot13(message){
  // Iterate over chars
  return message.split('').map(x => {
    // if char is a letter
    if(x.toUpperCase() !== x.toLowerCase()){
      let n = x.charCodeAt(0)
      
      // if Small letter
      if('z'.charCodeAt(0) >= n && n >= 'a'.charCodeAt(0)){ // Small letter
        n += 13
        return n > 'z'.charCodeAt(0) ?
          String.fromCharCode(((n % 'z'.charCodeAt(0)) + 'a'.charCodeAt(0)) - 1) :
          String.fromCharCode(n)
      }
      else if('Z'.charCodeAt(0) >= n && n >= 'A'.charCodeAt(0)){ // Capital letter
        n += 13
        return n > 'Z'.charCodeAt(0) ?
          String.fromCharCode(((n % 'Z'.charCodeAt(0)) + 'A'.charCodeAt(0)) - 1) :
          String.fromCharCode(n)
      }
    }
    return x
  }).join('')
}

console.log(rot13('Ruby is cool!'))

// Parameters: String
// Returns: A string with only letters shifted by 13 chars
// Examples:
  // Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
  // Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))  
// Pseudocode:
  // Iterate over chars
  // if char is a letter
    // add 13 to it
      // if it exceeded it's limit 'z' || 'Z'
        // get it's % limit + beginning
  // return the string