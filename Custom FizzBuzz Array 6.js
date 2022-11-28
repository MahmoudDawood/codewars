function fizzBuzzCustom(fizz = "Fizz", buzz = "Buzz", a = 3, b = 5) {
  return Array(101).fill(null).map((_, i) => !(i % (a * b)) ? fizz + buzz : !(i % a) ? fizz : !(i % b) ? buzz : i).slice(1)
}

console.log([...Array(3).keys()]) // >> [0, 1, 2]
// let i = 15
// console.log(!(i % (3 * 5)))// ? "fizzbuzz" : !i % 3 ? "fizz" : !i % 5 ? "buzz" : i)
// console.log(fizzBuzzCustom())
console.log(fizzBuzzCustom()[15])                         // returns 16
console.log(fizzBuzzCustom()[44])                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
console.log(fizzBuzzCustom('Hey', 'There')[25])         // returns 26
console.log(fizzBuzzCustom('Hey', 'There')[11])         // returns "Hey" (12 is divisible by 3)
console.log(fizzBuzzCustom("What's ", "up?", 3, 7)[80]) // returns "What's " (81 is divisible by 3)
