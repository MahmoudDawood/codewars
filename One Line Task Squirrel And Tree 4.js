squirrel=(h,H,S)=>+((h*h+S*S)**.5*H/h).toFixed(4)


console.log(squirrel(4, 16, 3))
console.log(squirrel(8, 9, 37))
// 20
// 42.5869