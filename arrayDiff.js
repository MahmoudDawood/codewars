function arrayDiff(a, b) {
  //   b.forEach((b) => a = a.filter((a) => a != b))
  //   return a
    
  // return a.filter(a => b.indexOf(a) === -1)
  return a.filter((a) => !b.includes(a))
  }