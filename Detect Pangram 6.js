function isPangram(string){
  const obj = {}
  string.split('').filter(c => c.toLowerCase() !== c.toUpperCase()).forEach(x => obj[x.toLowerCase()] = 1)
  return Object.entries(obj).length === 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))