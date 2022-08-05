function divisibleCount(x, y, k) {
  if(x == y) return x % k == 0 ? 1 : 0
  for(let i = x; i <= y; i++) if(i % k === 0) return Math.floor((y - i) / k) + 1
}

console.log(divisibleCount(6, 11, 2))