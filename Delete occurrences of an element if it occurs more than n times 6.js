function deleteNth(arr,n){
  const cache = {}
  return arr.filter(x => {
    cache[x] = (cache[x] || 0) + 1
    return cache[x] <= n
  })
}
    // if(!obj[x]) obj[x] = 1
    // else if(obj[x] < n) obj[x]++
    // else return false
    // return true

console.log(deleteNth([1,2,3,1,2,1,2,3], 2)) // , [1, 2, 3, 1, 3, 3])
console.log(deleteNth([20,37,20,21], 1)) // , [20,37,21])
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // , [1, 1, 3, 3, 7, 2, 2, 2])