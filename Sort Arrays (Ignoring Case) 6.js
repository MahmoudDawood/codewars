function sortme(names) {
  return names.sort((a, b) => {
    a = a.toLowerCase(), b = b.toLowerCase()
    while(a[0] == b[0] && a && b)
      [a, b] = [a, b].slice(s => s.slice(1))
    return a && b ? a.charCodeAt() - b.charCodeAt() : a ? -1 : b ? 1 : 0
  })
}


// console.log(sortme(["C", "d", "a", "B"]))
// console.log(sortme(["Hello", "there", "I'm", "fine"]))
console.log(sortme([
  'To',     'ask',
  'thing',  'see',
  'Last',   'one',
  'public', 'On',
  'great',  'There',
  'After'
]))
// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]