function getWinner(listOfBallots) {
  const obj = listOfBallots.reduce((acc, curr) => {
    if(acc[curr]) acc[curr]++
    else acc[curr] = 1
    return acc
  }, {})
  const max = Math.max(...Object.values(obj))
  return max > listOfBallots.length / 2 ? Object.keys(obj).find(key => obj[key] == max) : null
}

//3 votes for "A", 2 votes for "B" -> "A" wins the election
console.log(getWinner(["A", "A", "A", "B", "B"])) // === "A" //true
//2 votes for "A", 2 votes for "B" -> No winner
console.log(getWinner(["A", "A", "B", "B"])) // === null //true
//1 vote for each name -> No winner
console.log(getWinner(["A", "B", "C", "D"])) // === null //true
//3 votes for "A", 2 votes for "B", 1 vote for "C"  
//-> No winner ("A" does not have more than n/2 = 3 votes))
console.log(getWinner(["A", "A", "A", "B", "B", "C"])) // === null //true
