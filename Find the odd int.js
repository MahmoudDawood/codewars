function findOdd(A) {
  const obj = {}
  A.forEach(x => typeof obj[x] === 'number' ? obj[x]++ : obj[x] = 1)
  return Number(Object.keys(obj).find(x => obj[x]%2 !== 0))
}