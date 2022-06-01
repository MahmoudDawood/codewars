function sumPairs(ints, s) {
  // Make an object obj
  const obj = {}

  // check if our element complement ( - sum) is already in our object
  for(x of ints) {
    // if yes return the [complement, element]
    if(obj[s - x]) return [s - x, x]
    // else add element to obj
    else obj[x] = 1
  }
  // if not found return undefined
  return undefined
  // const obj = ints.reduce((acc, curr, i) => ({...acc, [s - curr]: i}), {})
  // let last = 10000000
  // ints.forEach((x, i) => {
  //   if(obj[x] < last && obj[x] > i) last = obj[x]
  // })
  // return last == 10000000 ? undefined : [s - ints[last], ints[last]]
}

// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8))
console.log(sumPairs([5, 9, 13, -3], 10))
// console.log(sumPairs())
// console.log(sumPairs())
// console.log(sumPairs())

// Parameters: array of integers & a sum value
// Returns: first two values from left in order that add up to the sum || undefined if not found
// Examples:
  // assert.deepEqual(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7],
  // "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
  // assert.deepEqual(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6],
  // "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
  // assert.deepEqual(sumPairs([20, -13, 40], -7), undefined,
  // "No Match: [20, -13, 40] should return undefined for sum = -7");
  // assert.deepEqual(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1],
  // "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
  // assert.deepEqual(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7],
  // "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
  // assert.deepEqual(sumPairs([4, -2, 3, 3, 4], 8), [4, 4],
  // "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
  // assert.deepEqual(sumPairs([0, 2, 0], 0), [0, 0],
  // "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
  // assert.deepEqual(sumPairs([5, 9, 13, -3], 10), [13, -3],
  // "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");

// Pseduocode:
  // Make an object obj
  // check if our element complement ( - sum) is already in our object
    // if yes return the [complement, element]
    // else add element to obj
  // if not found return undefined