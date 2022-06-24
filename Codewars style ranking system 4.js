class User {
  constructor(){
    this.rank = -8
    this.progress = 0
  }

  incProgress(level) {
    this.rank = 1
    this.progress = 20
    if(level < -8 || level > 8 || level === 0) throw new Error()
    this.progress += level > this.rank && level > 0 && this.rank < 0 ? (level - this.rank - 1)**2 * 10 :
      level > this.rank ? (level - this.rank)**2 * 10 :
      level == this.rank ? 3 : 1
    this.rank += Math.floor(this.progress / 100)
    this.rank = this.rank === 0 ? this.rank++ : this.rank > 8 ? 8 : this.rank
    this.progress = this.rank === 8 ? 0 : this.progress % 100
  }
}

const user = new User()
// console.log(user.rank) // => -8
// console.log(user.progress) // => 0

user.incProgress(-1)
console.log(user.rank) // => -8
console.log(user.progress) // => 10

// user.incProgress(-5) // will add 90 progress
// console.log(user.rank) // => -7
// console.log(user.progress) // => 0
