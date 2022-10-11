function flatten() {
    const result = []
    for(const element of arguments){
        if(Array.isArray(element)) result.push(...flatten(...element))
        else result.push(element)
    }
    return result
}
// console.log([1, [2, 3], 4, 5, [6, [7]]].toString())
// console.log(flatten(1, 2, 3, 'a'))
// console.log(flatten(1, [2, 3], 4, 5, [6, [7]])) // returns [1, 2, 3, 4, 5, 6, 7]
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])) // returns ['a', 'b', 2, 3, null, 4, 'c']
