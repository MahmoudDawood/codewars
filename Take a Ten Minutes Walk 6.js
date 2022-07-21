function isValidWalk(walk) {
  // Create directions object
  const obj = {}
  // add each char to obj
  walk.forEach(x => obj[x] = (obj[x] || 0) + 1)
  // if walk length = 10 && n = s & e = w return true, else false
  return walk.length === 10 && obj['n'] === obj['s'] && obj['e'] === obj['w']
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // , 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // , 'should return false');
console.log(isValidWalk(['w'])) // , 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // , 'should return false');

// Params: Array of chars 'n', 's', 'e', 'w'
// Returns: true if it takes 10 moves && returns to starting point, else false
// // Examples:
//   console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // , 'should return true');
//   console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // , 'should return false');
//   console.log(!isValidWalk(['w'])) // , 'should return false');
//   console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // , 'should return false');
// Pseudocode:
  // Create directions object
  // add each char to obj
  // if walk length = 10 && n = s & e = w return true, else false