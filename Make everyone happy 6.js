function smile(str) {
  const check = (face) => {
    return (face[0] == '-' || face[0] == '~') && (face[1] == '(' || face[1] == '[') ? true : (face[0] == '(' || face[0] == '[')
  }
  for(let i = 0; i < str.length; i++){
    if(str[i] == ':' || str[i] == ';' || str[i] == '='){
      if(check(str.slice(i + 1, i + 3))){
        if(str[i+1] == '-' || str[i+1] == '~'){
          let left = str.slice(0, i + 2), right = str.slice(i + 3)
          str = left + (str[i+2] == '(' ? ')' : ']') + right
        }
        else{
          let left = str.slice(0, i + 1), right = str.slice(i + 2)
          str = left + (str[i+1] == '(' ? ')' : ']') + right
        }
      }
    }
  }
  return str
}
// let s = 'abcd'
// s[1] = 'm'
// console.log(s.slice(1, 3))
console.log(smile("Howdy :("))  // should return "Howdy :)"
console.log(smile("Howdy :-("))  // should return "Howdy :)"
console.log(smile("Never be sad =["))  // should return "Never be sad =]"
console.log(smile("Change this `=(` and this `:[`"))  // should return "Change this `=)` and this `:]`"
