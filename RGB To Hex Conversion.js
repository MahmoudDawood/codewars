function rgb(r, g, b){
  // let x = (r > 255) ? 255 : (r < 0) ? 0 : r
  // let y = (g > 255) ? 255 : (g < 0) ? 0 : g
  // let z = (b > 255) ? 255 : (b < 0) ? 0 : b

  // let R = (x.toString(16).length < 2) ? '0' + x.toString(16) : x.toString(16)
  // let G = (y.toString(16).length < 2) ? '0' + y.toString(16) : y.toString(16)
  // let B = (z.toString(16).length < 2) ? '0' + z.toString(16) : z.toString(16)
  
  // return R.toUpperCase() + G.toUpperCase() + B.toUpperCase()
  
  function toHex(x){
    return x >= 255 ? 'FF' :
    x < 0 ? '00' :
    ('0' + x.toString(16)).slice(-2).toUpperCase()
  }
  
  return toHex(r) + toHex(g) + toHex(b)
}