function getScore(n) {
    return n ? n * 50 + getScore(n - 1) : 0
}

console.log(getScore(1))
console.log(getScore(2))
console.log(getScore(3))
console.log(getScore(4))
console.log(getScore(5))