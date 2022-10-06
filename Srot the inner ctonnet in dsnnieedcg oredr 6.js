function sortTheInnerContent(words) {
  return words.split(' ').map(word => word[0] + word.slice(1, -1).split('').sort().reverse().join('') + (word.length > 1 ? word.slice(-1) : "")).join(' ')
}

// const x = 'abc'
// console.log(x[-1])
// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// console.log(sortTheInnerContent("sort the inner content in descending order"))
// console.log(sortTheInnerContent("aa ff bb"))
console.log(sortTheInnerContent("wait for me"))
// console.log(sortTheInnerContent("this kata is easy"))
