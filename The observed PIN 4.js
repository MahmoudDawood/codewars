function getPINs(observed) {
  // implement >> up, down, right, left functions to calculate next possible value
  const up = (n) => {
    if(n == 0) return 8
    if(n < 4) return -1
    return n - 3
}
  const down = (n) => {
    if(n == 8) return 0
    if(n == 0 || n == 7 || n == 9) return -1
    return n + 3
  }
  const right = (n) => {
    if(n % 3 == 0) return -1
    return n + 1
  }
  const left = (n) => {
    if(n == 1 || n == 4 || n == 7 || n == 0) return -1
    return n - 1
  }

  // append the observed pin to possible anwers
  const ans = [observed]

  // iterate over numbers
  // for each entry in answers, append a next combination of this number errors @ same index
  observed.split('').forEach((x, i) => {
    ans.forEach(val => {
      if(up(x) !== -1) ans.push(val.slice(0, i) + `${up(+x)}` + val.slice(i + 1))
      if(down(x) !== -1) ans.push(val.slice(0, i) + `${down(+x)}` + val.slice(i + 1))
      if(right(x) !== -1) ans.push(val.slice(0, i) + `${right(+x)}` + val.slice(i + 1))
      if(left(x) !== -1) ans.push(val.slice(0, i) + `${left(+x)}` + val.slice(i + 1))
    })
  })
  // return ans
  return ans
}
// console.log(getPINs('369'))
const temp = ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
// console.log(getPINs('369').filter(x => !temp.includes(x)))
console.log(temp.filter(x => getPINs('369').includes(x)))


// Parameters: observed PIN +ve integers (1 - 8)
// Returns: All possible variations of observed numbers with error = 1 horizontally or vertically
// Examples:
  // "8": ["5", "7", "8", "9", "0"],
  // "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  // "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
  // "369": ["","","","","","","","","","","","","","","","","","","","","659","","","","","","","","","","","","","","",""]
  // ┌───┬───┬───┐
  // │ 1 │ 2 │ 3 │
  // ├───┼───┼───┤
  // │ 4 │ 5 │ 6 │
  // ├───┼───┼───┤
  // │ 7 │ 8 │ 9 │
  // └───┼───┼───┘
  //     │ 0 │
  //     └───┘
// Pseudocode:
  // implement >> up, down, right, left functions to calculate next possible value
  // append the observed pin to possible anwers
  // iterate over numbers from end to start
    // for each entry in answers, append a next combination of this number errors @ same index
  // return ans