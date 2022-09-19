function getLengthOfMissingArray(arrayOfArrays) {
  if(!arrayOfArrays) return 0
  for(let i = 0; i < arrayOfArrays.length; i++)
    if(!arrayOfArrays[i] > 0) return 0
  if(!arrayOfArrays.length) return 0
  arrayOfArrays.sort((a, b) => a.length - b.length)
  // console.log(arrayOfArrays)
  // console.log(arrayOfArrays[0].length)
  if(!arrayOfArrays[0]) return 0
  if(!arrayOfArrays[0].length) return 0
  for(let i = arrayOfArrays[0].length; ; i++)
    if(arrayOfArrays[i - arrayOfArrays[0].length].length != i) return i
}

console.log(isNaN(0))
console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([]))
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1, 5, 6 ], [ 1, 1 ], [ 5, 6, 7, 8, 9 ] ]))
console.log(getLengthOfMissingArray([[], [1, 2, 3]]))
console.log(getLengthOfMissingArray([[1, 2, 3], null]))