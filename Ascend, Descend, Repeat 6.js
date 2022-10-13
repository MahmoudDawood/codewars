function ascendDescend(length, minimum, maximum) {
    let str = "", cnt = minimum
    while(str.length < length && minimum < maximum){
        while(cnt <= maximum && str.length < length){
            str += cnt.toString()
            cnt++
        }
        cnt--
        while(cnt > minimum && str.length < length){
            cnt--
            str += cnt.toString()
        }
        cnt++
    }
    return minimum == maximum ? Array(length).fill(minimum).join('') : str.slice(0, length)
}

console.log(ascendDescend(5, 1, 3))
console.log(ascendDescend(14, 0 ,2))
console.log(ascendDescend(11, 5, 9))
console.log(ascendDescend(10, 1, 1))