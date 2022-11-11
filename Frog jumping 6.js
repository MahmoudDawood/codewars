function solution(a) {
  let idx = 0, steps = 0
  while(idx >= 0 && idx < a.length && steps < a.length){
    // console.log(idx)
    idx += a[idx]
    steps++
  }
  return steps && (idx < 0 || idx >= a.length) ? steps : -1
}

console.log(solution([1, 2, 2, -1]), 4);
console.log(solution([1, 2, 1, 5]), 3);
console.log(solution([1, 1, 1, 1]), 4);
console.log(solution([1, -1]), -1);
console.log(solution([-3]), 1);