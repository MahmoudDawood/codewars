// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  let pairs = query.split('&').map(q => q.split('=')), result = {}
  for(const [key, value] of pairs){
    let curr = result
    // console.log("key", key)
    const props = key.split('.')
    for(const [i, prop] of props.entries()){
      // console.log("prop", prop)
      if(i == props.length - 1){
        curr[prop] = decodeURIComponent(value)
        continue
      }
      if(!curr[prop]) curr[prop] = {}
      curr = curr[prop]
    }
  }
  return query.length ? result : {}
}

console.log(convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'))

// Params: a URL query string
// Returns: Object tree of url params
// Example:
  // user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
  // {
  //   'user': {
  //     'name': {
  //       'firstname': 'Bob',
  //       'lastname': 'Smith'
  //     },
  //     'favoritecolor': 'Light Blue'
  //   }
  // }
// Pseudocode:
  // Iterate over queries array of URL params with '%20' replaced by space, splitted on &s
    // Split query into key, value
      // Split the key on '.'s, access each element one by one diving deep into array-
      //- when end is reached, allocated it's value to our value


// const arr = ['abc', 'def']
// const arr[0] = 
// console.log()      

// const query = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
// const keyValuePairs = query
//     .split("&")
//     .map(kvp => kvp.split("="))
//     // .filter(([key]) => Boolean(key))
// console.log(keyValuePairs)