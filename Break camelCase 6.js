function solution(string) {
  return string.split('').map(x => {
    return x.toUpperCase() != x.toLowerCase() && x == x.toUpperCase() ? ' ' + x : x
  }).join('')
}

console.log(solution("camelCasing"))
console.log(solution("camelCasingTest"))
console.log(solution("test"))
console.log(solution(""))