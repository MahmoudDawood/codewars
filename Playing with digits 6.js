function digPow(n, p) {
    // Calculate every combination of numbers digits until (n / sum) == whole num | > sum
    // const sum = start => n.toString().split('').reduce((acc, curr, i) => acc + (+curr)**(start + i), 0)
    // let start = -1
    // while(sum(++start) / n < 1000){
    //     // console.log(sum(start), sum(start)/ n)
    //     if(sum(start) % n == 0) return sum(start) / n
    // }
    // return -1
    const result = String(n).split('').reduce((acc, curr, i) => acc + (+curr)**(p + i), 0)
    return result % n ? -1 : result / n
}

console.log(digPow(89, 1)) // should return 1 since 8¹ + 9² = 89 = 89 * 1
console.log(digPow(92, 1)) // should return -1 since there is no k such as 9¹ + 2² equals 92 * k
console.log(digPow(695, 2)) // should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
console.log(digPow(46288, 3)) // should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Params: a positive integer
// Returns: k where (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// Examples:
    // digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
    // digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
    // digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
    // digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Pseudocode:
    // Calculate every combination of numbers digits until (n / sum) == whole num | > sum