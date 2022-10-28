function playPass(s, n) {
  return s.toLowerCase().split('').map(c => c.toLowerCase() !== c.toUpperCase() ? // letter
      c.charCodeAt(0) + n > 'z'.charCodeAt(0) ? // exceed
        String.fromCharCode((c.charCodeAt(0) + n) - ('z'.charCodeAt(0) + 1) + 'a'.charCodeAt(0))
      : String.fromCharCode((((c.charCodeAt(0) + n) % ('z'.charCodeAt(0) + 1) - 97) % 26) + 97)
      : !isNaN(parseInt(c)) ? 9 - parseInt(c): c
  ).map((c, i) => !(i % 2) && c != c.toString().toUpperCase() ? c.toUpperCase() : c).reverse().join('')
}
console.log(String.fromCharCode(((('y'.charCodeAt(0) + 2) % ('z'.charCodeAt(0) + 1) - 97) % 26) + 97))

console.log(playPass("I LOVE YOU!!!", 1), "!!!vPz fWpM J")
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2), '\n',
    "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")
