function Ackermann(m, n) {
  return !m ? n + 1 : !n ? Ackermann(m - 1, 1) : Ackermann(m - 1, Ackermann(m, n - 1))
//   if(m < 0 || n < 0) return null
//   if(!m) return n + 1
//   else if(!n) return A(m - 1, 1)
//   else return A(m - 1, A(m, n - 1))
}

console.log(Ackermann(1, 1))
console.log(Ackermann(4, 0))