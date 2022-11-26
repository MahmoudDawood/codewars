function smartSum(...arr) {
  // console.log(arr)
  return arr.reduce((acc, curr) => acc + (Array.isArray(curr) ? smartSum(...curr): curr), 0)
}

console.log(smartSum(1,2,3,4,5,6)); // returns 21
console.log(smartSum(1,2,3,[4,5],6)); // returns 21
console.log(smartSum(1,2,[[3,4],5],6)); // returns 21
