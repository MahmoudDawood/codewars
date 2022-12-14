function getCard() {
  const card = [Array(5), Array(5), Array(4), Array(5), Array(5)].map(row => row.fill(0))
  // console.log(card)

  for(let i = 0; i < 5; i++){
    const start = 1 + i * 15//, end = start + 14
    for(let j = 0; j < card[i].length; j++){
      let rand = Math.floor(Math.random() * 15) + start
      // console.log(rand)
      while(card[i].indexOf(rand) != -1) rand = Math.floor(Math.random() * 15) + start
      card[i][j] = rand
    }
  }
  return [card.map((row, i) => {
    if(i == 0) return row.map(x => 'B' + x)
    else if(i == 1) return row.map(x => 'I' + x)
    else if(i == 2) return row.map(x => 'N' + x)
    else if(i == 3) return row.map(x => 'G' + x)
    else return row.map(x => 'O' + x)
  }).join()]
}

// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75


console.log(getCard())