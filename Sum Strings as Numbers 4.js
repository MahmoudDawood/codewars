function sumStrings(a,b) { 
  // Reverse the two strings
  a = a.split('').reverse().join('')
  b = b.split('').reverse().join('')
  let sum = "", stored = 0

  // append zeros at end to make the two strings equal in length
  while(a.length < b.length) a += "0"
  while(a.length > b.length) b += "0"

  // Iterate over them from start to end
  for(let i = 0; i < a.length; i++){
    // add the two chars as integers + stored value, add  %10 value to sum string, set stored to 0
    let temp = parseInt(a[i]) + parseInt(b[i]) + stored
    sum += temp % 10
    stored = 0
    
    // if added chars value > 9, store 1
    if(temp > 9) stored = 1
  }
  // if stored 1 add it to sum string
  if(stored) sum += '1'
  if(sum[sum.length - 1] === '0') sum = sum.slice(0, sum.length - 1)
  // reverse and return sum string
  return sum.split('').reverse().join('')
}
  
  console.log(sumStrings('800', '9567')) //,'10367')
  console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')) //,'712577413488402631964821329')
  console.log(sumStrings('00103', '08567')) //,'8670')
  console.log(sumStrings('123','456')) //,'579')
  console.log(sumStrings('1','2')) //,'3')

// Parameters: Two +ve intergers represented as strings
// Returns: String representation of the sum of input strings
// Examples:
  // (sumStrings('123','456'),'579')
  // (sumStrings('1','2'),'3')
// Pseudocode:
  // Reverse the two strings
  // append zeros at end to make the two strings equal in length
  // Iterate over them from start to end
    // add the two chars as integers + stored value, add  %10 value to sum string, set stored to 0
      // if added chars value > 9, store 1
  // if stored 1 add it to sum string
  // reverse and return sum string

  