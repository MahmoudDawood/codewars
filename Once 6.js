function once(fn) {
  let flag = true
  return function it(...arguments){
    if(flag){
      flag = false
      return fn(...arguments)
    }   
  }
}
const minn = once(Math.min)
minn(2, 5)
console.log(minn(2, 5))
const test = once(console.log)
test('1')
test('2')
test('2')