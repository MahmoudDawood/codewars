function sumConsecutives(s) {
  const result = []
  s.forEach((x, i) => x == s[i - 1] ? result[result.length - 1] += x : result.push(x))
  return result
}

console.log(sumConsecutives([1,1,7,7,3]))
console.log(sumConsecutives([-5,-5,7,7,12,0]))
console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))
// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]
// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]