function solution(str){
  const arr = []
  for(let i = 0; i < str.length; i += 2) arr.push(str[i] + (str[i + 1] || '_'))
  return arr
}
console.log(solution("abcdef"))    // , ["ab", "cd", "ef"]);
console.log(solution("abcdefg"))    // , ["ab", "cd", "ef", "g_"]);
console.log(solution(""))    // , []);