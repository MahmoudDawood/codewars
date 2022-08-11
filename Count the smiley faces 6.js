function countSmileys(arr) {
  return arr.map(face => {
    if(face[0] == ':' || face[0] == ';')
      if(face[face.length - 1] == 'D' || face[face.length - 1] == ')')
        if(face.length === 3 && face[1] != '-' && face[1] != '~') return 0
        else if(face.length < 4) return 1
    return 0
  }).reduce((acc, curr) => acc + curr)
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;