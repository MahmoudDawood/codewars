function bell(n) {
  let arr = Array(n).fill(0), inc = n - 2
  for(let i = 0; i < Math.ceil(arr.length / 2); i++){
    if(i){
      arr[i] = arr[i - 1] + inc
      arr[arr.length - 1 - i] = arr[i]
      inc -= 2
    }
    else{
      arr[i] = n
      arr[arr.length - 1] = n
    }
  }
  return arr
}

console.log(bell(1))
console.log(bell(2))
console.log(bell(3))
console.log(bell(4))
console.log(bell(5))
console.log(bell(6))
console.log(bell(7))
console.log(bell(8))
console.log(bell(9))
console.log(bell(10))
console.log(bell(11))
console.log(bell(12))
// n => resulting array

// 1 => [1]
// 2 => [2, 2]
// 3 => [3, 4, 3]
// 4 => [4, 6, 6, 4]
// 5 => [5, 8, 9, 8, 5]
// 6 => [6, 10, 12, 12, 10, 6]
// 7 => [7, 12, 15, 16, 15, 12, 7]
// 8 => [8, 14, 18, 20, 20, 18, 14, 8]
// 9 => [9, 16, 21, 24, 25, 24, 21, 16, 9]
// 10 => [10, 18, 24, 28, 30, 30, 28, 24, 18, 10]
// 11 => [11, 20, 27, 32, 35, 36, 35, 32, 27, 20, 11]
// 12 => [12, 22, 30, 36, 40, 42, 42, 40, 36, 30, 22, 12]