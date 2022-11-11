function countChange(money, change) {
  let sum = 0
  if(money == 0 || sum < 0) return 1
  if(change.length == 0) return 0
  for(let i = 0; i < change.length; i++)
    if(change[0] <= money){
      // let temp = change[0]
      // if(i) change.shift()
      // sum += countChange(money - temp, change)
      sum += countChange(money - change[0], i ? change.slice(i) : change)
    } 
  return sum
}

console.log(countChange(0, [1, 2]), 1)
console.log(countChange(4, [1, 2]), 3)
console.log(countChange(10, [5, 2, 3]), 4)
console.log(countChange(11, [5, 7]), 0)
console.log(countChange(300, [5, 10, 20, 50, 100, 200, 500]), 1022)

// console.log(countChange(4, [1,2])) // => 3
// console.log(countChange(10, [5,2,3])) // => 4
// console.log(countChange(11, [5,7])) //  => 0