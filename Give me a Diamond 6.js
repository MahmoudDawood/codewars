function diamond(n){
  if(n < 1 || n % 2 == 0) return null
  let arr = Array(Math.ceil(n / 2)).fill('')
  for(let i = 0; i < n / 2; i++){ // rows
    for(let j = 0 + i; j < Math.floor(n / 2); j++){ // add spaces
      arr[i] += ' '
    }
    while(arr[i].length < Math.floor(n / 2)) {
      arr[i] += '*'
    }
  }
  
  arr = arr.map(x =>  x + '*' + x.split('').reverse().join(''))

  for(let i = arr.length - 2; i >= 0; i--){
    arr.push(arr[i])
  }

  arr = arr.map(x => {
    let temp = x.split('')
    while(temp[temp.length - 1] == ' ') temp.pop()
    return temp.join('')
  })
  
  return arr.join('\n')+'\n'
}

console.log(diamond(3))

//  *
// ***
//  *
// " *\n***\n *\n"

//   *
//  ***
// *****
//  ***
//   *
//  "  *\n ***\n*****\n ***\n  *\n"


' *\n***\n *\n'
' * \n***\n * \n'
// Log
// 5
// Expected: '  *\n ***\n*****\n ***\n  *\n', instead got: '  *  \n *** \n*****\n *** \n  *  \n'