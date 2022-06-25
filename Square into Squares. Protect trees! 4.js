function decompose(n) {
  // make result array, variable rem = n square
  // push n-1 to array, subtract n-1 square from rem
  // while rem > 0
  function calculate(n, rem){
    if(rem === 0){
      return [n]
    }
    for(let i = n - 1; i > 0; i--){
      if(rem - i**2 >= 0){
        let r = calculate(i, rem - i**2)
        if(r !== null){
          r.push(n)
          return r
        }
      }
    }
    return null
  }
  // calculate(n, n**2)
  // return calculate(n, n**2) === null ? null : calculate(n, n**2)

  let result = calculate(n, n * n);
  return result == null ? null : result.slice(0, result.length - 1);
}
  console.log(decompose(50)) //, [1,3,5,8,49]);
  console.log(decompose(12)) //, [1,2,3,7,9]);
  console.log(decompose(44)) //, [2,3,5,7,43]);
  console.log(decompose(625)) //, [2,5,8,34,624]);
  console.log(decompose(5)) //, [3,4]);

// Parameters: positive ineger
// Returns: Incrasing sequence of numbers where their square sum = input square
// Examples:
  // decompose(50)) //, [1,3,5,8,49]);
  // decompose(12)) //, [1,2,3,7,9]);
  // decompose(44)) //, [2,3,5,7,43]);
  // decompose(625)) //, [2,5,8,34,624]);
  // decompose(5)) //, [3,4]);
// Pseudocode:
  // make result array, variable rem = n square
  // push n-1 to array, subtract n-1 square from rem
  // while rem > 0
    // get floor of rem sqrt
    // push to result array, subtract value square from rem
  // return result