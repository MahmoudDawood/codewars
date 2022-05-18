function solve(arr){  
  return arr.map(x => [...x]
    .reduce((acc, curr, idx) => {
      if(curr.toLowerCase().charCodeAt(0) - 97 - idx === 0) acc++
      return acc
    }, 0))
};

console.log(solve(["abode","ABc","xyzD"]))
// console.log([..."ABc"]
//   .reduce((acc, curr, idx) => {
//     if(curr.toLowerCase().charCodeAt(0) - 97 - idx === 0) acc++
//     return acc
//   }, 0))
// PREP