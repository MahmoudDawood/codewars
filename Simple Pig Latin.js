function pigIt(str){
  return str.split(' ').map(x => x.toLowerCase() === x.toUpperCase() ? x : (x.slice(1) + x[0] + 'ay')).join(' ')
}