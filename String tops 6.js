function tops(msg) {
    let result = []
    for(let i = 1; i < msg.length; i += result.length * 4 + 1){
        console.log(i)
        result.push(msg[i])
    }
    return result.reverse().join('')
}
//                                                       3
//                               p                     2   4
//             g               o   q                 1
//   b       f   h           n       r             z
// a   c   e       i       m          s          y
//       d           j   l             t       x
//                     k                 u   w
//                                         v
//   1         6                 15                      28
console.log(tops('abcdefghijklmnopqrstuvwxyz1234'))