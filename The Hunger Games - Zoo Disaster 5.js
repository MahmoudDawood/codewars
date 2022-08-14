function whoEatsWho(zoo) {
  /*
    Make an map of meals with animals as key, animals they eat as array of values, eating list of eating actions
    Iterate over animals, check if they eat what's to their left then right, if they're in meals map keys
    If they ate something, remove it from list
      add it as eating action "Key eats Value"
      if it was at their left, position -= 2 if possible
      else recheck it again & continue
  */
  const meals = {
    "antelope": ["grass"],
    "big-fish": ["little-fish"],
    "bug": ["leaves"],
    "bear": ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
    "chicken": ["bug"],
    "cow": ["grass"],
    "fox": ["chicken", "sheep"],
    "giraffe": ["leaves"],
    "lion": ["antelope", "cow"],
    "panda": ["leaves"],
    "sheep": ["grass"]
  }
  const actions = [], arr = zoo.split(',')
  for(let i = 0; i < arr.length; i++){
    if(meals[arr[i]]){
      if(i && meals[arr[i]].includes(arr[i - 1])) { // Check if it can eat left animal
        actions.push(`${arr[i]} eats ${arr[i - 1]}`)
        arr.splice(i - 1, 1)
        i - 3 < -1 ? i = -1 : i -= 3
      }
      else if(meals[arr[i]].includes(arr[i + 1])){ // Check if it can eat right animal
        actions.push(`${arr[i]} eats ${arr[i + 1]}`)
        arr.splice(i + 1, 1)
        i--
      }
    }
  }
  return [zoo, ...actions , arr.join(',')]
}
// sheep,bear,cow,busker,leaves,banana
//        |

console.log(whoEatsWho("sheep,bug,bear,cow,busker,leaves,banana"))
console.log(whoEatsWho("fox,bug,chicken,grass,sheep"))

// Parameters: Comma separated string of animals in zoo
// Returns: [Input as string, eating actions in order, remaining animalss]
// Examples:
  // Input
  // "fox,bug,chicken,grass,sheep"

  // 1	fox can't eat bug	 >> "fox,bug,chicken,grass,sheep"
  // 2	bug can't eat anything	>> "fox,bug,chicken,grass,sheep"
  // 3	chicken eats bug	>> "fox,chicken,grass,sheep"
  // 4	fox eats chicken	>> "fox,grass,sheep"
  // 5	fox can't eat grass	>> "fox,grass,sheep"
  // 6	grass can't eat anything	>> "fox,grass,sheep"
  // 7	sheep eats grass	>> "fox,sheep"
  // 8	fox eats sheep	>> "fox"

  // Output
  // ["fox,bug,chicken,grass,sheep",
    // "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep",
    // "fox"]

//Pseudocode:
  /*
    Make an map of meals with animals as key, animals they eat as array of values, eating list of eating actions
    Iterate over animals, check if they eat what's to their left then right, if they're in meals map keys
    If they ate something, remove it from list
      add it as eating action "Key eats Value"
      if it was at their left, position -= 2 if possible
      else recheck it again & continue
  */