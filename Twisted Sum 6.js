function sum(n) {
  let sum = 0
  for(let i = 1; i <= n; i++){
    if(i > 9) for(let j = 0; j < i.toString().length; j++) sum += +i.toString()[j]
    else sum += i
    console.log("sum: ", sum)
  }
  return sum
}

// const x = 78
// for(let j = 0; j < x.toString().length; j++) console.log(+x.toString()[j])

console.log(sum(150))

