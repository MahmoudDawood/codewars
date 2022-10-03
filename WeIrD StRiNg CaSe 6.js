function toWeirdCase(string){
  return string.toLowerCase().split(' ').map(word => word.split('').map((c, i) => i % 2 ? c : c.toUpperCase()).join('')).join(' ')
}

console.log(toWeirdCase("String"))
console.log(toWeirdCase("Weird string case"))
console.log(toWeirdCase("This"))
console.log(toWeirdCase("is"))
console.log(toWeirdCase("This is a test"))