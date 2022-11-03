const solution = mtrx => {
  let x = mtrx.findIndex(row => row.includes('x')), y = mtrx[x].indexOf('x')
  // let x, y
  // for(let i = 0; i < arr.length; i++){
  //   if(arr[i].includes('x')){
  //     x = i
  //     y = arr[i].indexOf('x')
  //   }
  // }
  // console.log({x, y})

  return mtrx[x].slice(0, y).find(x => x == '>') ||
  mtrx[x].slice(y).find(x => x == '<') ||
  mtrx.slice(0, x).find(row => row[y] == 'v') ||
  mtrx.slice(x).find(row => row[y] == '^') ? true : false

  // if(mtrx[x].slice(0, y).find(x => x == '>')) return true // >
  // if(mtrx[x].slice(y).find(x => x == '<')) return true // <
  // if(mtrx.slice(0, x).find(row => row[y] == 'v')) return true // v
  // if(mtrx.slice(x).find(row => row[y] == '^')) return true // ^
  // return false
}

console.log(solution([

  [' ', 'x', ' ', ' '],

  [' ', ' ', ' ', ' '],

  [' ', '^', ' ', ' '],

  [' ', ' ', ' ', ' ']

] ))
console.log(solution([

  [' ', ' ', ' ', ' '],

  [' ', 'v', ' ', ' '],

  [' ', ' ', ' ', 'x'],

  [' ', ' ', ' ', ' ']

] ))
console.log(solution([

  [' ', ' ', ' ', ' '],

  ['>', ' ', ' ', 'x'],

  [' ', '', ' ', ' '],

  [' ', ' ', ' ', ' ']

] ))