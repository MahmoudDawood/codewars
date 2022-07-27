function isPrime(num) {
  const primes = (n) => {
    let cnt = 0
    for(let i = 2; i <= Math.sqrt(n); i++) if(n % i === 0) cnt++
    return cnt === 0
  }
  return num > 1 && primes(num)
}

console.log(isPrime(0)) // ,  false, "0 is not prime");
console.log(isPrime(1)) // ,  false, "1 is not prime");
console.log(isPrime(2)) // ,  true, "2 is prime");
console.log(isPrime(73)) // , true, "73 is prime");
console.log(isPrime(75)) // , false, "75 is not prime");
console.log(isPrime(-1)) // , false, "-1 is not prime");