function toCamelCase(str){
  function transform(x){
    return x[0].toUpperCase() + x.slice(1)
  }
  // loop over string
  // str.replace('-', '')
  // console.log(str.split('_'))
  // if(str.split('').find(x => x == '-') == -1)
  // else arr = str.split('-')
  // console.log('abd-dv'.split('').find(x => x === '-'))
  if(str.split('').find(x => x === '_')){
    return str.split('_').map((x, i) => {
      if(i !== 0) return transform(x)
      return x
    }).join('')
  } 
  return str.split('-').map((x, i) => {
    if(i !== 0) return transform(x)
    return x
  }).join('')
  
    // if char is '-' replace with ''
      // next char = upper case 
}

// Parameters: string splitted with '-'
// Return: Camel casing
// Examples:
console.log(toCamelCase('')) // '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")) // "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")) //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")) // "ABC", "toCamelCase('A-B-C') did not return correct value")

// Pseudocode:
  // loop over string
    // if char is '-' replace with ''
      // next char = upper case 