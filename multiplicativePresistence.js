function persistence(num) {
  let sum = 0
  while(num > 9){
    num = num.toString().split('').reduce((acc, curr) => acc *= curr, 1)
    sum++
  }
 return sum
}