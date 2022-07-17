function resolver(guess, solution){
  // Make mark array, of 5 'b's
  const mark = new Array(5)
  const check = new Array(5)
  for(let i = 0; i < 5; i++) mark[i] = 'b'
  // Iterate over guess strings
  // if guess letter is present in solution at same location >> mark = g && mark[sol idx] = -
  for(let i = 0; i < 5; i++) if(guess[i] == solution[i]) mark[i] = 'g'
    
  
  for(let i = 0; i < 5; i++){ 
    // else if guess letter is present in solution with mark 'b' >> mark = y && mark[sol idx] = -
    if(solution.split('').includes(guess[i])){
      let idx
      // console.log(i, guess[i], solution[3])
      for(let j = 0; j < 5; j++) if(mark[i] == 'b' && guess[i] == solution[j] && !check[j]) idx = j
      // console.log(mark)
      // console.log(idx)
      // console.log(mark[i], !check[idx])
      // console.log(idx)
      if(idx >= 0){
        mark[i] = 'y'
        check[idx] = true
      }
    }
  }
  return mark.join('')
}
console.log(resolver('bleed', 'world'))  // bybbg
console.log(resolver('batty', 'stout'))  // bbyyb
console.log(resolver('blows', 'world'))  // byyyb
console.log(resolver('xxxxx', 'yxxxx'))
console.log(resolver('xxxxz', 'yyyyx'))


// Parameters: 2 five letters strings, guess and solution
// Returns: answer solution of 'g' if exists and in right location, 'y' exists, 'b' doesn't exist
// Examples: 
  // Guess: xxxxx
  // Answer: yxxxx
  // Expected Output: bgggg 

  // guess: xxxxz 
  // answer:yyyyx 
  // expected output: ybbbb 
// Pseudocode:
  // Make mark array, of 5 'b's
  // Iterate over guess strings
    // if guess letter is present in solution at same location >> mark = g && mark[sol idx] = -
    // else if guess letter is present in solution with mark 'b' >> mark = y && mark[sol idx] = -
