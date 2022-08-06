function towerBuilder(nFloors) {
  const arr = [], cnt = nFloors * 2 - 1
  for(let i = 0; i < nFloors; i++){
    let str = ''

    for(let j = 0; j < Math.floor(cnt / 2) - i; j++) str += ' '
    
    for(let j = 0; j < i * 2 + 1; j++) str += '*'
    
    for(let j = str.length; j < cnt; j++) str += ' '
    
    arr.push(str)
  }
  return arr
}
console.log(towerBuilder(1))  // ["*"]);
console.log(towerBuilder(2))  // [" * ","***"]);
console.log(towerBuilder(3))  // ["  *  "," *** ","*****"]);