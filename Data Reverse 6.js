function dataReverse(data) {
  // Make an array of length eighth of input list
  return Array(data.length / 8).fill(null).map((x, i) => data.slice(i * 8, i * 8 + 8)).reverse().flat()
}

const data1 = [1,1,1,1,1,1,1,1,  0,0,0,0,0,0,0,0,  0,0,0,0,1,1,1,1,  1,0,1,0,1,0,1,0]
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
console.log(dataReverse(data1),data2)
// const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
// const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
// (dataReverse(data3),data4)

// Params: List of 0s and 1s, with length divisible by 8
// Returns: Input list with bytes reversed
// Examples:
  // const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
  // const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
  // (dataReverse(data1),data2)
  // const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
  // const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
  // (dataReverse(data3),data4)
// Pseudocode:
  // Make an array of length eighth of input list
  // iterate over input list, with step of 1 byte
  // push to start of output array the byte starting from index
  // return arr