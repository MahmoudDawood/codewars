function averageString(str) {
  const numbers = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
  }
  const av = Math.floor(str.split(' ').reduce((acc, curr) => acc + numbers[curr], 0)/ str.split(' ').length)
  return isNaN(av) || av > 9 || !str ? "n/a" : Object.keys(numbers).find(n => numbers[n] == av)
}
// console.log(averageString("zero nine five two"))
console.log(averageString("seven vkar three five two eight"))
// create object of numbers with corresponding string
// calculate sum of values and divide by their count 