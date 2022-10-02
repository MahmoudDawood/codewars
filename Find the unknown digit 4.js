function solveExpression(exp) {
  // Make an array of missing numbers in expression from (0 - 9)
  const possible = []
  for(let i = 0; i < 10 ; i++){
    if(exp.indexOf(i) == -1) possible.push(i)
  }
  // console.log(possible)

  // Iterate over it
  for(const n of possible){
    // replace the question mark with the element
    // console.log(n, exp.replaceAll('?', n).replace('--', '+').split('='))
    const lhs = eval(exp.split('?').join(n).replace('--', '+').split('=')[0])
    const rhs = eval(exp.split('?').join(n).replace('--', '+').split('=')[1])
    // console.log({n, lhs, rhs})
    if(lhs == rhs)
      if(n == 0 && exp.indexOf('??') != -1) continue
      else return n
    // evaluate the LHS and see if it equal to the RHS >> return the element

  }
  return -1
  // return -1
}
console.log('1,2,3'.indexOf(2))
console.log(solveExpression('1+1=?'), 2)
console.log(solveExpression('123*45?=5?088'), 6)
console.log(solveExpression('-5?*-1=5?'), 0)
console.log(solveExpression('19--45=5?'), -1)
console.log(solveExpression('??*??=302?'), 5)
console.log(solveExpression('?*11=??'), 2)
console.log(solveExpression('??*1=??'), 2)
console.log(solveExpression('??+??=??'), -1)

// Params: Mathematical expression with '?'s in some digits places
// Returns: The lowest suffice missing number not in the expression , or -1 if not found
// Examples:
  // ['1+1=?', 2],
  // ['123*45?=5?088', 6],
  // ['-5?*-1=5?', 0],
  // ['19--45=5?', -1],
  // ['??*??=302?', 5],
  // ['?*11=??', 2],
  // ['??*1=??', 2],
  // ['??+??=??', -1];
// Pseudocode:
  // Make an array of missing numbers in expression from (0 - 9)
  // Iterate over it
    // replace the question mark with the element
    // evaluate the LHS and see if it equal to the RHS >> return the element
  // return -1