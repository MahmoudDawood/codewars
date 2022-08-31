function getOrder(input) {
  const menu = ["burger", "fries", "chicken", "pizza", "sandwich", "onionrings", "milkshake", "coke"]
  let i = 0, order = "", result = []
  while(i < input.length){
    order += input[i++]
    if(menu.includes(order)) {
      result.push(order)
      order = ""
    }
  }
  return result.sort((a, b) => menu.indexOf(a) - menu.indexOf(b)).map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"))

// Test.assertEquals(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
//                       "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
// Test.assertEquals(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
//                   "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");