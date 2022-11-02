function getBestCombination(time) {
  let str1 = "", str2 = "", min, sec
  min = Math.floor(time / 60)
  sec = time - min * 60
  // console.log({min, sec})
  // console.log(min ,sec)
  str1 = (min ? min.toString() : "") + (sec ? (sec < 10 ? "0" + sec : sec.toString()) : "00")

  if(min && sec < 40){
    min -= 1
    sec += 60
  }
  str2 = (min ? min.toString() : "") + (sec ? (sec < 10 ? "0" + sec : sec.toString()) : "00")
  
  if(str1[0] == '0') str1 = str1.slice(1)
  if(str2[0] == '0') str2 = str2.slice(1)

  // console.log(str1.split('').reduce((acc, curr, i, arr) => {
    //   // console.log(curr[i - 1], curr)
    //   return i ? (arr[i - 1] == curr ? acc + 1 : acc) : 0
    // }, 0))
    // console.log(str2.split('').reduce((acc, curr, i, arr) => {
      //   // console.log(curr[i - 1], curr)
      //   return i ? (arr[i - 1] == curr ? acc + 1 : acc) : 0
      // }, 0))
      
  const v1 = str1.split('').reduce((acc, curr, i, arr) => {
    return i ? (arr[i - 1] != curr ? acc + 1 : acc) : 0
  }, 0)
      
  const v2 = str2.split('').reduce((acc, curr, i, arr) => {
    return i ? (arr[i - 1] != curr ? acc + 1 : acc) : 0
  }, 0)
  

  // console.log(str1, str2)
  // console.log(v1, v2)

  if(v1 !== v2){
    if(v1 > v2) return str2
    else return str1
  }
  else if(str1.length !== str2.length){
    if(str1.length > str2.length) return str2
    else return str1
  }
  return str1
  // return v1 > v2 ? str2 : v1 < v2 ? str1 : str1.length > str2.length ? str2 : str1.length < str2.length ? str1 : str1
}

// console.log(getBestCombination(60), "60")

// Example 1:

// input = 71
// method 1: "111" (1 minute and 11 seconds)
// method 2: "71" (0 minutes and 71 seconds)
// return "111" since it has fewer different consecutive digits

// Example 2:

// input = 72
// method 1: "112" (1 minute and 12 seconds)
// method 2: "72" (0 minutes and 72 seconds)
// return "72" since the number of different consecutive digits is the same but "72" has fewer digits than "112"

// Example 3:

// input = 3690
// method 1: "6130" (61 minutes and 30 seconds)
// method 2: "6090" (60 minutes and 90 seconds)
// return "6130" (the standard way) since both the number of different consecutive digits and the number of digits are the same


console.log(getBestCombination(6), "6");
console.log(getBestCombination(33), "33");
console.log(getBestCombination(60), "60");
console.log(getBestCombination(71), "111");
console.log(getBestCombination(72), "72");
console.log(getBestCombination(90), "90");
console.log(getBestCombination(99), "99");
console.log(getBestCombination(115), "155");
console.log(getBestCombination(121), "201");
console.log(getBestCombination(180), "300");
console.log(getBestCombination(273), "433");
console.log(getBestCombination(279), "399");
console.log(getBestCombination(3690), "6130");
console.log(getBestCombination(4697), "7777");
console.log(getBestCombination(5255), "8735");