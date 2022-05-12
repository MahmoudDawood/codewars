snail = function(array) {
  if(array.length === 1) return array[0]
  
  let n = 0, ans = []
  while(n < array.length - 1){
    // next top row
    ans = ans.concat(array[n])
    array[n].splice(0)

    // right column
    for(let i = n + 1; i < array.length; i++){
      ans = ans.concat(array[i].slice(-1))
      array[i].pop()
    }    

    // bottom row
    
    ans = ans.concat(array[array.length - n - 1].reverse())
    array[array.length - n - 1].reverse() // reverse effect
    array[array.length - n - 1].splice(0)

    // left column
    for(let i = array.length - n - 2; i > n ;i--){
      ans.push(array[i].shift())
    }
    

    n++
  }
  return ans
}

// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))

// ([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// [1, 2, 3, 6, 9, 8, 7, 4, 5];

// [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]
//  [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];




  // let u = 0, d = 0, r = 0, l = 0, x = 0, y = 0, flag = true, result = []
  // console.log(array)
  // while(flag){
  //   flag = false
  //   while(y <= array.length - r){
  //     result.push(array[x][y++])
  //     flag = true
  //   }
  //   while(x <= array.length - d){
  //     result.push(array[x++][y])
  //     flag = true
  //   }
  //   y--
  //   x--
  //   while(y > l){
  //     result.push(array[x][--y])
  //     flag = true
  //   }
  //   while(x > u){
  //     result.push(array[--x][y])
  //     flag = true
  //   }   
  // }
  // return result
