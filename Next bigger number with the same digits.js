// PREP
function nextBigger(n){
  // split it into an array
  const arr = ("" + n).split('')
  // iterate from end
  for(let i = arr.length - 1; i > 0; i--){
    // in window array, check if digit from array > next digit, from left to right
    let idx = arr.slice(i).sort().findIndex(x => x > arr[i - 1])
    // if exists, swap them, reverse the sliced array and return
    if(idx > -1){
      idx = arr.slice(i).indexOf(arr.slice(i).sort()[idx])
      const temp = arr[i - 1]
      arr[i - 1] = arr[i + idx]
      arr[i + idx] = temp
      return +arr.slice(0, i).concat(arr.slice(i).sort()).join('')
    }
  }
  return -1

  // const result = +("" + n).split('').sort().reverse().join('')
  // return result === n ? -1 : result

}

// console.log(nextBigger(3165)) // 3516
// console.log(nextBigger(47446064)) //47446604 to equal 47446406
// console.log(nextBigger(19413244996940)) // 19413244999640 to equal 19413244999046

// console.log(nextBigger(650125291943)) // 650125299143 to equal 650125293149

// console.log(nextBigger(13117945530)) // 13117954530 to equal 13117950345

// console.log(nextBigger(47446064)) // 47446604 to equal 47446406

// console.log(nextBigger(9407578239264)) // 9407578239624 to equal 9407578239426
// console.log(nextBigger(12))
// console.log(nextBigger(513))
// console.log(nextBigger(2017))
// console.log(nextBigger(414))
// console.log(nextBigger(144))
// console.log(nextBigger(9))
// console.log(nextBigger(111))
// console.log(nextBigger(531))

// Parameters: positive integer
// Returns: Biggest number can be formed from arranging it's digits
// Examples: 
  // Test.assertEquals(nextBigger(12),21)
  // Test.assertEquals(nextBigger(513),531)
  // Test.assertEquals(nextBigger(2017),2071)
  // Test.assertEquals(nextBigger(414),441)
  // Test.assertEquals(nextBigger(144),414)
// Pseudocode: 
  // split it into an array
  // iterate from end
  // slice array of size i increasing from 1, check if digiy from array > next digit
  // if exists, swap them and reverse the sliced array
  // else increase window by one and try next element


  // iterate from end, store max & min with their indexes
  // if last digit is zero >> Swap last biggest digit with first smaller num, sort first part
  // else 

  // iterate from end, once we find arr[i] > arr[i - 1] swap them and return array joined
  // return -1