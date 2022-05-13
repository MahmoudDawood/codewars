function digital_root(n) {
  while(n > 9) n = n.toString().split('').reduce((acc, curr) => acc += +curr, 0)
  return n
}