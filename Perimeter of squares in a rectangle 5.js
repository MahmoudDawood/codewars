function perimeter(n) {
  // const arr = Array(n + 1).fill(0).map((x, i, a) => {
  //   console.log(a, i)
  //   return i < 2 ? 1 : arr[i - 2] + arr[i - 1]})
  const arr = Array(n + 1).fill(1)
  for(let i = 2; i < n + 1; i++) arr[i] = arr[i - 2] + arr[i - 1]
  return arr.reduce((acc, curr) => acc + 4 * curr, 0)
}

console.log(perimeter(0), 4)
console.log(perimeter(5), 80)
console.log(perimeter(7), 216)
console.log(perimeter(20), 114624)
console.log(perimeter(30), 14098308)