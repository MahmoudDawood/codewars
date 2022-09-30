function titleCase(title, minorWords) {
  // first word must be capitalized
  // else if word is in str lower case put it as it is
  arr = minorWords ? minorWords.split(' ').map(x => x.toLowerCase()) : []
  return title.toLowerCase().split(' ').map((word, i) => i && arr.indexOf(word) != -1 ? word : word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ')
}

console.log(titleCase('a clash of KINGS', 'a an the of')) // should return: 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // should return: 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')) // should return: 'The Quick Brown Fox'
