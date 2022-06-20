function likes(names) {
  // add first name to result array
  let result = names.length >= 1 ? names[0] : 'no one'
  // if second name is the last >> add ' and '
  if(names.length > 1) names.length === 2 ? result += ' and ' + names[1] : result += ', ' + names[1]
    // else >> add ', '
  // add name to result
  // if there's still names  >> add ' and '
  if(names.length > 2) names.length === 3 ? result += ' and ' + names[2] : result += ' and ' + (names.length - 2) + ' others'
    // if remainder names = 1 >> add it
    // else >> add 'n others' where n is number of remainder
  // if names length > 1 >> add ' like this', else >> add ' likes this'
  return result += names.length > 1 ? ' like this' : ' likes this'
}

console.log(likes(["Peter", "Alex", "Mark", "Max"]))
// Parameters: Array of names
// Returns: Likes string
// Examples:
  // []                                -->  "no one likes this"
  // ["Peter"]                         -->  "Peter likes this"
  // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
  // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
  // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Pseudocode:
  // add first name to result array
  // if second name is the last >> add ' and '
    // else >> add ', '
  // add name to result
  // if there's still names  >> add ' and '
    // if remainder names = 1 >> add it
    // else >> add 'n others' where n is number of remainder
  // if names length > 1 >> add ' like this', else >> add ' likes this'
  // return result string joined