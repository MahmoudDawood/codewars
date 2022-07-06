function multiply(a, b){
  // declare left, right, rem, str, result []
  let left, right, rem = 0, str = "", result = []
  //----------- Each digit multiplication --------//
  // Iterate over second stiring (reversed), assigning each value to right as a number
  for(let i = a.length - 1; i >= 0; i--){
    // Iterate over first string (reversed), assigning each value to left as a number
    result[i] = ""
    // add zeros
    for(let k = i ; k < a.length - 1; k++) result[i] += '0'
    for(let j = b.length - 1; j >= 0; j--){
      // multiply right and left then add rem, adding result % 10 to start of result[right]
      const temp = +a[i] * +b[j] + rem
      result[i] += "" + (temp % 10)
      // rem = floor result / 10
      rem = Math.floor(temp / 10)
    }
    result[i] += rem ? rem : ''
    rem = 0
  }
  //--------- Summing ------------//
  // reverse each result string & get maximum string length in result
  // result = result.map(x => x.split('').reverse().join(''))
  const max = result.reduce((acc, curr) => curr.length > acc ? curr.length : acc, 0)
  // iterate as maximum length
  for(let i = 0; i < max; i++){
    // for each string add frist char as number or 0  & rem to sum
    const sum = result.reduce((acc, curr) => acc += curr[0] ? +curr[0] : 0, 0) + rem
    // add to str first digit of sum and put the remainder in rem
    str += sum % 10
    rem = Math.floor(sum / 10)
    // chop first element in each string
    result = result.map(x => x.slice(1))
  }
  str += rem ? rem : ''
  str = str.split('').reverse(). join('')
  while(str[0] === '0' && str.length > 1) str = str.slice(1)
  return str
  // cut all beginning zeros of str & return
}

console.log(multiply("5830", "23958233"))     // "139676498390"
console.log(multiply("2", "3"))    // "6"
console.log(multiply("30", "69"))    // "2070"
console.log(multiply("11", "85"))    // "935"
console.log(multiply("2" ,"0"))    // "0"
console.log(multiply("0", "30"))    // "0"
console.log(multiply("0000001", "3"))    // "3"
console.log(multiply("1009", "03"))    // "3027"
console.log(multiply("98765", "56894"))    // "5619135910"
console.log(multiply("1020303004875647366210", "2774537626200857473632627613"))    // "2830869077153280552556547081187254342445169156730"
console.log(multiply("58608473622772837728372827", "7586374672263726736374"))    // "444625839871840560024489175424316205566214109298"
console.log(multiply("9007199254740991", "9007199254740991"))    // "81129638414606663681390495662081"

// Parameters: Two integers which could be VERY large
// Returns: Their multiplication as a string
// Examples:
  // (multiply("5830", "23958233")     // "139676498390"
  // (multiply("2", "3"))    // "6"
  // (multiply("30", "69"))    // "2070"
  // (multiply("11", "85"))    // "935"
  // (multiply("2" ,"0"))    // "0"
  // (multiply("0", "30"))    // "0"
  // (multiply("0000001", "3"))    // "3"
  // (multiply("1009", "03"))    // "3027"
  // (multiply("98765", "56894"))    // "5619135910"
  // (multiply("1020303004875647366210", "2774537626200857473632627613"))    // "2830869077153280552556547081187254342445169156730"
  // (multiply("58608473622772837728372827", "7586374672263726736374"))    // "444625839871840560024489175424316205566214109298"
  // (multiply("9007199254740991", "9007199254740991"))    // "81129638414606663681390495662081"
// Pseudocode:
  // declare left, right, rem, str, result []
  //----------- Each digit multiplication --------//
  // Iterate over second stiring (reversed), assigning each value to right as a number
    // Iterate over first string (reversed), assigning each value to left as a number
      // multiply right and left then add rem, adding result % 10 to start of result[right]
      // rem = floor result / 10
  //--------- Summing ------------//
  // reverse each result string & get maximum string length in result
  // iterate as maximum length
    // for each string add frist char as number or 0  & rem to sum
    // add to str first digit of sum and put the remainder in rem
    // chop first element in each string
  // cut all beginning zeros of str & return
