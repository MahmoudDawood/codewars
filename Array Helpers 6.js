// Array.prototype.square = () => this.map(x => x ** 2)
// Array.prototype.cube = () => this.map(x => x ** 3)
// Array.prototype.average = () => this.reduce((acc, curr) => acc + curr) / this.length
// Array.prototype.sum = () => this.reduce((acc, curr) => acc + curr)
// Array.prototype.even = () => this.filter(x => !x % 2)
// Array.prototype.odd = () => this.filter(x => x % 2)

Object.defineProperty(Array.prototype, 'square', {
  value: function() {
    return this.map(x => x ** 2)
  }
})
Object.defineProperty(Array.prototype, 'cube', {
  value: function() {
    return this.map(x => x ** 3)
  }
})
Object.defineProperty(Array.prototype, 'average', {
  value: function() {
    return this.length ? this.reduce((acc, curr) => acc + curr) / this.length : NaN
  }
})
Object.defineProperty(Array.prototype, 'sum', {
  value: function() {
    return this.reduce((acc, curr) => acc + curr)
  }
})
Object.defineProperty(Array.prototype, 'even', {
  value: function() {
    return this.filter(x => !(x % 2))
  }
})
Object.defineProperty(Array.prototype, 'odd', {
  value: function() {
    return this.filter(x => x % 2)
  }
})


var numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());  // must return [1, 4, 9, 16, 25]
console.log(numbers.cube())    // must return [1, 8, 27, 64, 125]
console.log(numbers.average()) // must return 3
console.log(numbers.sum())     // must return 15
console.log(numbers.even())    // must return [2, 4]
console.log(numbers.odd())     // must return [1, 3, 5]
