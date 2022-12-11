var wireCode; // Find the wire.

console.log(Object.keys(global).find(x => x.toString().includes('boom')))
console.log(global[Object.keys(global).find(x => x.toString().includes('boom'))])

wireCode = global[Object.keys(global).find(x => x.toString().includes('boom'))]

// console.log(Object.entries(global).forEach(entry => console.log(typeof entry[1])))
// console.log(Bomb.toString())

// wireCode = global[cutWireVal]

Bomb.CutTheWire(wireCode);