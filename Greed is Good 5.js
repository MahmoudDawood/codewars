function score( dice ) {
  // Create object of 6 dice values set to zero
  const obj = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
  // const score = {1: 100, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}

  // append each dice value to object key
  dice.forEach(x => obj[x]++)

  // iterate over object elements counting maximum score
  return Object.keys(obj).reduce((acc, curr) => {
    // >> searching for 3s, computing score, decreasing values by 3
    while(obj[curr] >= 3) {
      acc += curr == 1 ? 1000 : curr * 100
      obj[curr] -= 3
    }
    // >> searching for 1s or 5s remaining * it's score value
    while(obj[curr] > 0){
      acc += curr == 1 ? 100 : curr == 5 ? 50 : 0
      obj[curr]--
    }
    return acc
  }, 0)
}
// console.log( score( [2, 3, 4, 6, 2] )) // 0
// console.log( score( [4, 4, 4, 3, 3] )) // 400
console.log( score( [2, 4, 4, 5, 4] )) // 450

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

// Parameters: Array of five six face dice values
// Returns: Maximum score it could get by declared rules
// Examples:
  // console.log( score( [2, 3, 4, 6, 2] ))// == // 0,  
  // console.log( score( [4, 4, 4, 3, 3] ))// == // 400
  // console.log( score( [2, 4, 4, 5, 4] ))// == // 450
// Pseudocode:
  // Create object of 6 dice values set to zero
  // append each dice value to object key
  // iterate over object elements counting maximum score
  // >> searching for 3s, computing score, decreasing values by 3
  // >> searching for 1s or 5s remaining * it's score value