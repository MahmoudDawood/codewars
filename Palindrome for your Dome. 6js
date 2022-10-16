function palindrome(str) {
    const arr = str.split('').filter(c => c.toLowerCase() != c.toUpperCase()).map(c => c.toLowerCase())
    for(let i = 0; i < arr.length / 2; i++){
        if(arr[i] != arr[arr.length - 1 - i]) return false
    } 
    return true
}

console.log(palindrome("Amore, Roma")) // => valid
console.log(palindrome("A man, a plan, a canal: Panama")) // => valid
console.log(palindrome("No 'x' in 'Nixon'")) // => valid
console.log(palindrome("Abba Zabba, you're my only friend")) // => invalid