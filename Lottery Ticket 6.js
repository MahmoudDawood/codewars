function bingo(ticket, win){
  // console.log(ticket.reduce((acc, curr) => {
    // console.log(curr[0], curr[0].split('').find(c => c.charCodeAt() == curr[1]))
    // return acc + (curr[0].split('').find(c => c.charCodeAt() == curr[1]) ? 1 : 0)
  // }, 0) < win)
  return ticket.reduce((acc, curr) => {
    return acc + (curr[0].split('').find(c => c.charCodeAt() == curr[1]) ? 1 : 0)
  }, 0) < win ? "Loser!" : "Winner!"
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');