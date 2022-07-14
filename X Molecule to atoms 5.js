function parseMolecule(formula) {
  // Make a multiplicative variable of 1
  let multiplicative = 1, obj = {}, idx = formula.length - 1
  // Iterate over formula
  for(let i = 0; i < formula.length; i++){
    console.log(formula[i])
    // if capital letter, next is small, add them to obj, with value of next number (1 if no exist) * mulitplicative
    if(formula[i].toLowerCase() !== formula[i].toUpperCase() && formula[i] === formula[i].toUpperCase()){ // Capital
      if(i < formula.length - 1 && formula[i+1].toLowerCase() !== formula[i+1].toUpperCase() && formula[i+1] === formula[i+1].toLowerCase()){ // Small
        let n = ""
        for(let k = i + 2; Number.isInteger(+formula[k]); k++){
          n += formula[k]
        }
        n = n ? +n : 1
        console.log(n)
        if(obj[formula[i] + formula[i+1]])
          obj[formula[i] + formula[++i]] += n * multiplicative
        else obj[formula[i] + formula[++i]] = n * multiplicative
      }
      else{ // One Capital Element
        let n = ""
        for(let k = i + 1; Number.isInteger(+formula[k]); k++){
          n += formula[k]
        }
        n = n ? +n : 1
        console.log(n)
        // console.log(n, multiplicative)
        if(obj[formula[i]]) obj[formula[i]] += n * multiplicative 
        else obj[formula[i]] = n * multiplicative
        // console.log("obj: ", obj[formula[i]])
      }
    }
    else if(Number.isInteger(+formula[i])) continue
    // else iterate from end, multiply multiplicative by first integer, save location to start @ next time
    // as long as location > i
    else{
      for(let j = idx; j > i; j--){
        if(Number.isInteger(+formula[j])){
          let n = ""
          for(let k = j; Number.isInteger(+formula[k]); k--){
            n += formula[k]
            idx = k
          }
          n = n ? +n.split('').reverse().join('') : 1
          console.log(n)

          multiplicative *= n
          console.log("multi: ", multiplicative)
          break
        }
      }
    }

  }
  return obj
}
// var water = 'H2O';
// console.log(parseMolecule(water)); // return {H: 2, O: 1}
// var magnesiumHydroxide = 'Mg(OH)2';
// console.log(parseMolecule(magnesiumHydroxide)); // return {Mg: 1, O: 2, H: 2}
// var fremySalt = 'K4[ON(SO3)2]2';
// console.log(parseMolecule(fremySalt)); // return {K: 4, O: 14, N: 2, S: 4}
console.log(parseMolecule("C6H12O6")); // return {K: 4, O: 14, N: 2, S: 4}

// Parameters: Molcule string formula
// Returns: Object of atoms in molecule with it's count
// Examples:
  // var water = 'H2O';
  // parseMolecule(water); // return {H: 2, O: 1}
  // var magnesiumHydroxide = 'Mg(OH)2';
  // parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}
  // var fremySalt = 'K4[ON(SO3)2]2';
  // parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
// Pseudocode:
  // Make a multiplicative variable of 1
  // Iterate over formula
    // if capital letter, next is small, add them to obj, with value of next number (1 if no exist) * mulitplicative
    // else iterate from end, multiply multiplicative by first integer, save location to start @ next time