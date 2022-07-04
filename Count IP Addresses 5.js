function ipsBetween(start, end){
  // Get input ip total sum = n * 2**(24) / 2 **(8 * idx)
  const arr1 = start.split('.'), arr2 = end.split('.')
  return arr1.reduce((acc, curr, idx) => {
    return acc += (+arr2[idx] - +curr) * (2**24) / (2**(8*idx))
    // console.log((+arr2[idx] - +curr) * (2**24) / (2**(8*idx)))
    // console.log(+arr2[idx], +curr, acc)
  }, 0)
  // Get ouput ip total sum     same
  // Det differnce betwwen output & input sum
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1"))     // , 1);
console.log(ipsBetween("10.0.0.0", "10.0.0.50"))     // , 50);
console.log(ipsBetween("20.0.0.10", "20.0.1.0"))     // , 246);
console.log(ipsBetween("10.11.12.13", "10.11.13.0"))     // , 243);
console.log(ipsBetween("160.0.0.0", "160.0.1.0"))     // , 256);
console.log(ipsBetween("170.0.0.0", "170.1.0.0"))     // , 65536);
console.log(ipsBetween("50.0.0.0", "50.1.1.1"))     // , 65793);
console.log(ipsBetween("180.0.0.0", "181.0.0.0"))     // , 16777216);
console.log(ipsBetween("1.2.3.4", "5.6.7.8"))     // , 67372036);
console.log(ipsBetween("0.0.0.0", "255.255.255.255"))     // , 2 ** 32 - 1);
// Params: start & end ip addresses, end > start
// Returns: number of addresses included between the given [start, end]
// Examples:
  // doTest("150.0.0.0", "150.0.0.1")     // , 1);
  // doTest("10.0.0.0", "10.0.0.50")     // , 50);
  // doTest("20.0.0.10", "20.0.1.0")     // , 246);
  // doTest("10.11.12.13", "10.11.13.0")     // , 243);
  // doTest("160.0.0.0", "160.0.1.0")     // , 256);
  // doTest("170.0.0.0", "170.1.0.0")     // , 65536);
  // doTest("50.0.0.0", "50.1.1.1")     // , 65793);
  // doTest("180.0.0.0", "181.0.0.0")     // , 16777216);
  // doTest("1.2.3.4", "5.6.7.8")     // , 67372036);
  // doTest("0.0.0.0", "255.255.255.255")     // , 2 ** 32 - 1);
// Pseudocode:
  // Get input ip total sum = n * 2**(24) / 2 **(8 * idx)
  // Get ouput ip total sum     same
  // Det differnce betwwen output & input sum