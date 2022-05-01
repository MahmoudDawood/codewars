// return masked string
function maskify(cc) {
  let arr = cc.split('').reverse()
  for(i = 4; i < arr.length; i++) arr[i] = '#'
  return arr.reverse().join('')
  
//   return cc.split('').reverse().map((x, i) => {if(i > 3) x = '#'}).reverse().join('')
}
