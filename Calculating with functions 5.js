function zero(op) {
  if(op) return Math.floor(eval('0' + op))
  return 0
}
function one(op) {
  if(op) return Math.floor(eval('1' + op))
  return 1
}
function two(op) {
  if(op) return Math.floor(eval('2' + op))
  return 2
}
function three(op) {
  if(op) return Math.floor(eval('3' + op))
  return 3
}
function four(op) {
  if(op) return Math.floor(eval('4' + op))
  return 4
}
function five(op) {
  if(op) return Math.floor(eval('5' + op))
  return 5
}
function six(op) {
  if(op) return Math.floor(eval('6' + op))
  return 6
}
function seven(op) {
  if(op) return Math.floor(eval('7' + op))
  return 7
}
function eight(op) {
  if(op) return Math.floor(eval('8' + op))
  return 8
}
function nine(op) {
  if(op) return Math.floor(eval('9' + op))
  return 9
}

function plus(val) {
  return '+' + val
}
function minus(val) {
  return '-' + val
}
function times(val) {
  return '*' + val
}
function dividedBy(val) {
  return '/' + val
}


// console.log(seven(times(five())))//, 35);
// console.log(four(plus(nine())))//, 13);
// console.log(eight(minus(three())))//, 5);
// console.log(six(dividedBy(two())))//, 3);