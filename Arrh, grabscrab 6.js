function grabscrab(anagram, dictionary) {
  const original = [...anagram].sort().join('')
  const newDict = dictionary.map(word => [...word].sort().join(''))
  return newDict.reduce((acc, curr, i) => curr == original ? acc.concat([dictionary[i]]) : acc, [])
}

console.log(grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] ))