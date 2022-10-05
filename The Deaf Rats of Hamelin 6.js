var countDeafRats = function(town) {
  town = town.split(' ').join('')
  let deaf = 0
  // console.log(rats)
  for(let i = town.indexOf('P') - 1; i >= 0; i -= 2) // left
    if(town[i] != 'O') deaf++
  // console.log(deaf)
  for(let i = town.indexOf('P') + 1; i < town.length; i += 2) // right
    if(town[i] != 'O') deaf++
  return deaf


  // console.log(str.indexOf('P'))
  // let rats = str.slice(0, str.indexOf('P')).split('').filter(x => x != ' ').join('')
  // rats += str.slice(str.indexOf('P') + 1).split(' ').filter(rat => rat.split('').reverse().join('')).join('')
  // console.log(str.slice(0, str.indexOf('P')).split('').filter(x => x != ' ').join(''))
  // console.log(str.slice(str.indexOf('P') + 1).split('').filter(x => x != ' ').map().join(''))
  // return rats
}

console.log(countDeafRats("~O~O~O~O P"))
console.log(countDeafRats("P O~ O~ ~O O~"))
console.log(countDeafRats("~O~O~O~OP~O~OO~"))