function isHappy(n) {
  // const val = (x) => x.toString().split('').map(x => (+x)**2).reduce((acc, curr) => acc + curr)
  for(let i = 0; i < 100; i++){
    if(n == 1) return true
    else n = n.toString().split('').map(x => (+x)**2).reduce((acc, curr) => acc + curr)
  }
  return false
}

let x = 23
console.log(x.split(''))
console.log(isHappy(1))
console.log(isHappy(7))
console.log(isHappy(16))