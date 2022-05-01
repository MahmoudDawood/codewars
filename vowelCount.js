function getCount(str) {
  return str.split('').filter(x => (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' )).length
}