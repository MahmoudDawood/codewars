// function compareVersions (version1, version2) {
//     // console.log((version1.split('.').splice(1).join('.')),  parseFloat(version2.split('.')[2]))
//     return version1.length == version2.length ? parseFloat(version1) >= parseFloat(version2) :
//         parseFloat(version1.split('.').splice(1).join('.')) >= parseFloat(version2.split('.').splice(1).join('.'))
// }

// function compareVersions (version1, version2) {
//     let v1 = version1.split('.').map(x => parseInt(x)), v2 = version2.split('.').map(x => parseInt(x)), idx = 0
//     while(idx){
//         if(v1[idx] > v2[idx]) return true
//         else if(v2[idx] > v1[idx]) return false
//     }
//     return true
// }
// function compareVersions (version1, version2) {
//     while(idx < Math.max(version1.length, version2.length)){
//         if(parseInt(version1[idx]) != parseInt(version2[idx])){
//             if(parseInt(version1[idx]) > parseInt(version2[idx])) return true
//             else return false
//         }
//         idx++
//         if(idx == Math.min(version1.length, version2.length)){
//             return Math.max(version1.length, version2.length) == version1.length
//         }
//     }
//     return true
// }



// Params: Two version numbers splitted by '.'s
// Returns: true if first is newer or equal to second
// Ex:
// Pseudocode: 
    // split each version to parts
    // compare them 
        // If a part is greater return result
    // if one of them is longer return result
    // return true

function compareVersions (version1, version2) {
    // split each version to parts
    let v1 = version1.split('.').map(x => parseInt(x)), v2 = version2.split('.').map(x => parseInt(x)), idx = 0
    // compare them 
    for(let i = 0; i < Math.min(v1.length, v2.length); i++){
        if(v1[i] > v2[i]) return true
        else if(v1[i] < v2[i]) return false
    }
    return v1.length >= v2.length

        // If a part is greater return result
    // if one of them is longer return result
    // return true
}
console.log(compareVersions("11", "10"));                    // returns true
console.log(compareVersions("11", "11"));                    // returns true
console.log(compareVersions("10.4.6", "10.4"));              // returns true
console.log(compareVersions("10.4", "11"));                  // returns false
console.log(compareVersions("10.4", "10.10"));               // returns false
console.log(compareVersions("10.4.9", "10.5"));              // returns false
