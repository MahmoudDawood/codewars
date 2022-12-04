function stripUrlParams(url, arr = []) {
  const link = url.indexOf('?') == -1 ? url : url.slice(0, url.indexOf('?'))
  let params = url.slice(url.indexOf('?') + 1).split('&').map(l => l.split('='))
    .reduce((acc, curr) => acc.find(x => x[0] == curr[0]) ? acc : acc.concat([curr]) , [])
    .filter(x => !arr.find(y => y == x[0])).map(x => x.join('=')).join('&')
  console.log({link, params})
  if(params == link || !params) params = ""
  else params = '?' + params
  return link + params
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2')) 
// === 'www.codewars.com?a=1&b=2'
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])) 
// === 'www.codewars.com?a=1'
console.log(stripUrlParams('www.codewars.com', ['b']))
console.log(stripUrlParams('www.codewars.com?a=1&b=2', [ 'a', 'b' ]))
// === 'www.codewars.com'
