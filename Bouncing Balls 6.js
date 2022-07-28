function bouncingBall(h,  bounce,  window) {
  // start counter at 1 where ball drops 
  if(bounce >= 1 || bounce <= 0 || window >= h) return -1
  let cnt = 1, nh = h * bounce
  while(nh > window) {
    cnt += 2
    nh *= bounce
  }
  return cnt
  // calculate new height, if it's heigher than window, cnt +2, if equals cnt +1, else return cnt
}

console.log(bouncingBall(2, 0.5, 1)) //  1
console.log(bouncingBall(3.0, 0.66, 1.5)) //  3
console.log(bouncingBall(30.0, 0.66, 1.5)) //  15
console.log(bouncingBall(3.0, 1.0, 1.5)) //  -1
