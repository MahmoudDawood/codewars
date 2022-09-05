function rank(arr) {
  const obj = {}
  arr.forEach((x) => obj[x] ? obj[x]++ : obj[x] = 1)
  let max = Math.max(...Object.values(obj))
  return Math.max(...Object.keys(obj).filter(x => obj[x] == max))
}

console.log(rank([12, 10, 8, 12, 7, 6, 4, 10, 12]))
console.log(rank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
console.log(rank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3