function isIntArray(arr) {
  // return arr ? arr.filter(n => Number.isInteger(n)).length ? false : true : false
  return Array.isArray(arr) && arr.every(n => Number.isInteger(n))
}

console.log(isIntArray([1, 2, 3, 4]))
console.log(isIntArray(null))
console.log(isIntArray([]))
console.log(isIntArray([1, 2, 3, NaN]))
console.log(isIntArray([1.23e-7]))
console.log(isIntArray(['-1']))

let x = 1
