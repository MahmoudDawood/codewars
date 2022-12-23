function differentiate(equation, point){
  // Insert addition sign before each '-' sign
  // Split the equation into tokens at addition
  // Split each on "x"
    // Remove elements with no right value or value = 0
  return equation.split('').map((x, i) => i && x == '-' ? '+-' : x).join('')
    .split('+').map(x => x.split('x')).filter(el => el.length == 2)
    .map(el => {
      if(el[0] == '') el[0] = 1
      else if(el[0] == '-') el[0] = -1
      if(el[1].includes('^')) el[1] = el[1].slice(1)
      if(el[1] == '') el[1] = 1
      return [+el[0], +el[1]]
    }).map(el => el[0] * el[1] * point**(el[1] - 1)).reduce((acc, curr) => acc + curr)
    
  // Iterate over tokens
    // If left is '' or '-', make it a 1 or -1
    // If right starts with '^' remove first char
    // else if right is '' set it to 1
  // see output sample----------------
  // Iterate over tokens
    // Multiply right by left, subtract one from right, raise right to the power of point

    // Multiply right and left together
    // Add all elements and return their value

}

// Params: A polynomial equation, A number to substitute with
// Returns: The substitution with given number in the given equation differentiated
// Ex: 
  console.log(differentiate("12x+2", 3), 12) 
  console.log(differentiate("x^2+3x+2", 3), 9)
  console.log(differentiate("12x+2", 3), 12);
  console.log(differentiate("x^2-x", 3), 5);
  console.log(differentiate("-5x^2+10x+4", 3), -20);