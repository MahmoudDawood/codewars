function validBraces(braces) {
  let stack = []
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for(let i = 0; i < braces.length; i++){
    x = braces[i]
    // console.log(x)
    if(obj[x]) stack.push(x)
    else if(x === obj[stack[stack.length - 1]]) stack.pop()
    else return false
    // console.log("stack: ", stack)
  }
  return stack.join('') === ''
}

console.log(validBraces("()))"))
// console.log(validBraces("(){}[]"))
// console.log(validBraces("([{}])"))
// console.log(validBraces("(}"))
// console.log(validBraces("[(])"))
// console.log(validBraces("[({})](]"))


// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
// test braces as stack
// either close top bracket or open a new one
// at end stack should be empty