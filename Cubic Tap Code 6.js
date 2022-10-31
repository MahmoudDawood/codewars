function encode(str) {
  const points = (n) => Array(n).fill('.').join('')
  return str.split('').reduce((acc, curr) => {
    let n = curr.charCodeAt() - 64
    let layer = Math.floor((n - 1) / 9) + 1
    let col = n % 3 ? n % 3 : 3
    let row = Math.floor(((n - (layer - 1) * 9) - 1) / 3) + 1
    if(n < 0) return acc + (acc ? " " : "") + "... ... ..."
    return acc + (acc ? " " : "") + points(col) + " " + points(row) + " " + points(layer)
  }, "")
}

function decode(str) {
  // let rem
  // const s = str.split(' ').reduce((acc, curr, i, arr) => {
  //   const [col, row, layer] = [arr.splice(0, 1), arr.splice(0, 1), arr.splice(0, 1)].map(n => n[0].length)
  //   let n = col + (row - 1) * 3 + (layer - 1) * 9
  //   rem = arr
  //   console.log(arr)
  //   return acc + (n == 27 ? " " : String.fromCharCode(n + 64))
  // }, "")
  let arr = str.split(' '), s = ""
  while(arr.length) {
    const [col, row, layer] = [arr.splice(0, 1), arr.splice(0, 1), arr.splice(0, 1)].map(n => n[0].length)
    let n = col + (row - 1) * 3 + (layer - 1) * 9
    s += (n == 27 ? " " : String.fromCharCode(n + 64))
  }
  return s
}

// 1  1  2  3 
// 1  A  B  C
// 2  D  E  F
// 3  G  H  I

// 2  1  2  3 
// 1  J  K  L
// 2  M  N  O
// 3  P  Q  R

// 3  1  2  3 
// 1  S  T  U
// 2  V  W  X
// 3  Y  Z  _

// console.log(encode("N"), ".. .. ..")
// console.log(encode("TEST"), ".. . ... .. .. . . . ... .. . ...")
// console.log(encode("HELLO WORLD"), ".. ... . .. .. . ... . .. ... . .. ... .. .. ... ... ... .. .. ... ... .. .. ... ... .. ... . .. . .. .")

console.log(decode(".. .. .."), "N")
console.log(decode(".. . ... .. .. ."), "TE")
console.log(decode(".. . ... .. .. . . . ... .. . ..."), "TEST")
console.log(decode(".. ... . .. .. . ... . .. ... . .. ... .. .. ... ... ... .. .. ... ... .. .. ... ... .. ... . .. . .. ."), "HELLO WORLD")