function stockList(listOfArt, listOfCat){
    // Iterate over list
    return !listOfArt.length || !listOfCat.length ? "" : listOfCat.reduce((acc, curr, i) => {
        let n = listOfArt.filter(art => art.split(' ')[0][0] == curr)
            .reduce((acc, curr) => acc + +curr.split(' ')[1], 0)
        return i ? acc + ` - (${curr} : ${n})` : `(${curr} : ${n})`
    }, "")
        // Get books count starting with list char
        // If first c add as "(c: n)" else " - (c : n)"
}

// Params: List of strings "BookName Quantity" & list of chars 
// Returns: String of (char : availableQuantity)
// Examples:
    let b,c,res     
    b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
    c = ["A", "B", "C", "D"]
    res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
    console.log(stockList(b, c), res)

    b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
    c = ["A", "B"]
    res = "(A : 200) - (B : 1140)"
    console.log(stockList(b, c), res)
// Pseudocode
    // Iterate over list
        // Get books count starting with list char
        // If first c add as "(c: n)" else " - (c : n)"
