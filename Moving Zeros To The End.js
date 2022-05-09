function moveZeros(arr) {
  // let sum = 0
  // for(let i = 0; i < arr.length - sum; i++){
  //   if(arr[i] === 0) {
  //     arr.push(...arr.splice(i--, 1))
  //     sum++
  //   }
  // }
  // return arr

  return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
}