function solution(numbers) {
  const gcd = (a, b) => b ? gcd(b, a % b) : a
  return numbers.length * numbers.reduce(gcd)
  
  // let smallest = 0
  // for(let i = 1; i < numbers.length; i++)
  //   if(numbers[i] < numbers[smallest]) smallest = i

  // while(!numbers.every(n => n == numbers[0])) {
  //   for(let i = 0; i < numbers.length; i++){
  //     if(numbers[i] != numbers[smallest]) {
  //       numbers[i] -= Math.floor(numbers[i] / numbers[smallest]) * numbers[smallest]
  //       if(!numbers[i]) numbers[i] = numbers[smallest]
  //     }
  //     if(numbers[i] < numbers[smallest]) smallest = i
  //   }
  // }
  // return numbers[0] * numbers.length
}

console.log(solution([1, 21, 25]),3);
console.log(solution([6,9,21]),9);
console.log(solution([ 3, 13, 23, 7, 83 ]),5);