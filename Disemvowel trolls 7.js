function disemvowel(str) {
  const vowels = {'a': 1, 'e': 1, 'o': 1, 'i': 1, 'u': 1}
  return str.split('').filter(c => !vowels[c.toLowerCase()]).join('')
}

console.log(disemvowel("What are you, a communist?"))