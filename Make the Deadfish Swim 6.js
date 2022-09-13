function parse(data) {
  let arr = [], x = 0
  data.split('').forEach( c => {
    // c == 'i' ? x++ : c == 'd' ? x-- : c == 's' ? x = x**2 : c == 'o' ? arr.push(x) : 
    if(c == 'i') x++
    else if(c == 'd') x--
    else if(c == 's') x = x**2
    else if(c == 'o') arr.push(x)
  })
  return arr
}

console.log(parse("iiisdoso"))