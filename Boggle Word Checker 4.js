function checkWord(board1, word) {
  const board = Array.from(board1).map((_, i) => [...board1[i]])
  // Create a check function to see if the next char is available next to current char
  const check = (c, [x, y]) => {
    const arr = []
    for(let i = x - 1; i < x + 2; i++){
      for(let j = y - 1; j < y + 2; j++){
        if(i >= 0 && i < board.length && j >= 0 && j < board.length){
          if(board[i][j] == c) arr.push([i , j]) // May return error on bounds (undefined)
        }
      }
    }
    return arr.length ? arr : []
  }

  // Create next function(new board, new word, [i, j] coordinates of current char)
    // If string is empty return true
    // If found an adjacent next char >> recall next with new values
    // return false
  const next = (board, word, [x, y]) => {
    if(word.length < 2) return true
    const nextSteps = check(word[1], [x, y])
    const temp = board[x][y]
    board[x][y] = '0'
    for(const step of nextSteps) {
      if(next(board, word.slice(1), step)) return true
    }
    board[x][y] = temp
    return false
  }

  // Search for all starting char instances
    // Call next on each of them, if true return true
  // return false
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board.length; j++){
      if(board[i][j] == word[0]) {
        if(word.length == 1) return true
        const nextSteps = check(word[1], [i, j])
        if(nextSteps) {
          const temp = board[i][j]
          board[i][j] = '0'
          for(const step of nextSteps){
            if(next(board, word.slice(1), step)) return true
          }
          board[i][j] = temp
        }
      }
    }
  }
  return false
}

// const x = [1, 2]
// const y = Array.from(x)
// y.push(3)
// console.log(y)
// console.log(x)

// const a =   [["E","A","R","A"],
// ["N","L","E","C"],
// ["I","A","I","S"],
// ["B","Y","O","R"]]

// console.log(checkWord(a, "C"))

const arr =  [  ["I","L","A","W"],
                ["B","N","G","E"],
                ["I","U","A","O"],
                ["A","S","R","L"] ]

console.log(checkWord(arr, "NGOL"))
console.log(checkWord(arr, "BINGO"))
console.log(arr)
console.log(checkWord(arr, "LINGO")) //
console.log(checkWord(arr, "ILNBIA")) // >> True
console.log(checkWord(arr, "BUNGIE"))
console.log(checkWord(arr, "BINS")) //
console.log(checkWord(arr,  "SINUS")) // >> False

// Params: 2D array of chars, a string
// Returns: If string could be formed of unique consecutive adjacent array elements
// Examples: 
  // [ ["I","L","A","W"],
  //   ["B","N","G","E"],
  //   ["I","U","A","O"],
  //   ["A","S","R","L"] ]
  // "BINGO", "LINGO", "ILNBIA" >> True
  // "BUNGIE", "BINS",  "SINUS" >> False
