function validPhoneNumber(phoneNumber) {
  for(let i = 0; i < phoneNumber.length; i++){
    if(i == 0){
      if(phoneNumber[i] != '(') return false
    } 
    else if(i == 4) {
      if(phoneNumber[i] != ')') return false
    }
    else if(i == 5){
      if(phoneNumber[i] != ' ') return false
    } 
    else if(i == 9){
      if(phoneNumber[i] != '-') return false
    } 
    else if(isNaN(phoneNumber[i])) return false
  }
  return true
}

console.log(valid("(123) 456-7890"))
console.log(valid("(123)456 7890"))
console.log(valid("(123) 456 7890"))

// 0 4  5  9
// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false