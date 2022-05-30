function spiralize (n) {
  // Create n * n array of zeros
  const arr = new Array(n)
  for(let i = 0; i < n; i++) arr[i] = new Array(n)

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++) arr[i][j] = 0
  }
  
  // Starting from 0, 0
  let x = 0, y = 0, upLeft = 0, downRight = n - 1, lastX = -1, lastY = -1
  // console.log(arr)
  
  // untill last position was not changed
  while(lastX !== x || lastY !== y){
    lastX = x
    lastY = y

    // Go right till n - 1
    while(x <= downRight) {
      arr[y][x++] = 1
      if(x <= downRight && arr[y+1][x] === 1) {
        arr[y][x] = 0
        break
      }
    }
    x--
    
    // Go down till n - 1
    while(y <= downRight) {
      arr[y++][x] = 1
      if(y <= downRight && arr[y][x-1] === 1) {
        arr[y][x] = 0
        break
      }
    }
    y--
    
    // Go left till 0
    while(x >= upLeft) {
      arr[y][x--] = 1
      if(x >= upLeft && arr[y-1][x] === 1) {
        arr[y][x] = 0
        break
      }
    }
    x++
    
    // Go up till 2
    while(y >= upLeft + 2) {
      arr[y--][x] = 1
      if(y >= upLeft + 2 && arr[y][x+1] === 1) {
        arr[y][x] = 0
        break
      }
    }
    y++
    
    // (((LAST +2))) for up and left (((LAST -2))) for right and down
    upLeft += 2
    downRight -= 2
  }
  
  // for(let i = 0;i < n; i++) console.log(arr[i])
  return arr
}
// spiralize(8)
console.log(spiralize(7))

// Parameters: size >= 5
// Returns: create N * N spiral, return it as array of row arrays
// Examples:
  // 5
  // 00000
  // ....0
  // 000.0
  // 0...0
  // 00000
      // [1,1,1,1,1],
			// [0,0,0,0,1],
			// [1,1,1,0,1],
			// [1,0,0,0,1],
			// [1,1,1,1,1]]

  // 10
  // 0000000000
  // .........0
  // 00000000.0
  // 0......0.0
  // 0.0000.0.0
  // 0.0..0.0.0
  // 0.0....0.0
  // 0.000000.0
  // 0........0
  // 0000000000
       //8
      // [1,1,1,1,1,1,1,1],
			// [0,0,0,0,0,0,0,1],
			// [1,1,1,1,1,1,0,1],
			// [1,0,0,0,0,1,0,1],
			// [1,0,1,0,0,1,0,1],
			// [1,0,1,1,1,1,0,1],
			// [1,0,0,0,0,0,0,1],
			// [1,1,1,1,1,1,1,1]

      

// Pseudocode:
  // Create n * n array of zeros
  // Starting from 0, 0
  // Go right till n - 1 Transforming to 1s
  // Go down till n - 1 transforming to 1s
  // Go left till 0 transforming to 1s
  // Go up till 2 (((LAST +2))) for up and left (((LAST -2))) for right and down
  // Go right till n - 3
  // Go down till n - 3
  // Go left till 2
  // Go up till 4 ...... untill next new position cannot be changed