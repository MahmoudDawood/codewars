function christmasTree(height) {
  return Array(height).fill(null).map((line, i) => ' '.repeat(height - 1 - i) + '*'.repeat(2 * i + 1) + ' '.repeat(height - 1 - i)).join('\n')
}

console.log(christmasTree(5))
//     *    
//    ***   
//   *****  
//  ******* 
// *********