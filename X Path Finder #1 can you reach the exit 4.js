function pathFinder(maze){
  // Convert maze string to array of n * n
  let temp = maze.split('')
  for(let i = 0; i < Math.sqrt(temp.length) - 1; i++){
    temp.splice((i+1) * Math.sqrt(temp.length), 1)
  }
  // console.log(temp, temp.length)
  const arr = new Array(Math.sqrt(temp.length))
  for(let i = 0; i < arr.length; i++) arr[i] = [...temp.splice(0 ,3)]
  console.log(arr)
  // for(let i = 0; i < temp.length; i++){
  //   arr[Math.floor(i / Math.sqrt(temp.length))].push(temp[i])
  // }
  // console.log(arr)

  // Starting @ [0, 0] Seach the maze backtracking movig up right down left
  function search(row, col){
    if(row === arr.length - 1 && col === arr.length - 1) return true
    if(arr[row - 1, col]) search(row - 1, col) // Up
    if(arr[row, col + 1]) search(row, col + 1) // Right
    if(arr[row + 1, col]) search(row + 1, col) // Down
    if(arr[row, col - 1]) search(row, col - 1) // Left
    return false
  }
  return search(0, 0) ? true : false
    // If maze end could be reached [n-1, n-1] return true
}
// let temp = [[],1,2,3]
// temp[0].push(4)
// console.log(temp)
console.log(pathFinder(`.W.
.W.
...`))

// Parameters: Maze string of '.' as empty and 'W' as wall.
// Returns: true if maze end [n-1, n-1] could be reached, false else
// Examples:
  // true,
  //   `.W.
  //   .W.
  //   ...`

  // false,
  //   `.W.
  //   .W.
  //   W..`
    
  // true,
  //   `......
  //   ......
  //   ......
  //   ......
  //   ......
  //   ......`
    
  // false,
  //   `......
  //   ......
  //   ......
  //   ......
  //   .....W
  //   ....W.`

// Pseudocode:
  // Convert maze string to array of n * n
  // Starting @ [0, 0] Seach the maze backtracking movig up right down left
    // If maze end could be reached [n-1, n-1] return true