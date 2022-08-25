function grabscrab(anagram, dictionary) {
  return dictionary.map(word => [...word].sort().join(''))
    .reduce((acc, curr, i) => curr == [...anagram].sort().join('') ? acc.concat([dictionary[i]]) : acc, [])
}

console.log(grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] ))