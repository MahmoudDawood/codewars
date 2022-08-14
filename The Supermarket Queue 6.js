function queueTime(customers, n) {
  let time = 0, tills = Array(n).fill(null)
  while(customers.length){
    let min = 1e9
    for(let i = 0; i < n && i < customers.length; i++) min = Math.min(customers[i], min)
    
    for(let i = 0; i < n && i < customers.length; i++) customers[i] -= min
    
    time += min
    customers = customers.filter(x => x != 0)
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