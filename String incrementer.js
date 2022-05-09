function incrementString (strng) {
  let l = strng.length
  if(isNaN(Number(strng[l - 1]))) return strng + '1'  
  
  while(Number.isInteger(Number(strng[l - 1]))) l--
  
  let result = (Number(strng.split('').splice(l).join('')) + 1).toString().split('')
  while(result.length + l < strng.length) result.unshift('0')
  
  return strng.slice(0, l).concat(result.join(''))
}