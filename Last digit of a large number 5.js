var lastDigit = function(str1, str2){  
  // Take first digit of a
  // const a = +str1.slice(-1) % 10, b = +str2.slice(-2) % 4 + 4
  // check if b % 4 = 0, >> result is last digit of a ^ 4
  // else if(b % 4 === 0) return a**4 % 10
  return !+str2 ? 1 : Math.pow(+str1.slice(-1) % 10,  +str2.slice(-2) % 4 + 4) % 10
  // else >> result = last digit of a ^ (b % 4)
  // if a = 0 & b = 0, return 1, else return result
}
console.log(lastDigit("0", "1"))  // 0
console.log(lastDigit("0", "0"))  // 1
console.log(lastDigit("4", "1"))  // 4
console.log(lastDigit("4", "2"))  // 6
console.log(lastDigit("9", "7"))  // 9
console.log(lastDigit("10","10000000000"))  // 0
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"))  // 6
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))  // 7

// Params: Two large ints a & b
// Returns: Last digit in a ^ b
// Examples:
  // (lastDigit("4", "1"))  // 4
  // (lastDigit("4", "2"))  // 6
  // (lastDigit("9", "7"))  // 9
  // (lastDigit("10","10000000000"))  // 0
  // (lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"))  // 6
  // (lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))  // 7
// Pseudo:
  // Take first digit of a
  // check if b % 4 = 0, >> result is last digit of a ^ 4
  // else >> result = last digit of a ^ (b % 4)
  // if a = 0 & b = 0, return 1, else return result