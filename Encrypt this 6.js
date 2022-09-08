function encrypt(text) {
  // For each word in give string
    // Get it's first character ascii code
      // Get it's first and last element, swap them
  return text.split(' ').map(word => {
    const first = word.charCodeAt(0)
    const last = word.slice(-1)
    return word.length > 2 ? first + last + word.slice(2, -1) + word[1] : word.charCodeAt(0) + word.slice(1)
  }).join(' ')
}

// ("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");

// console.log('abcde'.slice(-1))
// console.log(encrypt('Hello'))
// console.log(encrypt('good'))
// console.log(encrypt('hello world'))
console.log(encrypt("A wise old owl lived in an oak"))
console.log("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")