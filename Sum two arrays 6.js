function addArrays(array1, array2) {
  let result = [...+array1.join('') + +array2.join('') + ""]
  if(result[0] == '-'){
    result.shift()
    result[0] *= -1
  }
  return array1.length + array2.length ? result.map(x => +x) : []
}

console.log(addArrays([],[]), [])
console.log(addArrays([3,2,9],[1,2]), [3,4,1])
console.log(addArrays([4,7,3],[1,2,3]), [5,9,6])
console.log(addArrays([1],[5,7,6]), [5,7,7])
console.log(addArrays([3,2,6,6],[-7,2,2,8]), [-3,9,6,2])// # 3266 + (-7228) = -3962)
