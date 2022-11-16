function solution(words) {
  // Iterate over words 
  // if words have a fitting word
    // remove original word and move fitting word to start
    // if words count == 1 return true (break cond)
  // return false
  console.log(words, words.length)
  if(words.length == 1) return true
  let sol = false
  for(let i = 0; i < words.length; i++){
    console.log(words[i])
    const idx = words.slice(0, i).concat(words.slice(i + 1)).findIndex(word => word[0] == words[i].slice(-1))
    if(idx !== -1) {
      // const arr = words.split(' ')
      // arr.splice(idx, 1)
      if(i < idx) {
        // if(solution([words[idx]].concat(arr)))
        // if(solution([words[idx]].concat(words.slice(0, i).concat(words.slice(i + 1))))) 
      }
      // if(solution(words.filter(x => x == fit)[0]))
      //   sol = true
      // if(solution(arr.slice(0, i).concat(arr.slice(i + 1)))) sol = true
    }
  }
  return sol
}

// Params: array of lowercase string
// Returns: if array combinations could form sequence where end of word = beginning of next
// Ex:
// Pseudocode: 
  // Iterate over words 
    // if words have a fitting word
      // remove original word and move fitting word to start
      // if words count == 1 return true (break cond)
  // return false

// console.log(solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"]), true)
// console.log(solution(["trade", "pole", "view", "grave", "ladder", "mushroom", "president"]), false)
// console.log(solution(["screen", "desire", "theater", "excess", "night"]), true)
// console.log(solution(["engine", "endure", "elite", "excess"]), true)
// console.log(solution(["east", "e", "e", "t", "t", "e", "time"]), true)
console.log(solution(["no", "dog", "on", "good"]), false)