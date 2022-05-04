function humanReadable (seconds) {
  // const h = Math.floor(seconds / (60 * 60))
  // seconds -= h * 60 * 60
  
  // const m = Math.floor(seconds / 60)
  // seconds -= m * 60
  
  // const s = seconds
  
  // let ans = ''
  // h < 10 ? ans += '0' + h + ":" : ans += h + ":"
  // m < 10 ? ans += '0' + m + ":" : ans += m + ":"
  // s < 10 ? ans += '0' + s       : ans += s

  // return ans;

  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  
  const format = (x) => x > 9 ? x : "0" + x
  
  return format(h) + ":" + format(m) + ":" + format(s)
}