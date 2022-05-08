function findChildren(dancingBrigade) {
  // const obj = {}
  // dancingBrigade.split('').forEach(x => {
  //   if(obj[x.toLowerCase()] === undefined) obj[x.toLowerCase()] = 0
  //   else obj[x.toLowerCase()]++
  // })
  // let str = ''
  // Object.keys(obj).sort().forEach(x => {
  //   str += x.toUpperCase()
  //   for(let i = 0; i < obj[x]; i++) str += x
  // })
	// return str;

  return dancingBrigade.toLowerCase()
    .split('')
    .sort()
    .map((v, i, a) => i === 0 || a[i - 1] !== a[i] ? v.toUpperCase() : v)
    .join('')
}