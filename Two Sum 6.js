function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length; i++){
    // console.log(target - numbers[i])
    let idx = numbers.indexOf(target - numbers[i])
    if(idx == i) idx = numbers.lastIndexOf(target - numbers[i])
    if(idx != -1 && idx != i) return [i, idx]
  }
}

// console.log(twoSum([1, 2, 3], 4))
console.log(twoSum([1,2,3],          4,     ),[0,2])
console.log(twoSum([1234,5678,9012], 14690, ),[1,2])
console.log(twoSum([2,2,3],          4,     ),[0,1])
console.log(twoSum([2,3,1],          4,     ),[1,2])