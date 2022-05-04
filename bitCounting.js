var countBits = function(n) {
  // return [...n.toString(2)].filter(x => x === '1').length
  return n.toString(2).split('0').join('').length
};