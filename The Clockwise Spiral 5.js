function createSpiral(N) {
  if(!Number.isInteger(N)) return []
  let arr = Array.from(Array(N), () => Array(N))
  let leftUp = 0, rightDown = N - 1, cnt = 1
  while(leftUp <= rightDown){
    for(let i = leftUp; i <= rightDown; i++) arr[leftUp][i] = cnt++ // upper side
    for(let i = leftUp + 1; i <= rightDown; i++) arr[i][rightDown] = cnt++ // right side
    for(let i = rightDown - 1; i >= leftUp; i--) arr[rightDown][i] = cnt++ // bottom side
    for(let i = rightDown - 1; i >= leftUp + 1; i--) arr[i][leftUp] = cnt++ // left side
    leftUp++
    rightDown--
  }
  return arr
}

console.log(createSpiral(2.5))