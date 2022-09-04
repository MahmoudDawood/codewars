function pyramid(n){
  return Array(n).fill(null).map((x, i) => Array(i + 1).fill(1))
} 

console.log(pyramid(0))
console.log(pyramid(1))
console.log(pyramid(2))
console.log(pyramid(3))