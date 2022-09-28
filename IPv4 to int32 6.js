function ipToInt32(ip) {
  console.log(ip.split('.').map(x => (+x).toString(2)))
  return Number.parseInt(ip.split('.').map(x => {
    byte = (+x).toString(2)
    while(byte.length < 8) byte = '0' + byte
    return byte
  }).join(''), 2)
}

console.log(ipToInt32("128.32.10.1"))