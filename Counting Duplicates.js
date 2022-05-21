function duplicateCount(text){
  const arr = text.toLowerCase().split('')
  return arr.filter((x, i) => i !== arr.lastIndexOf(x) && i === arr.indexOf(x)).length
  // const obj = {}
  // return arr.filter((x, i) => {
  //   if(i !== arr.lastIndexOf(x)){
  //     if(obj[x]) return false
  //     obj[x] = 1
  //     return true
  //   }
  // }).length
}
// assertEquals(duplicateCount(""), 0);
// assertEquals(duplicateCount("abcde"), 0);
// assertEquals(duplicateCount("aabbcde"), 2);
// assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
// assertEquals(duplicateCount("Indivisibility"), 1)
// assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")