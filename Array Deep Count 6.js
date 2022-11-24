function count(arr) {
  return arr.reduce((acc, curr) => acc + 1 + (Array.isArray(curr) ? count(curr) : 0), 0)
  // let sum = 0
  // arr.forEach((x, i) => {
  //   sum++
  //   if(Array.isArray(x)) sum += count(x)
  // })
  // return sum
}

console.log(count([]))
console.log(count([1, 2, 3]))
console.log(count(["x", "y", ["z"]]))
console.log(count([1, 2, [3, 4, [5]]]))

// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7