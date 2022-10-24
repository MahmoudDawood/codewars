function rank(st, we, n) {
    // Make array of names, iterate over it
    let names = st.split(','), obj = {}
    // Calculate each name value (value of letters + length of word) * weight
    names.forEach((name, i) => obj[name] = (name.toLowerCase().split('').reduce((acc, curr) => {
        return acc + curr.charCodeAt(0) - 96
    }, 0) + name.length) * we[i])
    // Sort the names descendingly according to values, then according to alphabet
    names.sort((a, b) => obj[b] - obj[a] !== 0 ? obj[b] - obj[a] : a > b ? 1 : a < b ? -1 : 0)
    // Return name at given rank
    return !st.length ? "No participants" : n > names.length ? "Not enough participants" : names[n - 1]
}
let names = "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
let weights = [1, 4, 4, 5, 2, 1]
let n = 4

// console.log(rank(names, weights, n))

// Params: string of firstnames, weight array, rank
// Returns: the name at specified rank, after sorting by weights * som, where som is sum + name length
// Examples: 
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon")
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")