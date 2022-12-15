function looseChange(cents) {
  const obj = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
  if(cents >= 25) obj.Quarters = Math.floor(cents / 25)
  cents -= obj.Quarters * 25
  if(cents >= 10) obj.Dimes = Math.floor(cents / 10)
  cents -= obj.Dimes * 10
  if(cents >= 5) obj.Nickels = Math.floor(cents / 5)
  cents -= obj.Nickels * 5
  if(cents > 0) obj.Pennies = Math.floor(cents)
  return obj
}

console.log(looseChange(56)    ) //==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
console.log(looseChange(-435)  ) //==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
console.log(looseChange(4.935) ) //==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}