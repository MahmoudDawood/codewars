function decrypt(encryption){
    return encryption.split('').reduce((acc, curr) => {
        if(curr.toLowerCase() != curr.toUpperCase() && curr == curr.toLowerCase())
            acc[curr.charCodeAt(0) - 97]++
        return acc
    }, Array(26).fill(0)).join('')
}
console.log(decrypt('$aaaa#bbb*cc^fff!z'))
console.log(decrypt('z$aaa#ccc%eee1234567890'))
// '$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
//    ^    ^   ^  ^  ^         ^^^  ^                   ^
//   [4]  [3] [2][3][1]        abc  f                   z
  
// 'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
//  ^  ^   ^   ^                    ^ ^ ^                    ^
// [1][3] [3] [3]                   a c e                    z

console.log('a'.charCodeAt(0))