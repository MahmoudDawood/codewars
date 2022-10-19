function pyramidHeight(n) {
    let h = 0
    while(Math.pow(h + 1, 2) <= n)
        n -= Math.pow(++h, 2)
    return h
}

console.log(pyramidHeight(4))
console.log(pyramidHeight(5))
console.log(pyramidHeight(13))
console.log(pyramidHeight(14))

// 1 >> 4 >> 9 >> 16
// 1 >> 2 >> 3 >> 4