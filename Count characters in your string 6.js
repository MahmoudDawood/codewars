function count(str) {
  const obj = {}
  str.split('').forEach(x => obj[x] = obj[x] ? obj[x] + 1 : 1)
  return obj

  // return str.split('').reduce((acc, curr) => acc[curr]||0 + 1 ,{})
}

console.log(count('aba'))