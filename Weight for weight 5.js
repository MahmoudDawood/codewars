// PREP
function orderWeight(strng) {
  // Other more efficient solution
  const digit = (num) => num.split('').reduce((acc, curr) => acc + +curr, 0)
  return strng.split(' ').sort((a, b) => digit(a) - digit(b) || a.localeCompare(b)).join(' ')


  // Make array of ordered weights
  const result = [], arr = strng.split(' ')
  const sum = arr.map(x => x.split('').reduce((acc, curr) => acc + +curr, 0))
  // iterate and push minimum summed weight (if two are equal pick with alphabatical order)
  while(arr.length){
    let min = sum[0], idx = 0
    for(let i = 0; i < sum.length; i++){
      if(sum[i] < min) {
        min = sum[i]
        idx = i
      }
      else if(sum[i] === min &&
        arr[i].toString().localeCompare(arr[idx].toString()) < 0) {
          min = sum[i]
          idx = i
      }
    }
    result.push(arr[idx])
    arr.splice(idx, 1)
    sum.splice(idx, 1)
  }
  // join and return as string
  return result.join(' ')
}

console.log(orderWeight("35221 54 322153 141 104091 143 288153 50 287561 95 223613 61 259200 45 489313 144 206766 21 403008 116 73"))
// console.log(orderWeight("2000 10003 11 11 22"))
// console.log(orderWeight("103 123 4444 99 2000"))
// console.log(orderWeight("56 65 74 100 99 68 86 180 90"))
// "100 180 90 56 65 74 68 86 99"
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))

// Parameters: string with weights 
// Returns: a string with weights ordered by the sum of their digits
  //(If two sums are equal, we arrange them alphabatically)
// Examples: 
  // orderWeight("103 123 4444 99 2000"),
              // "2000 103 123 4444 99"
  // orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"),
              // "11 11 2000 10003 22 123 1234000 44444444 9999"
// Pseudocode: 
  // Make array of summed digits weights
  // iterate and push minimum summed weight to result (if two are equal pick with alphabatical order)
  // splice the sum and strng arr
  // join and return as string