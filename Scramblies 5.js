function scramble(str1, str2) {
  let obj = str1.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1
    return acc
  }, {})
  let arr = str2.split('')
  for(let i = 0; i < arr.length; i++) if(!obj[arr[i]]--) return false
  return true
}

// console.log(scramble('rkqodlw','world')) //true
// console.log(scramble('cedewaraaossoqqyt','codewars')) //true
// console.log(scramble('katas','steak')) //false
// console.log(scramble('scriptjavx','javascript')) //false
// console.log(scramble('scriptingjava','javascript')) //true
// console.log(scramble('scriptsjava','javascripts')) //true
// console.log(scramble('javscripts','javascript')) //false
// console.log(scramble('jscripts','javascript')) //false
// console.log(scramble('aabbcamaomsccdd','commas')) //true
// console.log(scramble('commas','commas')) //true
// console.log(scramble('sammoc','commas')) //true