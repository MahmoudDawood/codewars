function dog(a, b) {
  let arr = []
  for(let i = a; i <= b; i++)
    if(i == i.toString().split('').map(x => +x).reduce((acc, curr, i) => acc + Math.pow(curr, i + 1) , 0)) arr.push(i)
  return arr
}

console.log(dog(1, 100))