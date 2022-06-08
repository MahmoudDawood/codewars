function sumIntervals(intervals) {
  // Sort intervals according to it's first value
  intervals.sort((a, b) => a[0] - b[0])

  // Compare next value start with previous value end
  let s = intervals[0][0], e = intervals[0][1], sum = 0
  for(let i = 1; i < intervals.length; i++){
    // if next start > previous end
    if(intervals[i][0] > e){
      // add previous interval range to sum
      sum += e - s
      // update s and e to the new interval start and end
      s = intervals[i][0]
      e = intervals[i][1]
    }
    // else update e index to be at maximum between previous & new element end
    else e = Math.max(e, intervals[i][1])
  }
  // add s to e interval to sum
  sum += e - s
  // return sum
  return sum


  // intervals = intervals.sort((a, b) => (a[0] - b[0]))
  // // elimenate inner elements
  // for(let i = 1; i < intervals.length; i++){
  //   while(intervals[i] && intervals[i][1] <= intervals[i - 1][1]){
  //     intervals.splice(i, 1)
  //   }
  // }

  // // combine extended elements
  // for(let i = 1; i < intervals.length; i++){
  //   while(intervals[i] && intervals[i][0] <= intervals[i - 1][1]){
  //     intervals[i - 1][1] = intervals[i][1]
  //     intervals.splice(i, 1)
  //   }
  // }

  // return intervals.reduce((acc, curr) => acc += curr[1] - curr[0], 0)
}
console.log(sumIntervals([
  [ -10, 18 ],
  [ 3, 8 ],
  [ 7, 11 ],
  [ -18, 17 ],
  [ -18, 3 ],
  [ -4, 18 ],
  [ -11, 19 ]
]))
// console.log(sumIntervals([[1,5]]))
// console.log(sumIntervals([[1,5],[6,10]]))
// console.log(sumIntervals([[1,5], [2, 3],[6,10]]))
// console.log(sumIntervals([[1,5],[1,5]]))
// console.log(sumIntervals([[1,4],[7, 10],[3, 5]]))

// Parameters: Array of integer intervals
// Returns: Sum of all intervals lengths
// Examples:
  // [[1,5]]  4
  // [[1,5],[6,10]]  8
  // [[1,5],[1,5]] 4
  // [[1,4],[7, 10],[3, 5]]  7
// Pseudocode:
  // Make an object and add each interval values to it as keys
  // return the length of object properties (keys)
  // -----------------------------------------------//
  // Sort intervals according to it's first value
  // Compare next value start with previous value end
    // if next start > previous end
      // add previous interval range to sum
      // update s and e to the new interval start and end
    // else 
      // update e index to be at maximum between previous & new element end 
  // add s to e interval to sum
  // return sum