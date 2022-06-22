function pickPeaks(arr){
  // make pos & peaks arrays
  let pos = [], peaks = [], peak = [false, false]
  // iterate over input array
  arr.forEach((curr, i) => {
    // take care of first element case
    // if current tower is bigger than prior, mark it as the peak
    if(curr > arr[i - 1]) peak = [i, curr]
    // else if it's less, approve last peak if exists, push value and position, clear peak
    if(curr < arr[i - 1] && peak[0] !== false) {
      // console.log(peak)
      pos.push(peak[0])
      peaks.push(peak[1])
      peak = [false, false]
    }
    // console.log(arr[i - 1], curr)
  })
  // console.log(pos)
  return {pos, peaks}
}
console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1])) // , {pos:[3,7], peaks:[6,3]})) // ;
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3])) // , {pos:[3,7], peaks:[6,3]})) // ;
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])) // , {pos:[3,7,10], peaks:[6,3,2]})) // ;
console.log(pickPeaks([2,1,3,1,2,2,2,2,1])) // , {pos:[2,4], peaks:[3,2]})) // ;
console.log(pickPeaks([2,1,3,1,2,2,2,2])) // , {pos:[2], peaks:[3]})) // ;
console.log(pickPeaks([2,1,3,2,2,2,2,5,6])) // , {pos:[2], peaks:[3]})) // ;
console.log(pickPeaks([2,1,3,2,2,2,2,1])) // , {pos:[2], peaks:[3]})) // ;
console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3])) // , {pos:[2,7,14,20], peaks:[5,6,5,5]})) // ;
console.log(pickPeaks([])) // ,{pos:[],peaks:[]})) // ;
console.log(pickPeaks([1,1,1,1])) // ,{pos:[],peaks:[]})) // ;

// Parameters: array of valid integers or empty
// Returns: object containing array of peaks positions & array of peaks values {pos:[],peaks:[]}
// Examples: 
  // (pickPeaks([1,2,3,6,4,1,2,3,2,1])) // , {pos:[3,7], peaks:[6,3]})) // ;
  // (pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3])) // , {pos:[3,7], peaks:[6,3]})) // ;
  // (pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])) // , {pos:[3,7,10], peaks:[6,3,2]})) // ;
  // (pickPeaks([2,1,3,1,2,2,2,2,1])) // , {pos:[2,4], peaks:[3,2]})) // ;
  // (pickPeaks([2,1,3,1,2,2,2,2])) // , {pos:[2], peaks:[3]})) // ;
  // (pickPeaks([2,1,3,2,2,2,2,5,6])) // , {pos:[2], peaks:[3]})) // ;
  // (pickPeaks([2,1,3,2,2,2,2,1])) // , {pos:[2], peaks:[3]})) // ;
  // (pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3])) // , {pos:[2,7,14,20], peaks:[5,6,5,5]})) // ;
  // (pickPeaks([])) // ,{pos:[],peaks:[]})) // ;
  // (pickPeaks([1,1,1,1])) // ,{pos:[],peaks:[]})) // ;
// Pseudocode:
  // make pos & peaks arrays
  // iterate over input array
    // if current tower is bigger than prior, mark it as the peak
    // else if it's less, approve last peak if exists, push value and position, clear peak
  // return {pos: {}, peaks: {}}