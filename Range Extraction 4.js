function solution(list){
  // make an array []
  const arr = []
  let i = 0, str = ""
  // if following number is in order >> add it to arr
  while(i < list.length){
    // Add first number to array
      arr.push(list[i++])

      if(i - 1) str += ',' // after first iteration
      while(arr[arr.length - 1] === list[i] - 1) arr.push(list[i++])

      // else check if array length > 2 >> join first and last element with '-' & add to string
      if(arr.length > 2) str += arr[0] + '-' + arr[arr.length - 1]
      
      // else add elements to the string separated by a ', '
      else str += arr.join(',')

      // empty the array = []
      while(arr.length) arr.pop()
    }
  // return str
  return str
}
console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

// Parameters: array of integers ordered ascendingly
// Returns: Range string separated by ', ' if sequence >=3 join with '-'
// Examples:
  // [-10, -9, -8, -6, -5, -3, -2, -1, 0, 1, 4, 5, 7, 8, 9, 10]
  // "-10--8, -6, -5, -3-1, 4, 5, 7-10"
//Pseudocode
  // make an array []
  // Add first number to array
    // if following number is in order >> add it to arr
    // else check if array length > 2 >> join first and last element with '-' & add to string
      // else add elements to the string separated by a ', '
    // At every iteration add ', ' before adding elements to string
    // empty the array = []
  // return str