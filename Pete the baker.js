// prep ->> Parameters Return Examples Pseudocode
function cakes(recipe, available) {
  let n = 0
  while(true){
    // iterate over properties of recipe
    for(const x in recipe){
      // if same property in available - in recipe < 0, return n
      available[x] -= recipe[x]
      if(available[x] < 0 || isNaN(available[x])) return n
    }
    //   n++ 
    n++
  }
}

// Params => 2 objects
// Result => number of floor cakes
// Examples => 
// must return 2
// console.log(cakes({flour: 500, sugar: 200, eggs: 1},
//       {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
// // must return 0
// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
//       {sugar: 500, flour: 2000, milk: 2000}))
// PseudoCode =>