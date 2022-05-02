function longestConsec(strarr, k) {
  // your code
//   if(strarr.length === 0 || k > strarr.length || k <= 0) return ""
  
//   let max = ""
//   for(let i = 0; i < strarr.length - k + 1; i++){
//     let temp = ""
//     for(let j = i; j < i + k; j++) temp += strarr[j]
//     if(temp.length > max.length) max = temp
//   }
//   return max
  
  if(strarr.length === 0 || k > strarr.length || k <= 0) return ""
  
  let max = ""
  for(let i = 0; i < strarr.length - k + 1; i++){
    let temp = strarr.slice(i, i + k).join('')
    if(temp.length > max.length) max = temp
  }
  return max
}