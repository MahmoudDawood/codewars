function order(words){
  const numerate = (s) => s.split('').find(x => Number.isInteger(+x))
  return words.split(' ').sort((a, b) => numerate(a) - numerate(b)).join(' ')
}
console.log(order("is2 Thi1s T4est 3a"))   // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))   // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order(""))
console.log([1,2,6,3].find(x => x > 5))