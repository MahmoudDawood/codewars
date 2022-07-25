function findUniq(arr) {
  const eqSets = (x, y) => x.size === y.size && [...x].every(x => y.has(x))
  let unique

  for(let i = 0; i < arr.length; i++) {
    const temp = new Set(arr[i].toLowerCase().split('').filter(c => c !== ' '))
    if(i && !eqSets(unique, temp)) return arr[i] === arr[i+1] ? arr[i-1] : arr[i]
    unique = temp
  }
}

// const set = new Set([1, 2, 2, 3, ' '])
// const set1 = new Set([1, 2, 2, 3])
// console.log(eqSets(set, set1))
console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])) //, 'BbBb');
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])) //, 'foo');
console.log(findUniq([ 'silvia', 'vasili', 'victor' ])) //, 'victor');
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ])) //, 'Harry Potter');
console.log(findUniq([ '    ', 'a', ' ' ])) //, 'a');
console.log(findUniq(['o', 'p', 'p', 'p'])) //, 'a');

// Params: array of strings with similar letter excpet one
// Returns: Unique string
// Examples:
  // (findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])) //, 'BbBb');
  // (findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])) //, 'foo');
  // (findUniq([ 'silvia', 'vasili', 'victor' ])) //, 'victor');
  // (findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ])) //, 'Harry Potter');
  // (findUniq([ '    ', 'a', ' ' ])) //, 'a');
// Pseudocode:
  // Create an object for repetitive chars
  // Iterate over array, lower case chars, pick uniques, add to obj 1
  // If There's a (new) unique value in object >> return this string
  // If there's an abscent value at start of array >> return first string