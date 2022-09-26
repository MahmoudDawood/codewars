function longestRepetition(s) {
  let len = s.length ? 1 : 0, max = len, c = s[0]
  for(let i = 1; i < s.length; i++){
    if(s[i] == s[i - 1]) len++
    else len = 1
    
    // console.log({len, max})
    // console.log(c)
    c = len > max ? s[i] : c
    max = Math.max(max, len)
  }
  return [c || "", Math.max(max, len)]
}

console.log( longestRepetition("aaaabb"),      ["a",4] );
console.log( longestRepetition("bbbaaabaaaa"), ["a",4] );
console.log( longestRepetition("cbdeuuu900"),  ["u",3] );
console.log( longestRepetition("abbbbb"),      ["b",5] );
console.log( longestRepetition("aabb"),        ["a",2] );
console.log( longestRepetition(""),            ["",0] );
console.log( longestRepetition("ba"),          ["b",1] );