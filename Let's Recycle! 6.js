function recycle(array) {
  // paper, glass, organic, plastic
  // Iterate over items
    // Add it's name to specified material bin
    // if it has second material, add it there also
  // return bins in order
  return Object.values(array.reduce((acc, curr) => {
    acc[curr.material].push(curr.type)
    if(curr.secondMaterial) acc[curr.secondMaterial].push(curr.type)
    return acc
  }, {"paper": [], "glass": [], "organic": [], "plastic": []}))
  // return [obj.paper, obj.glass, obj.organic, obj.plastic]
}

// Params: Array of objects to be recycled {type, material, secondMaterial(Optional)}
// Returns: Array of Items array recycled in order
// Ex:
  input = [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
  ]
  console.log(recycle(input))

  // output = [
  //   ["wine bottle", "amazon box", "beer bottle"],
  //   ["wine bottle", "beer bottle"],
  //   ["rotten apples", "out of date yogurt"],
  //   ["out of date yogurt"]
  // ]