function narcissistic(value) {
  //   const n = value.toString().length
  //   console.log(n)
  //   let temp = value, sum = 0
  //   while(temp > 9){
  //     let rem = (temp % 10)
  //     console.log(rem)
  //     sum += Math.pow(rem, n)
  //     temp -= rem
  //     temp /= 10
  //   }
  //   sum += Math.pow(temp, n)
  //   if(sum === value) return true
  //      return false
  
  const arr = String(value).split('')
  return arr.reduce((acc, curr) => acc += (curr ** arr.length), 0) === value
}
