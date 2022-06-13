function topThreeWords(text) {
  // Make an object to store words instances
  const obj = {}

  // Iterate over input string lower cased
  text = text.toLowerCase()
  for(let i = 0; i < text.length; i++){
    // while this char is a letter || apostrophe
    let temp = ""
    // continue pushing to temporary word string
    while(text[i] && text[i] !== text[i].toUpperCase() || text[i] === "'") temp += text[i++]
    // Add word to object or increment if exists
    obj[temp] === undefined ? obj[temp] = 1 : obj[temp]++
  }

  // Make array of kay value pairs of object sorted
  let arr = []
  for(const [key, value] of Object.entries(obj)) arr.push([key, value])
  arr = arr.filter(x => x[0] !== x[0].toUpperCase()) //
  arr.sort((a, b) => b[1] - a[1])
  
  // Return array of top 3 if exists
  const result = []
  for(let i = 0; i < 3 && arr[i]; i++) result.push(arr[i][0])
  return result
}
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")) //, ['e','d','a']
console.log(topThreeWords("a a c b b")) //, ['a','b','c'])
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")) //,['e','ddd','aa'])
console.log(topThreeWords("  //wont won't won't ")) //, ["won't", "wont"])
console.log(topThreeWords("  , e   .. ")) //, ["e"])
console.log(topThreeWords("  ...  ")) //, [])
console.log(topThreeWords("  '  ")) //, [])
console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`))


// Parameters: String of text & words, where words may have one or more "'"
// Returns: Array of most three frequently used words descendingly (Case insensitive)
// Examples:
  // Test.assertDeepEquals(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e','d','a'])
  // Test.assertDeepEquals(topThreeWords("a a c b b"), ['a','b','c'])
  // Test.assertDeepEquals(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])
  // Test.assertDeepEquals(topThreeWords("  //wont won't won't "), ["won't", "wont"])
  // Test.assertDeepEquals(topThreeWords("  , e   .. "), ["e"])
  // Test.assertDeepEquals(topThreeWords("  ...  "), [])
  // Test.assertDeepEquals(topThreeWords("  '  "), []
  // Test.assertDeepEquals(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
  // mind, there lived not long since one of those gentlemen that keep a lance
  // in the lance-rack, an old buckler, a lean hack, and a greyhound for
  // coursing. An olla of rather more beef than mutton, a salad on most
  // nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  // on Sundays, made away with three-quarters of his income.`), ['a','of','on'])
// Pseudocode:
  // Make an object to store words instances
  // Iterate over input string lower cased
    // while this char is a letter || apostrophe
      // continue pushing to temporary word string
    // Add word to object or increment if exists
    // clear temporary string
  // Make array of kay value pairs of object
  // Sort it with value
  // Return array of top 3 if exists
  