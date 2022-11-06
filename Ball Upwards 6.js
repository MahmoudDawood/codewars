function maxBall(v0) {
  let h = 0, g = 9.81, t = 0
  const height = (t) => v0 * (1000 /( 60 * 60)) * t - 0.5 * g * t * t
  while(height(t + 0.1) >= h){
    // console.log(t, h)
    t += 0.1
    h = Math.max(height(t), h)
  }
  return Math.round(t * 10)
}

console.log(maxBall(37), 10)
console.log(maxBall(45), 13)
console.log(maxBall(99), 28)
console.log(maxBall(85), 24)

console.log(maxBall(15)) // 4
console.log(maxBall(25)) // 7

// h = v*t - 0.5*g*t*t