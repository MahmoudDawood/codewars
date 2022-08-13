function queueTime(arr, n) {
  /*
  Make array of tills starting at nulls
  allocate first arr client in queue to each till
  if array is empty return time
  find minimum client on till and subtract it's value from all tills, add it to time, add another client
*/
  let time = 0, tills = Array(n).fill(null)
  while(arr.length){
    // subtract lest time from first n clients in queue
    let min = 1e9
    for(let i = 0; i < n && i < arr.length; i++){
      min = Math.min(arr[i], min)
    }
    for(let i = 0; i < n && i < arr.length; i++){
      arr[i] -= min
    }
    // console.log(min)
    time += min

    arr = arr.filter(x => x != 0)
  }
  return time
}

console.log(queueTime([5,3,4], 1), 12)
console.log(queueTime([10,2,3,3], 2), 10)
console.log(queueTime([2,3,10], 2), 12)

/*
  Make array of tills starting at nulls
  allocate first arr client in queue to each till
  if array is empty return time
  find minimum client on till and subtract it's value from all tills, add it to time, add another client
*/