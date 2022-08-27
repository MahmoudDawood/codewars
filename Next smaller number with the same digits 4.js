function nextSmaller(n) {
  const arr = n.toString().split(''), obj = {}
  // Iterate over number's digits from end to start
    // if digits object contain a smaller digit than current digit
      // if current index is 0 & object digit is 0 >> return -1 
      // else >> swap & break
    // else add it to digits object with value of index
  for(let i = arr.length - 1; i >= 0; i--){
    const [value] = Object.keys(obj).reverse().filter(x => x < arr[i])
    if(value !== undefined){
      if(i == 0 && value == 0) return -1
      else {
        arr[obj[value]] = arr[i]
        arr[i] = value
        return parseInt(arr.splice(0, i + 1).join('') + arr.sort().reverse().join(''))
      }
    }
    else obj[arr[i]] = i
  }
  return -1
}

console.log(nextSmaller(21), 12)
console.log(nextSmaller(531), 513)
console.log(nextSmaller(2071), 2017)

console.log(nextSmaller(9), -1)
console.log(nextSmaller(111), -1)
console.log(nextSmaller(1357), -1)

console.log(nextSmaller(907), 709)
console.log(nextSmaller(1234567908), 1234567890)

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.splice(0, 2) + arr[0] + arr.splice(0))
// 1,2   3   3,4,5

// Parameters: Positive integer
// Returns: Next smaller positive integer with same digits, -1 else
// Examples:
  // nextSmaller(21) == 12
  // nextSmaller(531) == 513
  // nextSmaller(2071) == 2017
// Pseudocode:
  // Iterate over number's digits from end to start
    // if digits object contain a smaller digit than current digit
      // if current index is 0 & object digit is 0 >> return -1 
      // else >> swap & break
    // else add it to digits object with value of index
  // if not found or result starts with zero return -1
  // else return new number