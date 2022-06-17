function productFib(prod){
  // create 1st, 2nd parameters
  let first = 0, second = 1

  // iterate over fibbonacis till number >= the prod sqrt
  while(first * second < prod){
    second += first
    first = second - first
  }

  return [first, second, first * second === prod]

    // take this number (2nd) and it's previous (1st) and check if == prod
      // if yes return [1st, 2nd, true]
      // else return [2nd, 3rd, false] calculate 3rd = 1st + 2nd, 1st = 2nd
}

console.log(productFib(4895)) //, [55, 89, true])
console.log(productFib(5895)) //, [89, 144, false])
console.log(productFib(74049690)) //, [6765, 10946, true])
console.log(productFib(84049690)) //, [10946, 17711, false])
console.log(productFib(193864606)) //, [10946, 17711, true])
console.log(productFib(447577)) //, [610, 987, false])
console.log(productFib(602070)) //, [610, 987, true])

// Parameters: +ve integer
// Returns: [1st fibbonaci multiplicative, 2nd fibbonaci multiplicative, if product = 1st * 2nd]
// Examples:
  // Test.assertSimilar(productFib(4895), [55, 89, true])
  // Test.assertSimilar(productFib(5895), [89, 144, false])
  // Test.assertSimilar(productFib(74049690), [6765, 10946, true])
  // Test.assertSimilar(productFib(84049690), [10946, 17711, false])
  // Test.assertSimilar(productFib(193864606), [10946, 17711, true])
  // Test.assertSimilar(productFib(447577), [610, 987, false])
  // Test.assertSimilar(productFib(602070), [610, 987, true])
// Pseudocode:
  // create 1st, 2nd parameters
  // iterate over fibbonacis till number >= the prod sqrt
    // take this number (2nd) and it's previous (1st) and check if == prod
      // if yes return [1st, 2nd, true]
      // else return [2nd, 3rd, false] calculate 3rd = 1st + 2nd, 1st = 2nd