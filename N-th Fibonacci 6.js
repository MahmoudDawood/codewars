const nthFibo = (n) =>  n < 3 ? n - 1 : nthFibo(n - 1) + nthFibo(n - 2)


console.log(nthFibo(1))
console.log(nthFibo(2))
console.log(nthFibo(3))
console.log(nthFibo(4))
console.log(nthFibo(5))
console.log(nthFibo(6))