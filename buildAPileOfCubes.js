function findNb(m) {
  // your code
  // let n = 1
  // while(m > 0){
  //   m -= Math.pow(n++, 3)
  // }
  // if(m === 0) return n - 1
  // return -1;

  let n = 0
  while(m > 0) m -= ++n**3
  return m ? -1 : n
}
