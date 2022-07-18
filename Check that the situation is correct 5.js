function isItPossible(field) {
    const arr = field.split('')
    // console.log(arr)
    let xs = arr.reduce((acc, curr) => curr == 'X' ? ++acc : acc, 0)
    let os = arr.reduce((acc, curr) => curr == '0' ? ++acc : acc, 0)
    // console.log(xs, os)
    let winners = []
    if(arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != '_') winners.push(arr[0])
    if(arr[3] == arr[4] && arr[4] == arr[5] && arr[3] != '_') winners.push(arr[3])
    if(arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != '_') winners.push(arr[6])
    
    if(arr[0] == arr[3] && arr[3] == arr[6] && arr[0] != '_') winners.push(arr[0])
    if(arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != '_') winners.push(arr[1])
    if(arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != '_') winners.push(arr[2])
    
    if(arr[0] == arr[4] && arr[4] == arr[8] && arr[0] != '_') winners.push(arr[0])
    if(arr[2] == arr[4] && arr[4] == arr[6] && arr[2] != '_') winners.push(arr[2])
    winners = new Set(winners)
    winners = [...winners]
    // console.log(...winners)
    // if x is winner xs - os === 1
    // else if o is winner xs - os === 0
    // else diff = 1 || 0
    if(winners.length > 1) return false
    else if(winners.length == 1){
        if(winners[0] == 'X') return xs - os == 1
        else return xs - os == 0
    }
    else return xs - os == 1 || xs - os == 0
    // return winners.length > 1 ? false : winners.length == 1 ? winners[0] == 'X' ? xs - os == 1 :
    //     xs - os == 0 : xs - os == 1 || xs - os == 0
    // return xs - os == 1 || xs - os == 0
}
console.log(isItPossible("XXX"+"XXX"+"XXX")) // , false );
console.log(isItPossible("0XX"+"XX0"+"00X")) // , true );
console.log(isItPossible("XXX"+"0_0"+"___")) // , true );
console.log(isItPossible("___"+"___"+"___")) // , true );
console.log(isItPossible("__0"+"___"+"___")) // , false );
console.log(isItPossible("___"+"_X_"+"___")) // , true );
console.log(isItPossible("XXX"+"000"+"___")) // , false );---
console.log(isItPossible("0X_"+"0X0"+"_X_")) // , false );---
console.log(isItPossible("0X0"+"0X0"+"__X")) // , false );
console.log(isItPossible("XX_"+"X_X"+"000")) // , false );---
console.log(isItPossible("X00"+"0X0"+"XXX")) // , true );
console.log(isItPossible("X_0"+"0X0"+"XX0")) // , true );