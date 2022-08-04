function sumOfSquares(n) {
  // Iterate starting @ it's sqrt floor
  // add it's value to sum & subtract it from n as many times as possible, store cnt
  let cnt = 1e9, root = Math.floor(Math.sqrt(n))
  for(let i = root; i > Math.sqrt(root); i--){
    let sum = 0, temp = 0
    let divisor = root - (root - i)
    while(divisor > 0){ // rm sum < n
      if(sum + divisor**2 <= n){
        sum += divisor ** 2
        temp++
      }
      else divisor = Math.floor(Math.sqrt(n - sum))
      // console.log("starting div: ", i, " & current div: ", divisor)
      // console.log("sum: ", sum)
    }
    // console.log("temp: ", temp)
    // console.log('------')
    if(temp < cnt) cnt = temp // rm sum == n
  }
  return cnt
}

console.log(sumOfSquares(15)) // 4 [9, 4, 1, 1]
console.log(sumOfSquares(16)) // 1 [16]
console.log(sumOfSquares(17)) // 2 [16, 1]
console.log(sumOfSquares(18)) // 2 [9, 9] <<
console.log(sumOfSquares(19)) // 3 [9, 9, 1]