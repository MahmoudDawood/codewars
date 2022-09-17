function arrange(s) {
  const arr = [...s].reverse(), result = []
  let i = -1
  while(++i < s.length / 2){
    if(i % 2) result.push(arr[i], s[i])
    else result.push(s[i], arr[i])
  }
  return result.slice(0, s.length)
}

console.log(arrange([1,2,3,4,5,6]), [1, 6, 5, 2, 3, 4])
console.log(arrange([1,2]), [1,2]);
console.log(arrange([4, 3, 2]), [4, 2, 3]);
console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]), [9, 1, 5, 7, -2, 6, -3, 8, 5]);
console.log(arrange([1]), [1]);
console.log(arrange([]), []);
console.log(arrange([2, 4, 3, 4]),[2, 4, 3, 4]);