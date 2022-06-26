function domainName(url){
  // Elimenate 'http://' from url if found
  if(url.includes('http://')) url = url.slice(7)
  else if(url.includes('https://')) url = url.slice(8)
  // Elimenate 'www.' from url if found
  if(url.includes('www.')) url = url.slice(4)
  // Elimenate everything starting from '.' to end
  return url.slice(0, url.indexOf('.'))
  // return url
}

console.log(domainName("http://google.com"))          //, "google");
console.log(domainName("http://google.co.jp"))          //, "google");
console.log(domainName("www.xakep.ru"))          //, "xakep");
console.log(domainName("https://youtube.com"))          //, "youtube");
console.log(domainName("http://github.com/carbonfive/raygun")) // -> domain name = "github"
console.log(domainName("http://www.zombie-bites.com"))         // -> domain name = "zombie-bites"
console.log(domainName("https://www.cnet.com"))                // -> domain name = cnet"
// Parameters: URL string
// Returns: Domain name
// Examples:
  // (domainName("http://google.com"))          //, "google");
  // (domainName("http://google.co.jp"))          //, "google");
  // (domainName("www.xakep.ru"))          //, "xakep");
  // (domainName("https://youtube.com"))          //, "youtube");
  // "http://github.com/carbonfive/raygun" // -> domain name = "github"
  // "http://www.zombie-bites.com"         // -> domain name = "zombie-bites"
  // "https://www.cnet.com"                // -> domain name = cnet"
// Pseudocode:
  // Elimenate 'http://' from url if found
  // Elimenate 'www.' from url if found
  // Elimenate everything starting from '.' to end
  // return url