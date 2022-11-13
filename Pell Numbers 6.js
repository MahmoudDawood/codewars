function pell(n) {
	if(n <= 2) return BigInt(n)
  
  let a = BigInt(1), b = BigInt(2), c = BigInt(5)
  for(let i = 3; i <= n; i++){
    c = 2n * b + a
    // console.log(a, b, c)
    a = b
    b = c
  }
  return c
  // let sum = 0
  // sum += (pell(n - 1) + pell(n - 2)) * 2
	// return sum// + "n"; // return a BigInt
}
// let x = '3'
// console.log(2 * x)

console.log(pell(0), 0n);
console.log(pell(1), 1n);
console.log(pell(2), 2n);
console.log(pell(3), 5n);
console.log(pell(4), 12n);
// console.log(pell(5))
// console.log(pell(50))
console.log(pell(100), 66992092050551637663438906713182313772n);