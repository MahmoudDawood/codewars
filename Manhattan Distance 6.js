function manhattan_distance(pointA, pointB) {
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1])
}

console.log(manhattan_distance([1, 1], [1, 1]))
console.log(manhattan_distance([5, 4], [3, 2]))
console.log(manhattan_distance([1, 1], [0, 3]))