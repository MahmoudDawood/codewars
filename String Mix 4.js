function mix(s1, s2) {
  // Make an object for each string of the two, append to it's value each lower case letter
  const obj1 = {}, obj2 = {}, obj = {}, arr = []
  s1.split('').forEach(x => {
    if(obj1[x] !== undefined) obj1[x]++
    else if(x.toLowerCase() !== x.toUpperCase() && x === x.toLowerCase()) obj1[x] = 1
  })
  s2.split('').forEach(x => {
    if(obj2[x] !== undefined) obj2[x]++
    else if(x.toLowerCase() !== x.toUpperCase() && x === x.toLowerCase()) obj2[x] = 1
  })
  // console.log(obj1, obj2)

  // for each key in both objects collect maximum value and add to result object with owner
  const set = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])]
  set.forEach(x => {
    obj[x] = obj1[x] === undefined ? '2' :obj2[x] === undefined ? '1' : obj1[x] > obj2[x] ? '1' : obj1[x] < obj2[x] ? '2' : '='
  })

  // delete ones
  for([key, value] of Object.entries(obj)){
    if(value === '1' && obj1[key] === 1) delete obj[key] 
    else if(value === '2' && obj2[key] === 1) delete obj[key] 
    else if(value === '=' && obj1[key] === 1) delete obj[key]
    else arr.push(key)
  }
  // console.log(obj)

  console.log(arr)
  arr.sort((a, b) => {
    let x, y
    if(obj[a] === '1') x = obj1[a]
    else x = obj2[a]
    if(obj[b] === '1') y = obj1[b]
    else y = obj2[b]

    if(y - x) return y - x // by length

    // if(obj[a] === '1' && (obj[b] === '2' || obj[b] === '=')) return -1
    // else if(obj[a] === '2' &&  obj[b] === '=') return -1 // by string {1, 2, =}

    if(obj[a] === '=' && (obj[b] === '1' || obj[b] === '2')) return 1
    else if(obj[a] === '2' &&  obj[b] === '1') return 1 // by string {1, 2, =}

    if(obj[a] === obj[b] && a.charCodeAt(0) > b.charCodeAt(0)) return 1 // alphabatically
  })
  console.log(arr)
  
  // add result object values to string in template descendingly, lexicographically & return it
  return arr.map(char => {
    let temp = obj[char] === '1' ? '1:' : obj[char] === '2' ? '2:' : '=:'
    if(temp[0] === '1') for(let i = 0; i < obj1[char]; i++) temp += char
    else for(let i = 0; i < obj2[char]; i++) temp += char  
    temp += '/'
    return temp
  }).join('').slice(0, -1)
}
console.log(mix('Are they here', 'yes, they are here')) // '2:eeeee/2:yy/=:hh/=:rr'
// console.log(mix("Lords of the Fallen", "gamekult")) // "1:ee/1:ll/1:oo")
// console.log(mix("Are they here", "yes, they are here")) // "2:eeeee/2:yy/=:hh/=:rr")
// console.log(mix("looping is fun but dangerous", "less dangerous than coding"))
// // "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
// console.log(mix(" In many languages", " there's a pair of functions")) //, "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
// console.log(mix("Lords of the Fallen", "gamekult")) //, "1:ee/1:ll/1:oo")
// console.log(mix("codewars", "codewars")) //, "")
// console.log(mix("A generation must confront the looming ", "codewarrs")) //, "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")

  // Parametes: Two strings
// Returns: String template for lower case maximum occurances descending lexicographically > 1
// Examples:
  // (mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
  // (mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
  // (mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
  // (mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
  // (mix("codewars", "codewars"), "")
  // (mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")
  
  // s1 = "my&friend&Paul has heavy hats! &"
  // s2 = "my friend John has many many friends &"
  // mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

  // s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
  // s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
  // mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

  // s1="Are the kids at home? aaaaa fffff"
  // s2="Yes they are here! aaaaa fffff"
  // mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

// Pseudocode:
  // Make an object for each string of the two, append to it's value each lower case letter
  // for each key in both objects collect maximum value and add to result object with owner
  // add result object values to string in template descendingly, lexicographically & return it
