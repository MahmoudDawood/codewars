function equalSides(arr) {
  let leftSum = 0, rightSum = arr.reduce((acc, curr) => curr += acc) - (arr[0] || 0)
  for(let i = 1; i < arr.length; i++){
    if(rightSum === leftSum) return i - 1
    leftSum += arr[i - 1]
    rightSum -= arr[i]
  }
  return leftSum === rightSum ? arr.length -1 : -1
}

console.log(equalSides([1, 2, 3, 4, 1, 2, 3]))
console.log(equalSides([1, 100, 50, -51, 1, 1]))
console.log(equalSides([20, 10, -80, 10, 10, 15, 35]))
console.log(equalSides([-1, 1, 20]))