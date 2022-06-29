function valueOfX(eq) {
  let [left, right] = eq.split('=')
  if(right.includes('x')) [left, right] = [right, left]
  // console.log(left, right)
  return (eval(right) - eval(left.replace('x', '0'))) * (left.includes('- x') ? -1 : 1)
  // // split input string into arr
  // let arr = eq.split('='), fn1, fn2
  // // console.log(arr)
  // // change arr element with no x to it's evaluated value
  // function cal(n, m) {
  //   fn2 = eval(arr[m])
  //   // evaluate other element but with x and it's previous sign taken out
  //   const idx = arr[n].indexOf('x')
  //   if(idx > 2) fn1 = eval(arr[n].slice(0, idx-2) + arr[n].slice(idx+1))
  //   else if (idx === 0) fn1 = eval(arr[n].slice(2))
  //   else fn1 = eval(arr[n].slice(3))
  //   if(fn1 === undefined) fn1 = 0
  // }
  // if(arr[0].includes('x')){ // x on left side
  //   cal(0, 1)
  // } else { // x on right side
  //   cal(1, 0)
  // }
  // // console.log(fn2, fn1)
  // return eq[eq.indexOf('x') - 2] === '-' ? fn1 - fn2 : fn2 - fn1 
  // // if sign is + >> x = eval 2 - eval 1, else >> eval 1 - eval 2
}

console.log(valueOfX('x + 1 = 9 - 2'))
console.log(valueOfX('x - 2 + 3 = 2'))
console.log(valueOfX('x = + 2 - 5 + 9'))
console.log(valueOfX('- 10 = x'))
console.log(valueOfX('- x = - 1'))
console.log(valueOfX('x - 0 + 0 = 0'))
console.log(valueOfX('x + 1 = 9 - 2'))
console.log(valueOfX('- 10 = x'))
console.log(valueOfX('x - 2 + 3 = 2'))
console.log(valueOfX('- x = - 1'))

// Parameters: Equation string
// Returns: Value of x
// Examples:
  // 'x + 1 = 9 - 2':   // 6
  // 'x - 2 + 3 = 2':   // 1 
  // 'x = + 2 - 5 + 9':  // 6 -----------
  // '- 10 = x'   //  -10 --------------
  // '- x = - 1'   //  1  ----------
  // 'x - 0 + 0 = 0'   //  0
  // 'x + 1 = 9 - 2'      //  6
  // '- 10 = x'           //  -10  ----------
  // 'x - 2 + 3 = 2'      //  1
  // '- x = - 1'          //  1  ------------
// Pseudocode:
  // split input string into arr
  // change arr element with no x to it's evaluated value
  // evaluate other element but with x and it's previous sign taken out
  // if sign is + >> x = eval 2 - eval 1, else >> eval 1 - eval 2
