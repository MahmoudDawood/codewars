function goodVsEvil(good, evil){
  const goodData = [1, 2, 3, 3, 4, 10]
  const evilData = [1, 2, 2, 2, 3, 5, 10]
  const goodCount = good.split(' ').reduce((acc, curr, i) => curr != '0' ? acc + goodData[i] * +curr : acc, 0) // !+curr
  const evilCount = evil.split(' ').reduce((acc, curr, i) => curr != '0' ? acc + evilData[i] * +curr : acc, 0)
  // console.log({goodCount, evilCount})
  if(goodCount > evilCount) return "Battle Result: Good triumphs over Evil"
  else if(evilCount > goodCount) return "Battle Result: Evil eradicates all trace of Good"
  return "Battle Result: No victor on this battle field"
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field');