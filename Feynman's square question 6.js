function countSquares(n) {
    return n == 0 ? 0 : n**2 + countSquares(n - 1)
}

console.log(countSquares(1))
console.log(countSquares(2))
console.log(countSquares(3))