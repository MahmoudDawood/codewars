function zeroPlentiful(arr) {
  let zeros = []
  for(let i = 0; i < arr.length; i++){
    if(!arr[i]){
      let j = i
      while(!arr[j] && j < arr.length){
        j++
      }
      zeros.push(j - i)
      i = j
    }
  }
  console.log(zeros)
  return zeros.filter(x => x < 4).length ? 0 : zeros.length
}

console.log(count([0, 0, 0, 0, 0, 1]))
// -->  1
// # 1 group of 5 zeros (>= 4), thus the result is 1

console.log(count([0, 0, 0, 0, 1, 0, 0, 0, 0]  ))
// -->  2
// # 2 group of 4 zeros (>= 4), thus the result is 2

console.log(count([0, 0, 0, 0, 1, 0] ))
//  -->  0 
// # 1 group of 4 zeros and 1 group of 1 zero (< 4)
// # _every_ sequence of zeros must be at least 4 long, thus the result is 0

console.log(count([0, 0, 0, 1, 0, 0]))
//  -->  0
// # 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

console.log(count([1, 2, 3, 4, 5]))
  // -->  0
// # no zeros

console.log(count([] ))
//  -->  0
// # no zeros