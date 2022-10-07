function stringTransformer(str) {
  return str.split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(c => c == c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())
    .join('')
}

console.log(stringTransformer("Example string"))