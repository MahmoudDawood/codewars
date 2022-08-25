function solve(str) {
  const vowels = 'aeiou'

  let sum = 0, max = 0
  for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])) {
      max = Math.max(max, sum)
      sum = 0
    } 
    else {
      sum += str.charCodeAt(i) - 96
    }
  }
  return Math.max(sum, max)
}

console.log(solve('az'))
// console.log(solve('zodiacs'))
// console.log(solve('strength'))
// console.log(solve('abcedo'))
// console.log(solve('abde'))
// console.log(solve('mngooe'))

// console.log('a'.charCodeAt(0))