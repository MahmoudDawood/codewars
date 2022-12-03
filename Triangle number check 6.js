function isTriangleNumber(number) {
  let lvl = 1
  while(number > 0) number -= lvl++
  return number ? false : true
}

console.log(isTriangleNumber('HI'))
console.log(isTriangleNumber(3))
console.log(isTriangleNumber(6))
console.log(isTriangleNumber(8))

// Params: Length of an equilateral triangle points
// Returns: If this number of points could form an equilateral triangle
// Ex: 
//   1
//  2 3
// 4 5 6

//    1
//   2 3
//  4 5 6
// 7 8
