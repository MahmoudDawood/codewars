function triangleType(a, b, c) {
  let arr = [a, b, c]
  let [min] = arr.splice(arr.indexOf(Math.min(...arr)), 1)
  let [max] = arr.splice(arr.indexOf(Math.max(...arr)), 1)
  let hyp = Math.sqrt(min**2 + arr[0]**2)
  if(min + arr[0] <= max) return 0
  if(max < hyp) return 1
  if(max == hyp) return 2
  if(max > hyp) return 3
}
console.log(triangleType(2, 4, 6)); // return 0 (Not triangle)
console.log(triangleType(8, 5, 7)); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
console.log(triangleType(3, 4, 5)); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
console.log(triangleType(7, 12, 8)); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)

// console.log(triangleType(6, 5, 4))