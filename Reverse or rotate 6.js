function revrot(str, sz) {
  // if sz < 1 or sz > input length or input is empty return ""
  if(sz < 1 || sz > str.length || str == "") return ""

  // Make an array of n chucks
  let arr = []
  for(let i = 0; i + sz <= str.length; i += sz) arr.push(str.slice(i, sz + i))

  // for each chunk calculate it's cube sum
  return arr.map(x => {
    // console.log(x.split('').reduce((acc, curr) => acc + (+curr) ** 3, 0))
    if(x.split('').reduce((acc, curr) => acc + (+curr) ** 3, 0) % 2 == 0) return x.split('').reverse().join('')
    return x.slice(1) + x[0]
  }).join('')
    // if sum is divisible by two >> reverse it
    // else shift it by 1
  // return joined array
}

console.log(revrot("123456987654", 6)) //--> "234561876549"
console.log(revrot("123456987653", 6)) //--> "234561356789"
console.log(revrot("66443875", 4)) //--> "44668753"
console.log(revrot("66443875", 8)) //--> "64438756"
console.log(revrot("664438769", 8)) //--> "67834466"
console.log(revrot("123456779", 8)) //--> "23456771"
console.log(revrot("", 8)) //--> ""
console.log(revrot("123456779", 0)) //--> "" 
console.log(revrot("563000655734469485", 4)) //--> "0365065073456944"

// Params: string of digits, int n
// Returns: i/p string splitted to chuncks of n, if each chunk sum of cubes even >> reverse
  // else shift it by 1 to left
// Examples:
  // revrot("123456987654", 6) --> "234561876549"
  // revrot("123456987653", 6) --> "234561356789"
  // revrot("66443875", 4) --> "44668753"
  // revrot("66443875", 8) --> "64438756"
  // revrot("664438769", 8) --> "67834466"
  // revrot("123456779", 8) --> "23456771"
  // revrot("", 8) --> ""
  // revrot("123456779", 0) --> "" 
  // revrot("563000655734469485", 4) --> "0365065073456944"
// Pseudocode:
  // if sz < 1 or sz > input length or input is empty return ""
  // Make an array of n chucks
  // for each chunk calculate it's cube sum
    // if sum is divisible by two >> reverse it
    // else shift it by 1
  // return joined array