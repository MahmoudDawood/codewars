function isAValidMessage(message){
  for(let i = 0; i < message.length; i++) {
    let cnt = ''
    while(Number.isInteger(+message[i])) cnt += message[i++]
    // console.log("cnt: " + cnt)
    for(let j = i; j < i + +cnt; j++) {
      // console.log(message[j])
      if(!message[j] || message[j].toLowerCase() == message[j].toUpperCase()) return false
    }
  }
  return true
}

console.log(isAValidMessage("3hey5hello2hi")) // true
console.log(isAValidMessage("4code13hellocodewars")) // true=
console.log(isAValidMessage("3hey5hello2hi5")) // false
console.log(isAValidMessage("code4hello5")) // false
console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee")) // true
console.log(isAValidMessage("")) // true