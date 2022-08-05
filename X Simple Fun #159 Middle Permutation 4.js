function middlePermutation(s) {
  const permutes = (s) => {
    if(s.length <= 2) return s.length == 2 ? [s, s[1] + s[0]] : s
    return s.split('')
      .reduce((acc, curr, i) => acc.concat(permutes(s.slice(0, i) + s.slice(i + 1))
        .map(x => curr + x)), [])
  }
  const arr = permutes(s)
  console.log(arr.length)
  return arr[Math.floor((arr.length - 1) / 2)]
}

console.log(middlePermutation("abc")) // "bac"
console.log(middlePermutation("abcd")) // "bdca"
console.log(middlePermutation("abcdx")) // "cbxda"
console.log(middlePermutation("abcdxg")) // "cxgdba"
console.log(middlePermutation("abcdxgz")) // "dczxgba"