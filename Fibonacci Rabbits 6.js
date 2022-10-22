function fib_rabbits(n, b) {
    // set immature = 1, mature = 0
    let [immature, mature] = [1, 0]
    // let immatures = 1, matures = 0
    // Iterate over months from 0 until n
    for(let i = 0; i < n; i++){
        // Multiply matures * number of births, put it in immatures
        // Take old immatures value, add it to old matures, put in matures
        [immature, mature] = [mature * b, mature + immature]
        // mature += immature
        // immature = (mature - immature) * b
    }
    // return matures count
    return mature
}

console.log(fib_rabbits(5, 3))
console.log(fib_rabbits(0, 4))
console.log(fib_rabbits(1, 4))
console.log(fib_rabbits(4, 0))
console.log(fib_rabbits(6, 3))
console.log(fib_rabbits(8, 12))
console.log(fib_rabbits(7, 4))

// Params: number of months, number of births each month
// Returns: Resulting number of mature rabbits
// Examples:
    // [0,  4,    0],
    // [1,  4,    1],
    // [4,  0,    1],
    // [6,  3,   40],
    // [8, 12, 8425],
    // [7,  4,  181]

    // n = 5 months
    // b = 3 births
    // -> 19 mature rabbit pairs

    // Month 	Immature pairs 	Mature pairs
    // 0 	        1            	0
    // 1 	        0            	1
    // 2 	        3            	1
    // 3 	        3            	4
    // 4 	        12           	7
    // 5 	        21           	19