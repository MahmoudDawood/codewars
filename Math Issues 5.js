Math.round = function(number){
  let fraction = number % 10
  while(fraction >= 1) fraction--
  // console.log(fraction+1)
  return fraction >= 0.5 ? number - fraction + 1 : number - fraction
}
Math.ceil = function(number){
  let fraction = number % 10
  while(fraction >= 1) fraction--
  // console.log(fraction)
  return fraction > 0 ? number - fraction + 1 : number
}
Math.floor = function(number){
  let fraction = number % 10
  while(fraction >= 1) fraction--
  // console.log(fraction)
  return number - fraction
}

console.log(Math.floor(5))
console.log(Math.ceil(1))

// Parameters: Non-negative number
// Returns: Math object functions: round(), ceil(), floor()
// Examples:
  // console.log(Math.round(0.4)) //  0     
  // console.log(Math.round(0.5)) //  1     
  // console.log(Math.ceil(0.4)) //  1     
  // console.log(Math.ceil(0.5)) //  1     
  // console.log(Math.floor(0.4)) //  0     
  // console.log(Math.floor(0.5)) //  0     
// Pseudocode:
  // find the fraction value