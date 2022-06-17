function encodeRailFenceCipher(string, numberRails) {
  if(!string) return ""
  // declare empty answer string, index of char, 1st skip = (n-2)*2+1, 2nd skip = -1
  let result = "", idx = 0, skip1 = (numberRails-2)*2+1, skip2 = -1, temp = "", flag = true
  console.log(string.length)
  
  // loop over rails as long as answer string length != given string length
  for(let i = 0; i < numberRails; i++){
    // char index = loop count
    idx = i
    flag = true
    // append char at index to result
    result += string[idx]
    // while index < given string length
    while(idx < string.length){
      
      if(i === 0) flag = true
      // if index + 1st skip < string length && 1st skip > 0
      if(flag && idx + skip1 + 1 < string.length && skip1 > 0){
        // index += 1st skip + 1 & append char at index
        idx += skip1 + 1
        result += string[idx]
        flag = false
      }

      if(i === numberRails - 1) flag = false
      // if index + 2nd skip < string length && loop > 0 (not first loop)
      if(!flag && idx + skip2 + 1 < string.length && i > 0){
        // index += 2nd skip + 1 & append char at index
        idx += skip2 + 1
        result += string[idx]
        flag = true
      }

      // if result didn't change, break to next loop
      if(result === temp) break
      temp = result
      console.log(result, idx)

    }
    // 1st skip -= 2, 2nd skip += 2
    skip1 -= 2
    skip2 += 2
  }
  // return result string
  return result
}

// console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3)) // "WECRLTEERDSOEEFEAOCAIVDEN");
// console.log(encodeRailFenceCipher("Hello, World!", 3)) // "Hoo!el,Wrdl l"
console.log(encodeRailFenceCipher("ei usen ert  acfmos ntaiesjtarg!oeiptsneknpd  Piv aud ueia.ua roitii ilon  na lmnVpatxoca uett tdte!iuiaueifdeeis tu ,io eas! fsiarmtmrmiessaiete rorAcfmsetiqeteosDeliep u anxii oaprisuvmov es un ue ra d eni mr rroriis b   ceqriueeit p   itm ,c", 49)) // "Hoo!el,Wrdl l"

// H   o   o   !
//  e l , W r d
//   l  ''   l

// W     I     R     E     E
//  E   D S   E E   E A   C
//   A E   C V   D L   T N
//    R     O     F     O
// WIREEEDSEEEACAECVDLTNEROFO
// WIREEEDSEEEACAECVDLTNROFO

// Parameters: String, number of rails
// Returns: Encoded string
// Examples: 
  // (encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3) // "WECRLTEERDSOEEFEAOCAIVDEN");
  //  W       E       C       R       L       T       E
  //    E   R   D   S   O   E   E   F   E   A   O   C  
  //      A       I       V       D       E       N    
  // (encodeRailFenceCipher("Hello, World!", 3) // "Hoo!el,Wrdl l");
// Pseudocode:
  // declare empty answer string, index of char, 1st skip = (n-2)*2+1, 2nd skip = -1
  // loop over rails as long as answer string length != given string length
    // char index = loop count
    // while index < given string length
      // append char at index to result
      // if index + 1st skip < string length && 1st skip > 0
        // index += 1st skip + 1 & append char at index
      // if index + 2nd skip < string length && loop > 0 (not first loop)
        // index += 1st skip + 1 & append char at index
    // 1st skip -= 2, 2nd skip += 2
  // return result string

// 'WIREEEDSEEEACAECVDLTNEROFO'
// 'WIREEEDSEEEACAECVDLTNROFO'

function decodeRailFenceCipher(string, numberRails) {
  if(!string) return ""
  let result = "", idx = 0, skip1 = (numberRails-2)*2+1, skip2 = -1, temp = "", flag = true
  let cnt = 0, copy = string.split(''), arr = []
  // console.log(string.length)
  
  // iterate over number of levels
    // count how many elemnts in each level (same as last func. but for count only)
    // add to sub strings array starting splicing a copy or encoded array
  // while result string length != encoded string length
    // append first char in each array going down and up
  // return result string

  for(let i = 0; i < numberRails; i++){
    // char index = loop count
    idx = i
    
    
    // append char at index to result
    result += string[idx]
    // while index < given string length
    cnt = 1
    cnt = string.length > Math.min(skip1, skip2) + idx ? 1 : 0
    while(idx < string.length){
      
      if(i === 0) flag = true
      // if index + 1st skip < string length && 1st skip > 0
      if(flag && idx + skip1 + 1 < string.length && skip1 > 0){
        // index += 1st skip + 1 & append char at index
        idx += skip1 + 1
        result += string[idx]
        cnt++
        flag = false
      }

      if(i === numberRails - 1) flag = false
      // if index + 2nd skip < string length && loop > 0 (not first loop)
      if(!flag && idx + skip2 + 1 < string.length && i > 0){
        // index += 2nd skip + 1 & append char at index
        idx += skip2 + 1
        result += string[idx]
        cnt++
        flag = true
      }

      // if result didn't change, break to next loop
      if(temp === result) break
      temp = result
      // console.log(result, idx)

    }

    arr.push(copy.splice(0, cnt))
    result = ""

    // 1st skip -= 2, 2nd skip += 2
    skip1 -= 2
    skip2 += 2
  }
  console.log(arr)

  while(result.length !== string.length){
    for(let i = 0; i < arr.length; i++){
      if(arr[i][0] !== undefined){
        result += arr[i].shift()
      }
    }
    for(let i = arr.length - 2; i > 0; i--){
      if(arr[i][0] !== undefined){
        result += arr[i].shift()
      }
    }
  }

  // return result string
  return result
}

// WECRLTEERDSOEEFEAOCAIVDEN
// Hoo!el,Wrdl l

// console.log(decodeRailFenceCipher("WIREEEDSEEEACAECVDLTNROFO", 4)) // "WEAREDISCOVEREDFLEEATONCE");
// console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3)) // "WEAREDISCOVEREDFLEEATONCE");
// console.log(decodeRailFenceCipher("Hoo!el,Wrdl l", 3)) // "WEAREDISCOVEREDFLEEATONCE");

// Parameters: Encoded string, number of levels
// Returns: Original string
// Examples:
  // (decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3) // "WEAREDISCOVEREDFLEEATONCE");
// Pseudocode:
  // iterate over number of levels
    // count how many elemtns in each level (same as last func. but for count only)
    // add to sub strings array starting splicing a copy or encoded array
  // while result string length != encoded string length
    // append first char in each array going down and up
  // return result string