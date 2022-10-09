function formatWords(words) {
    words = words.filter(x => x)
    if(words == []) return ""
    // 3 2 1
    else if(words.length < 3) return words.join(' and ')
    return words.reduce((acc, curr, i) => {
        if(!i) return curr
        else if(i == words.length - 1) return acc + " and " + curr 
        else return acc + ', ' + curr
    }, "")
}
// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""
console.log(formatWords(['ninja', 'samurai', 'ronin']))
console.log(formatWords(['ninja', '', 'ronin']))
console.log(formatWords([]))