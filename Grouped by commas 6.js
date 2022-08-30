function commas(n) {
  return n.toString().split('').reverse().map((x, i) => i % 3 == 0 && i ? x + ',' : x).reverse().join('')
}

// [1,2,3].map((x, i) => {
//   console.log(i)
//   return x + 1
// })
console.log(commas(100000000000))


i = 0 >> 1
i = 1 >> 10
i = 2 >> 100
i = 3 >> 1000 // comma
i = 4 >> 10000
i = 5 >> 100000
i = 6 >> 1000000 // comma