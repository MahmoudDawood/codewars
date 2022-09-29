function camelCase(str) {
  return str.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join('')
}

console.log(camelCase("hello case"))
console.log(camelCase("camel case word"))

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
