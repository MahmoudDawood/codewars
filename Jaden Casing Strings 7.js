String.prototype.toJadenCase = function (str) {
  return this.split(' ').map(s => s[0].toUpperCase() + s.slice(1)).join(' ')
};
console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real"))
