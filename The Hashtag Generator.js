// PREP
function generateHashtag (str) {
  const arr = str.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')
  return arr.length > 139 || !arr ? false : '#' + arr
}

// console.log(generateHashtag("Do We have A Hashtag"))
// console.log(generateHashtag(""))
// console.log(generateHashtag(" "))
// console.log(generateHashtag("Codewars is nice"))
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))

// Parameters: String
// Result: hastag, if length > 140 || !string return false
// Examples: 
// Test.assertEquals(generateHashtag(""), false, "Expected an empty string to return false")
// Test.assertEquals(generateHashtag(" ".repeat(200)), false, "Still an empty string")
// Test.assertEquals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
// Test.assertEquals(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
// Test.assertEquals(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
// Test.assertEquals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
// Test.assertEquals(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
// Test.assertEquals(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
// Test.assertEquals(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
// Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long")
// Pseudocode:
// Split string into array of stirngs
// Capitalize first char + join them
// if length > 138 || length == 0 return false
// else return '#' + string
// console.log(str.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(''))