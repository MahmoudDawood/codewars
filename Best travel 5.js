function chooseBestSum(t, k, ls) {
  const distances = []
  // Make a recursion function
  function processDistance(arr, cities, sum){
    if(cities === 0){
      if(sum <= t) distances.push(sum)
    }
    else{
      for(let i = 0; i < arr.length; i++){
        processDistance(arr.slice(i + 1), cities - 1, sum + arr[i])
      }
    }
  }
  processDistance(ls, k, 0)
  return distances[0] ? Math.max(...distances) : null
  // return max value
}

let ts
ts = [ 100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89 ]
console.log(chooseBestSum(430, 8, ts)) // null
// ts = [50]
// console.log(chooseBestSum(163, 3, ts)) // null
// ts = [91, 74, 73, 85, 73, 81, 87]
// console.log(chooseBestSum(230, 3, ts)) // 228 
// ts = [50, 55, 57, 58, 60]
// console.log(chooseBestSum(174, 3, ts)) // 173 
// ts = [10, 20 ,30]
// console.log(chooseBestSum(174, 2, ts)) // 173 

// Parameters: Maximum distance t, number of cities k, list of distances between cities ls
// Returns: Maximum distance that could be travelled
// Examples:
  // ts = [50]
  // (chooseBestSum(163, 3, ts)) // null
  // const ts = [91, 74, 73, 85, 73, 81, 87]
  // (chooseBestSum(230, 3, ts)) // 228 
  // ts = [50, 55, 57, 58, 60]
  // (chooseBestSum(174, 3, ts)) // 173 
// Pseudocode:
  // Make a backtracking function
  // Make distance array and add to it all possible distances
  // filter it to be within distance limit, return max value