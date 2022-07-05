function int32ToIp(int32){
  let binary = int32.toString(2), result = []
  // console.log(binary)
  while(32 - binary.length > 0) binary = '0' + binary
  for(let i = 0; i < 4; i++) result.push(binary.slice(i * 8, 8 + i * 8))
  // console.log(result)
  return result.map(x => parseInt(x, 2) || 0).join('.')
}

console.log(int32ToIp(1170548148))  // "69.197.37.180"
console.log(int32ToIp(2154959208))  // "128.114.17.104"); 
console.log(int32ToIp(0))  // "0.0.0.0");
console.log(int32ToIp(2149583361))  // "128.32.10.1");
console.log(int32ToIp(2 ** 32 - 1))  // "255.255.255.255");