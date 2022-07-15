function isMerge(s, part1, part2) {
  // Have 3 indexes at start of each string
  let idx = 0, idx1 = 0, idx2 = 0
  // iterate over chars in frist string
  while(idx < s.length){
    // console.log(s[idx], part1[idx1], part2[idx2])
    // if the char is @ one of other strings index
      // go to next char at each of them
    if(part1[idx1] !== part2[idx2] && (s[idx] == part1[idx1] || s[idx] == part2[idx2])){
      if(s[idx] == part1[idx1]){
        idx++
        idx1++
      }
      else if(s[idx] == part2[idx2]){
        idx++
        idx2++
      }
    }
    // else if two strings char are equal
      // check next char until they are not the same
    else if(part1[idx1] === part2[idx2] && part1[idx1] === s[idx]){
      console.log("In")
      let select = 0
      for(let i = 1; i < s.length - idx; i++){
        if(part1[idx1 + i] === part2[idx2 + i]) continue
        else if(s[idx + i] === part1[idx1 + i]){
          console.log("In 1")
          select = 1
          break
        }
        else if(s[idx + i] === part2[idx2 + i]){
          console.log("In 2")
          select = 2
          break
        }
      }
      // return and pick the one which continues
      if(select == 1){
        idx++
        idx1++
      }
      else{
        idx++
        idx2++
      }
    }
    // else return false
    else return false
  }
  // return true
  console.log(idx,  s.length, idx1,  part1.length, idx2, part2.length)
  return idx == s.length && idx1 == part1.length && idx2 === part2.length ? true : false
}
// console.log(isMerge('xcyc', 'xc', 'yc'))     // true
// console.log(isMerge('xcyc', 'xc', 'cy'))     // true
// console.log(isMerge('xcyc', 'yc', 'xc'))     // true
// console.log(isMerge('codewars', 'code', 'wars'))     // true
// console.log(isMerge('xcyc', 'cy', 'xc'))     // true
// console.log(isMerge('Making progress', 'Mak pross', 'inggre'))     // true
// console.log(isMerge('codewars', 'cdwr', 'oeas'))     // true
// console.log(isMerge('More progress', 'More ess', 'pro'))     // false
// console.log(isMerge('codewars', 'code', 'code'))     // false
const s = "0*F E6YSaa0xZ=6DMH#X,W; _LSDE"
const part1 = "F6YaxZMH#X,W;"
const part2 = "0* ESa0=6D _LSDE"
console.log(isMerge(s, part1, part2))     // true
// axyabc
// abc
// axy

// Parameters: 3 strings
// Returns: true if first string is composed of the other two strings mixed in order
// Examples:  
  // (doTest('xcyc', 'xc', 'yc'))     // true
  // (doTest('xcyc', 'xc', 'cy'))     // true
  // (doTest('xcyc', 'yc', 'xc'))     // true
  // (doTest('codewars', 'code', 'wars'))     // true
  // (doTest('xcyc', 'cy', 'xc'))     // true
  // (doTest('Making progress', 'Mak pross', 'inggre'))     // true
  // (doTest('codewars', 'cdwr', 'oeas'))     // true
  // (doTest('More progress', 'More ess', 'pro'))     // false
  // (doTest('codewars', 'code', 'code'))     // false
// Pseudocode:
  // Have 3 indexes at start of each string
  // iterate over chars in frist string
  // if the char is @ one of other strings index
    // go to next char at each of them
  // else if two strings char are equal
    // check next char until they are not the same
    // return and pick the one which continues
  // else return false
  // return true