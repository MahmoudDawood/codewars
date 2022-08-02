function luckCheck(ticket){
  const half1 = ticket.slice(0, ticket.length / 2).split('').reduce((acc, curr) => acc + +curr, 0)
  const half2 = ticket.slice(Math.ceil(ticket.length / 2)).split('').reduce((acc, curr) => acc + +curr, 0)
  // console.log(half1, half2)
  if(ticket.split('').filter(x => !(x >= '0' && x <= '9')).length) throw new Error
  // console.log(ticket.split('').filter(x => !(x >= '0' && x <= '9')).length)
  return half1 === half2
}
console.log(luckCheck(' '))  
// console.log(luckCheck('5555'))  
// console.log(luckCheck('003111'))  
// console.log(luckCheck('543970707'))  
// console.log(luckCheck('439924'))  
// console.log(luckCheck('943294329932'))  
// console.log(luckCheck('000000'))  
// console.log(luckCheck('454319'))  
// console.log(luckCheck('1233499943'))  
// console.log(luckCheck('935336'))  
// console.log(luckCheck('6F43E8'))  
// console.log(luckCheck('1234'))  
// console.log(luckCheck('683179'))  // ,true, "The function doesn't recognise a lucky ticket number");
// console.log(luckCheck('683000'))  // ,false, 'The function doesn\'t return true for a wrong number');
// console.log(luckCheck('6F43E8'))  // , undefined, undefined, "It should throw an error for invalid input");