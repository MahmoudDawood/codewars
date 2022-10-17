function range([start = 0, stop, step = 1]) {
    // If stop == undefined
    // console.log(start, stop, step)
    if(stop === undefined) return Array(start).fill(null).map((x, i) => x = i)
        // return array from 0 to (start) with step = 1
    else if(step == 0) return Array(stop - start).fill(start)
    // else 
    return Array((stop - start) / step).fill(null).map((x, i) => start + step * i)
        // return array from start to stop - 1 with step
}
// console.log(Array(0).fill(null).map((x, i) => x = i))
// console.log(range([0]), []);
// console.log(range([1]), [0]);
// console.log(range([5]), [0, 1, 2, 3, 4]);
// console.log(range([10]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// console.log(range([1, 1]), []);
// console.log(range([1, 5]), [1, 2, 3, 4]);
// console.log(range([5, 10]), [5, 6, 7, 8, 9]);
// console.log(range([1, 11]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(range([1, 1, 1]), []);
console.log(range([1, 2, 1]), [1]);
console.log(range([2, 6, 2]), [2, 4]);
console.log(range([1, 5, 0]), [1, 1, 1, 1]);

// Params: start, end, step
// Returns: Array 
// Examples:
// it('range(stop)', () => {
//     test([0], []);
//     test([1], [0]);
//     test([5], [0, 1, 2, 3, 4]);
//     test([10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   });

//   it('range(start, stop)', () => {
//     test([1, 1], []);
//     test([1, 5], [1, 2, 3, 4]);
//     test([5, 10], [5, 6, 7, 8, 9]);
//     test([1, 11], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   });

//   it('range(start, stop, step)', () => {
//     test([1, 1, 1], []);
//     test([1, 2, 1], [1]);
//     test([2, 6, 2], [2, 4]);
//     test([1, 5, 0], [1, 1, 1, 1]);
//   });
