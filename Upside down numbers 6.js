function solve(x, y) {
    let count = 0, obj = {"6": "9", "9": "6", "0": "0", "1": "1", "8": "8"}
    for(let i = x; i < y; i++){
        let n = i.toString(), len = n.length, done = true
        for(let j = 0; j < (len + 1) / 2; j++){
            if(len % 2 && j == (len - 1) / 2){ // odd
                if(!['0', '1', '8'].includes(n[j])) done = false
            }
            else if(obj[n[j]] != n[len - 1 - j]) done = false
        }
        if(done) count++
    }
    return count
};
// Create count = 0, obj = {6: 9, 9: 6}
// Iterate over numbers in range
// Move in each number digits individually until mid
// if mid number
// if is from {0, 1, 8} >> cnt++
// else break (search if it breaks inside loop only)
// else if obj[digit] != the mirror element (last element - index) break
// return count

// Params: range of numbers
// Returns: count of upside down numbers in range
// Examples:
// console.log(solve(0,10),3)
// console.log(solve(10,100),4)
// console.log(solve(100,1000),12)
// console.log(solve(1000,10000),20)
// console.log(solve(10000,15000),6)
// console.log(solve(15000,20000),9)
// console.log(solve(60000,70000),15)
// console.log(solve(60000,130000),55)
console.log(solve(0,111),8)
