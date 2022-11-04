function runLengthEncoding(str) {
  let arr = [], cnt = 1
  for(let i = 0; i < str.length; i++){
    if(str[i] !== str[i+1]){
      arr.push([cnt, str[i]])
      cnt = 0
    }
    cnt++
  }
  return arr
}

// console.log(Object.entries({a: 1, b: 3}))

console.log(runLengthEncoding("hello world!"))
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]


// console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"))
 // => [[34,'a'], [3,'b']]
