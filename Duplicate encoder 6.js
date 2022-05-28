function duplicateEncode(word){
  return word.toLowerCase().split('').map((x, i, w) => {
    return w.lastIndexOf(x) === w.indexOf(x) ? '(' : ')'
  }).join('')
} 
// console.log(duplicateEncode('din'))
// console.log(duplicateEncode('recede'))
// console.log(duplicateEncode('Success'))
// console.log(duplicateEncode('CodeWarrior'))
console.log(duplicateEncode('Supralapsarian'))
// '(()))())())()('
// ')()))()))))()('