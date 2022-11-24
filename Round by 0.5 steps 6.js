function solution(n) {
  return Math.floor(n) + (n % 1 < .25 ? 0 : n % 1 >= .75 ? 1 : .5)
  // let og = Math.floor(n)
  // return og + (n - og < .25 ? 0 : n - og >= .75 ? 1 : .5)
}

console.log(solution(4.2)) // = 4
console.log(solution(4.3)) // = 4.5
console.log(solution(4.6)) // = 4.5
console.log(solution(4.8)) // = 5
console.log(solution(4.75)) // == 5