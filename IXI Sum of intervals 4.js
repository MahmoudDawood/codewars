function sumIntervals(intervals) {
  intervals = intervals.sort((a, b) => (a[0] - b[0]))
  // elimenate inner elements
  for(let i = 1; i < intervals.length; i++){
    while(intervals[i] && intervals[i][1] <= intervals[i - 1][1]){
      intervals.splice(i, 1)
    }
  }

  // combine extended elements
  for(let i = 1; i < intervals.length; i++){
    while(intervals[i] && intervals[i][0] < intervals[i - 1][1]){
      intervals[i - 1][1] = intervals[i][1]
      intervals.splice(i, 1)
    }
  }

  return intervals.reduce((acc, curr) => acc += curr[1] - curr[0], 0)
}
console.log(sumIntervals([[1,5]]))
console.log(sumIntervals([[1,5],[6,10]]))
// console.log(sumIntervals([[1,5], [2, 3],[6,10]]))
console.log(sumIntervals([[1,5],[1,5]]))
console.log(sumIntervals([[1,4],[7, 10],[3, 5]]))
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