function assembleString(array){
  return array[0] ? array.reduce((acc, curr) => {
    curr.split('').forEach((c, i) =>{
      if(c != '*') acc[i] = c
    })
    return acc
  }, Array(array[0].length).fill('#')).join('') : ""
}

// console.log(assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"]), "Hello, World!");
// console.log(assembleString([".** . .' .'' ! ! .", ". . . .' **' ! * .", "* . .*.* .'' * ! .", ". . .*.' .**** ! .", "**. * .* .*' ! ! ."]), ". . . .' .'' ! ! .");
// console.log(assembleString([". . . .", ". . . .", ". . . .", ". . . .", ". . . ."]), ". . . .");
// console.log(assembleString(["12***6789", "**3456789", "12345**8*", "***456**9", "1*3*5*7*9", "*2*456789"]), "123456789");
// console.log(assembleString(["******", "******", "******", "******"]), "######");
// console.log(assembleString(["*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*"]), "###############");
console.log(assembleString([]), "###############");

const input = [
  "a*cde",
  "*bcde",
  "abc*e"
]
console.log(assembleString(input), "abcde")


// input = [
//   "a*c**",
//   "**cd*",
//   "a*cd*"
// ]
// result = "a#cd#"