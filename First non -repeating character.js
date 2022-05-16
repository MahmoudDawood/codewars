// PREP
function firstNonRepeatingLetter(s) {
  // const obj = {}
  // s.split('').forEach(x => obj[x.toLowerCase()] ? obj[x.toLowerCase()]++ : obj[x.toLowerCase()] = 1)
  // for(let i = 0; i < s.length; i++) if(obj[s[i].toLowerCase()] === 1) return s[i]
  // return ""

  const x = s.toLowerCase()
  for(let i = 0; i < x.length; i++) if(x.indexOf(x[i]) === x.lastIndexOf(x[i])) return s[i]
  return ""

}
// console.log(firstNonRepeatingLetter('a'))
// console.log(firstNonRepeatingLetter('stress'))
// console.log(firstNonRepeatingLetter('sTreSS'))
// console.log(firstNonRepeatingLetter('moonmen'))
// console.log(firstNonRepeatingLetter('aa'))
// console.log(firstNonRepeatingLetter(''))

// Parameters: string s of upper and lower cases
// Returns: First non repeating character, if none return empty string
// Examples: 
  //  Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
  //  Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
  //  Test.assertEquals(firstNonRepeatingLetter('sTreSS'), 'T');
  //  Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
  //  Test.assertEquals(firstNonRepeatingLetter('aa'), '');
  //  Test.assertEquals(firstNonRepeatingLetter(''), '');
// Pseudocode: 
  // iterate over chars, if existing as upper or lower add 1 to it, else create with value = 1
  // iterate over object parameters and return if parameter === 1
  // return empty array