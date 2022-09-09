function decipherThis(str){
  return str.split(' ').map(word => {
    const idx = word.split('').findIndex(c => c.toLowerCase() !== c.toUpperCase())
    const first = +word.slice(0, idx)
    // console.log(idx, String.fromCharCode(first))
    if(idx == -1) return String.fromCharCode(+word)
    else if(word.length - idx == 1) return String.fromCharCode(first) + word.slice(-1)
    const second = word.slice(idx, idx + 1)
    const last = word.slice(-1)
    return String.fromCharCode(first) + last + word.slice(idx + 1, -1) + second
  }).join(' ')
}

// console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
// console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); // 'Ready set go'