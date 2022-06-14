var recoverSecret = function(triplets) {
  // iterate over each triplete elements
  const arr = []
  for(let i = 0; i < 2; i++)
    triplets.forEach(triplet => {
      triplet.forEach((x, i, triplet) => {
        // if element not found in result array append to end
        if(arr.indexOf(x) === -1) arr.push(x)
        // else if found & there's element before it // if it comes in result before it's prior element
        else if(i !== 0 && arr.indexOf(x) < arr.indexOf(triplet[i - 1])) arr.splice(arr.indexOf(x), 0, ...arr.splice(arr.indexOf(triplet[i - 1]), 1))
        // move prior element in result to become just before curr
      })
    })
  // return result array as a string
  return arr.join('')
}

console.log(recoverSecret([
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],//
  ['t','i','s'],
  ['w','h','s']
]))

// Parameters: An array of triplets (3 unique chars in order)
// Returns: Original secret string
// Examples:
  // secret1 = "whatisup"
  // triplets1 = [
  //   ['t','u','p'],
  //   ['w','h','i'],
  //   ['t','s','u'],
  //   ['a','t','s'],
  //   ['h','a','p'],
  //   ['t','i','s'],
  //   ['w','h','s']
  // ]
  //    w h a t i s u p
// Pseudocode:
  // iterate over each triplete elements
    // if element not found in result array
      // append to end
    // else if found & there's element before it 
      // if it comes in result before it's prior element
        // move prior element in result to become just before curr
  // return result array as a string