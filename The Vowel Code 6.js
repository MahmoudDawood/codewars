function encode(string) {
  const vowels = {a: 1, e: 2, i: 3, o: 4, u: 5}
  return string.split('').map(x => vowels[x] ? vowels[x] : x).join('')
}

function decode(string) {
  const vowels = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'}
  return string.split('').map(x => vowels[x] ? vowels[x] : x).join('')
}

console.log(encode('hello'))
console.log(decode('h3 th2r2'))