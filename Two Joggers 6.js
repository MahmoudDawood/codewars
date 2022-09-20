var nbrOfLaps = function (x, y) {
  const value = {'x': 0, 'y': 0}
  // As long as two laps are not equal
  // Increase the smalles of them by it's value once, add to it's tuple element
  while(x * (value.x + 1) != y * (value.y + 1))
    x * (value.x + 1) > y * (value.y + 1) ? value.y++ : value.x++
  return [value.x + 1, value.y + 1]
}

  console.log(nbrOfLaps(5, 3)); // returns [3, 5]
  console.log(nbrOfLaps(4, 6)); // returns [3, 2]

// Params: Length of first jogger lap, length of second jogger lap
// Returns: Tuple of number of laps required to meet at starting point
// Examples:
  // nbrOfLaps(5, 3); // returns [3, 5]
  // nbrOfLaps(4, 6); // returns [3, 2]
// Pseudocode:
  // As long as two laps are not equal
    // Increase the smalles of them by it's value once, add to it's tuple element