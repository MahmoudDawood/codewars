const F = n => n ? n - M(F(n - 1)) : 1
const M = n => n ? n - F(M(n - 1)) : 0

// function F(n) { }

// function M(n) { }


console.log(F(0), 1);
console.log(M(0), 0);
console.log(F(7), 5);
console.log(M(7), 4);