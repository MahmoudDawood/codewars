function slicesToName(n) {
  if(!(n > 1)) return null
  let str = ""
  if(n % 2){
    str += "bread"
    n--
  }
  while(n){
    str += str ? " sandwich" : "sandwich" 
    n -= 2
  }
  return str
}

function nameToSlices(name) {
  if(typeof name != "string" || !name.length) return null
  let n = 0, arr = name.split(' ')

  if(arr[0] == "bread"){
    arr.splice(0, 1)
    n++
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == "sandwich") n += 2
    else return null
  }

  return n == 1 ? null : n

  // return typeof name == "string" && name.length
  //   ? name.split(' ').reduce((acc, curr) => curr[0] == 'b' ? acc + 1 : curr[0] == 's' ? acc + 2: acc, 0)
  //   : null
}

console.log(slicesToName(1))
console.log(slicesToName(2))
console.log(slicesToName(5))

console.log(nameToSlices(12))
console.log(nameToSlices('bread sandwich'))
console.log(nameToSlices('sandwich sandwich'))

// have fun!
