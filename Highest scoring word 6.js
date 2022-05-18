function high(x){
  const arr = x.split(' ')
    .map(x => x.split('')
    .reduce((acc, curr) => acc + curr.toLowerCase().charCodeAt(0) - 96, 0))
  return x.split(' ')[arr.indexOf(Math.max(...arr))]
}

// console.log(high('yooaabzzds yooa yoooo'))
