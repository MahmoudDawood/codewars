function prime(num) {
  const valid = Array(num + 1).fill(true), primes = []
  for(let i = 2; i <= num; i++){
    if(valid[i]) {
      primes.push(i)
      for(let j = i * 2; j <= num; j += i)
        valid[j] = false
    }
  }
  return primes
}

console.log(prime(11))