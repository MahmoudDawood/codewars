function cleanString(s) {

  return s.split('').reduce((acc, curr) => {
    if(curr == '#') return acc.pop()
    return acc.push(curr)
  }, [])
}

console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');

console.log(cleanString("abc#d##c"))
console.log(cleanString("abc##d######"))
console.log(cleanString("#######"))
console.log(cleanString(""))