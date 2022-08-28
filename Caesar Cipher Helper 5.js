class CaesarCipher {
  constructor(n){
    this.shift = n
  }

  encode(str){
    return str.toUpperCase().split('').map(x => {
      if(x.toUpperCase() != x.toLowerCase()){
        if(x.charCodeAt(0) + this.shift <= 'Z'.charCodeAt(0))
          return String.fromCharCode(x.charCodeAt(0) + this.shift)
        return String.fromCharCode((x.charCodeAt(0) + this.shift) % 'Z'.charCodeAt(0) + 'A'.charCodeAt(0) - 1)
      }
      return x
    }).join('')
  }

  decode(str){
    return str.toUpperCase().split('').map(x => {
      if(x.toUpperCase() != x.toLowerCase()){
        if(x.charCodeAt(0) - this.shift >= 'A'.charCodeAt(0))
          return String.fromCharCode(x.charCodeAt(0) - this.shift)
        return String.fromCharCode('Z'.charCodeAt(0) - ('A'.charCodeAt(0) - (x.charCodeAt(0) - this.shift)) + 1)
      }
      return x
    }).join('')
  }
}

// console.log('Z'.charCodeAt(0))
const c = new CaesarCypher(5)
console.log(c.encode('Codewars'))
console.log(c.decode('BFKKQJX'))