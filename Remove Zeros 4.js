// PREP
function removeZeros(array) {
  //  Iterate over array and when we get a zero '==' with abstract comparison
  for(let i = 0; i < array.length; i++){
    if(array[i] == 0){
      let j = i
      while(array[j] == 0 && j < array.length - 1) j++
      if(array[j] === 0 || array[j] === '0') return array
      while(j > i) {
        swap(j, j - 1)
        console.log(array)
        j--
      }
    }
  }
  // return array
  return array

  function swap(a, b){
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
  }
}
// console.log(removeZeros([0, 1, 2, 0, 3]))
// console.log(removeZeros([0, 1, 2, 0, 3]))
// console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]))
// console.log(removeZeros([ '0', '0', '0', 0, 1 ]))
// Expected: '[1,"0","0","0",0]', instead got: '[1,0,"0","0","0"]'
console.log(removeZeros([ 1, null, '5', '0', '2', 0, 8, 6, null, false ]))
// Expected: '[1,null,"5","2",8,6,null,false,"0",0]',
// instead got: '[1,null,"5","2",8,6,null,"0",0,false]'

// Parameters: Array of digits and non digits
// Returns: Same array sorted with zeros shifted to the end in order 0 & '0'
  // without using any array or object methods, MUST happen in place
// Examples:
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14] --> [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
// Pseudocode:
  //  Iterates to get number of zeros
  //  Iterate over array and when we get a zero '==' with abstract comparison
    // swap zero with element in first zero place [array.length - numOfZeros--]
  // return array