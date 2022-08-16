function amountOfPages(summary){
  let count = 0, pages = 0, arr = summary.toString().split('')
  if(summary <= 9) return summary
  for(let i = 1; i < summary; i++){
    count += i.toString().length
    // console.log({count, i})
    if(count == summary) return i
  }
  console.log(pages)
  // return pages
}

console.log(amountOfPages(5))
console.log(amountOfPages(25))
console.log(amountOfPages(1095))
console.log(amountOfPages(185))
console.log(amountOfPages(660))