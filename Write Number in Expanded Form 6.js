function expandedForm(num) {
  /* 
    Make a result array of strings
    Iterate over num digits
      if not last digit and not equal to zero, append it & complete till last digit with zeros
    Return results array joined by ' + '
  */
  const results = [], arr = num.toString().split('')
  // console.log(arr)
  arr.forEach((digit, i) => {
    if(digit != '0'){
      if(i < arr.length - 1) results.push(digit + arr.slice(i+1).reduce((acc, curr) => acc + '0', ''))
      else if(i == arr.length - 1) results.push(digit)
    }
  })
  // console.log(results)
  return results.join(' + ')
}
// console.log([6, 2, 3, 4].reduce((acc, curr) => acc + '0'), '')
console.log(expandedForm(12), '10 + 2')
console.log(expandedForm(42), '40 + 2')
console.log(expandedForm(70304), '70000 + 300 + 4')