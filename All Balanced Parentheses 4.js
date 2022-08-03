function balancedParens (n) {
  // Make a recursive function with attribute (str, open, closed)
  const arr = []
  const compute = (str, open, closed) => {
    // return condition: closed = n
    if(closed === n) arr.push(str)

    // if open < n, append an open parenth & recall with (str, open + 1, closed)
    if(open < n) compute(str + '(', open + 1, closed)

    // if closed < n && closed < open, appen a closed parenth & recall with (str, open, closed + 1)
    if(closed < n && closed < open) compute(str + ')', open, closed + 1)
  }
  compute("", 0, 0)
  return arr
}

console.log(balancedParens(0)) // => [""]
console.log(balancedParens(1)) // => ["()"]
console.log(balancedParens(2)) // => ["()()","(())"]
console.log(balancedParens(3)) // => ["()()()","(())()","()(())","(()())","((()))"]
console.log(balancedParens(4)) // => ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]

// Parameters: +ve integer
// Returns: Array of all possible ways to balance n pairs of parentheses
// Examples:
  // balancedParens(0) // => [""]
  // balancedParens(1) // => ["()"]
  // balancedParens(2) // => ["()()","(())"]
  // balancedParens(3) // => ["()()()","(())()","()(())","(()())","((()))"]
// Pseudocode:
  // Make a recursive function with attribute (str, open, closed)
    // return condition: closed = n
    // if open < n, append an open parenth & recall with (str, open + 1, closed)
    // if closed < n && closed < open, appen a closed parenth & recall with (str, open, closed + 1)