function sqInRect(lng, wdth) {
  const arr = []
  while(lng != wdth){
    arr.push(Math.min(lng, wdth))
    lng > wdth ? lng -= wdth : wdth -= lng
  }
  return arr.length ? arr.concat([lng]) : null
}

console.log(sqInRect(5, 5))
console.log(sqInRect(5, 3))
console.log(sqInRect(3, 5))
console.log(sqInRect(20, 14))