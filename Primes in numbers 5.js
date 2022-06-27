function primeFactors(n) {
  // arr primes = []
  // variable prime = 2
  let primes = [2], prime = 2, result = ""
  // function nextPrime() 
  function nextPrime(p) {
    // increments number while it's divisible by anything in primes arr
    while(primes.find(x => p % x === 0)) p++
    // when found a non divisble, add it to array and return it
    primes.push(p)
    return p
  }

  // while prime < n / 2
  while(prime <= Math.sqrt(n)){
    let cnt = 0
    // while n divisible by prime
    while(n % prime === 0){
      // divide it & get count
      n /= prime
      cnt++
    }
      // if count > 1, append to result (prime**count) : (prime)
    // prime = next prime
    result += cnt > 1 ? `(${prime}**${cnt})` : cnt === 1 ? `(${prime})` : ""
    prime = nextPrime(prime)
  }
  // if n !== 1 
  // add (n) to result
  // console.log(primes)
  return n !== 1 ? result + `(${n})` : result
}

// console.log(primeFactors(7775460))    // "(2**2)(3**3)(5)(7)(11**2)(17)"
// console.log(primeFactors(86240))      // "(2**5)(5)(7**2)(11)"

// Parameters: Integer > 2
// Returns: Prime factor decomposition string form
// Examples:
  // (primeFactors(7775460))    // "(2**2)(3**3)(5)(7)(11**2)(17)"
  // (primeFactors(86240))      // "(2**5)(5)(7**2)(11)"
// Pseudocode:
  // variable prime = 2
  // while prime < n / 2
    // while n divisible by prime
      // divide it & get count
      // if count > 1, append to result (prime**count) : (prime)
    // prime = next prime
  // if n !== 1 
    // add (n) to result

  // arr primes = []
  // function nextPrime() 
    // increments number while it's divisible by anything in primes arr
    // when found a non divisble, add it to array and return it