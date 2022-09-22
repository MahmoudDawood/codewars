function beggars(values, n) {
  if(!n) return []
  let result = Array(n).fill(null).map(x => Array())
  values.forEach((x, i) => result[i % n].push(x))
  return result.map(x => x[0] ? x.reduce((acc, curr) => acc + curr) : 0)
}

console.log(0 % 2)
console.log(beggars([1, 2, 3, 4, 5], 2), [9, 6])
// console.log(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3])
// console.log(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0])
// console.log(beggars([1, 2, 3, 4, 5], 0), [0])
// [1,2,3,4,5] for 2 beggars [9,6]
// as the first one takes [1,3,5], the second collects [2,4].

// 3 beggars 
// [5,7,3], as they will respectively take [1,4], [2,5] and [3].