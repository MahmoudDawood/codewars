function highAndLow(numbers){
  // numbers = numbers.split(' ')
  // let min = Number(numbers[0]) , max = Number(numbers[0])
  // numbers.forEach((x) => {
  //   x = Number(x)
  //   if(x > max) max = x
  //   if(x < min) min = x
  // })
  // return `${max} ${min}`

  numbers = numbers.split(' ').map(Number)
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
  
}