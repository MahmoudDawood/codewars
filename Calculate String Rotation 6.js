// function shiftedDiff(first, second) {
//   for(let i = 0; i < first.length; i++)
//     if(first.slice(first.length - i) + first.slice(0, first.length - i) == second) return i
//   return -1
// }
function shiftedDiff(first, second) {
  if (first.length != second.length) return -1
  return (second + second).indexOf(first)
}

console.log(shiftedDiff("coffee", "eecoff"))
console.log(shiftedDiff("eecoff", "coffee"))
console.log(shiftedDiff("moose", "Moose"))
console.log(shiftedDiff("isn't", "'tisn"))
console.log(shiftedDiff("Esham", "Esham"))
console.log(shiftedDiff("dog", "god"))

// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "moose", "Moose" => -1
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0
// "dog", "god" => -1
