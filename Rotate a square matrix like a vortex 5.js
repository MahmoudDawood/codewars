function rotateLikeAVortex(matrix) {
  // Set levels counter to 0
  let arr = [], old = [], swap = [], level = 0
  arr = matrix.map(x => x = x.slice())
  old = matrix.map(x => x = x.slice())
  // while level < lower limit of input array length / 2
  while(level < Math.floor(arr.length / 2)){
    // limit = length - level - 1
    const limit = arr.length - level - 1

    // call rotate function n times (n = levels)
    for(let k = 0; k < level + 1; k++){
      // column = level,              row = level >+> limit    -left side
      for(let i = level; i <= limit; i++){
        // store values in swap arr
        swap.push(arr[i][level])
      }
      // column = level >+> limit,     row = limit             -bottom side
      for(let i = level; i <= limit; i++){
        // swap values of swap arr to this side while storing this side values
        let temp = old[limit][i]
        arr[limit][i] = swap[i - level]
        swap[i - level] = temp
      }
      // column = limit,              row = limit >_> level    -right side
      for(let i = limit; i >= level; i--){
        // swap values of swap arr to this side while storing this side values
        let temp = old[i][limit]
        arr[i][limit] = swap[limit - i]
        swap[limit - i] = temp
      }
      // column = limit >_> level,     row = level             -top side
      for(let i = limit; i >= level; i--){
        // swap values of swap arr to this side while storing this side values
        let temp = old[level][i]
        arr[level][i] = swap[limit - i]
        swap[limit - i] = temp
      }
      // column = level,              row = level >+> limit    -left side
      for(let i = level; i <= limit; i++){
          // store swap array values in this side
          arr[i][level] = swap[i - level]
      }
      // empty swap arr
      swap = []
      old = arr.map(x => x.slice())
    }
    // level++
    level++
  }
  // return result arr
  return arr
}
let matrix = [[8, 7],
              [2, 4]]
              // [7, 4]
              // [8, 2]
matrix = [[ 5, 3, 6, 1 ],
          [ 5, 8, 7, 4 ],
          [ 1, 2, 4, 3 ],
          [ 3, 1, 2, 2 ] ];
console.log(rotateLikeAVortex(matrix))

// Parameters: n * n array
// Returns: array rotated each level by serial starting at 1 counter clock wise incrementing
// Examples:
  // let matrix = [ [ 5, 3, 6, 1 ],
  //                 [ 5, 8, 7, 4 ],
  //                 [ 1, 2, 4, 3 ],
  //                 [ 3, 1, 2, 2 ] ];
  // let expected = [ [ 1, 4, 3, 2 ],
  //                   [ 6, 4, 2, 2 ],
  //                   [ 3, 7, 8, 1 ],
  //                   [ 5, 5, 1, 3 ] ];
// Pseudocode:
  // Set levels counter to 0
  // while level < lower limit of input array length / 2
    // limit = length - level - 1
    // call rotate function n times (n = levels)
      // column(x) = level,              row(y) = level >> limit    -left side
        // store values in switch arr
      // column(x) = level >> limit,     row(y) = limit             -bottom side
        // switch values of switch arr to this side while storing this side values
      // column(x) = limit,              row(y) = limit >> level    -right side
        // switch values of switch arr to this side while storing this side values
      // column(x) = limit >> level,     row(y) = level             -top side
        // switch values of switch arr to this side while storing this side values
      // column(x) = level,              row(y) = level >> limit    -left side
        // store switch array values in this side
      // empty swap arr
    // level++