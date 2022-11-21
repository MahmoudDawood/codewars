function scoreThrows(arr) {
  // return arr.reduce((acc, curr) => acc + (curr < 11 ? (curr < 5 ? 10 : 5) : 0, 0))// + (arr.every(x => x < 5) ? 100 : 0)
  return arr.filter(x => x >= 5 && x <= 10).length * 5 +
    arr.filter(x => x < 5).length * 10 +
    (Array.isArray(arr) & arr.every(x => x < 5) ? 100 : 0)
}

console.log(scoreThrows( [1, 5, 11] )) //    =>  15
console.log(scoreThrows( [15, 20, 30] )) //  =>  0
console.log(scoreThrows( [1, 2, 3, 4] )) //  =>  140
