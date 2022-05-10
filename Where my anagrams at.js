function anagrams(word, words) {
  // return words.filter(s => s.split('').sort().join('') === word.split('').sort().join(''))

  return words.map(x => x.split('').sort().join('')).reduce((acc, curr, i) => {
    if(curr == word.split('').sort().join('')) acc.push(words[i])
    return acc
  } , [])
}