function dup(s) {
  return s.map(word => [...word].reduce((acc, curr, i, arr) => arr[i] == arr[i - 1] ? acc : acc + curr), "")
}



console.log(dup(["kelless","keenness"])) //= ["keles","kenes"].
console.log(dup(["abracadabra","allottee","assessee"])) //= ["abracadabra","alote","asese"].
