function parseInt(string) {
  // Convert string to splitted array
  // map each element with a function that
    // takes the word and converts each NUMBER word to it's int & chain filter to remove and word
  const arr = string.split(' ').map(x => toInt(x)).filter(w => w != "and")
  // iterate over array, take each number, multiply by next unit, add to acc sum
  let sum = 0, num = 0, rank = 0
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "number"){
      num = arr[i]
      continue
    }
    switch (arr[i]){
      case 'million':
        num *= 1000000
        break
      case 'thousand':
        if(rank == 3) {
          sum += num
          sum *= 1000
          num = 0
          break
        }
        num *= 1000
        break
      case 'hundred':
        num *= 100
        rank = 3
    }
    sum += num
    num = 0
  }
  sum += num
  return sum
  
  // implement the convertion function
  function toInt(x){
    // one, two, three, four, five, six, seven ,eight, nine, ten
    // eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
    // ending with   ty
    switch(x){
      case 'one':
        return 1
      case 'two':
        return 2
      case 'three':
        return 3
      case 'four':
        return 4
      case 'five':
        return 5
      case 'six':
        return 6
      case 'seven':
        return 7
      case 'eight':
        return 8
      case 'nine':
        return 9
      case 'ten':
        return 10
      case 'eleven':
        return 11
      case 'twelve':
        return 12
      case 'thirteen':
        return 13
      case 'fourteen':
        return 14
      case 'fifteen':
        return 15
      case 'sixteen':
        return 16
      case 'seventeen':
        return 17
      case 'eighteen':
        return 18
      case 'nineteen':
        return 19
      case 'twenty':
        return 20
      case 'thirty':
        return 30
      case 'forty':
        return 40
      case 'fifty':
        return 50
      case 'sixty':
        return 60
      case 'seventy':
        return 70
      case 'eighty':
        return 80
      case 'ninety':
        return 90
    }
    // has a -
    if(x.includes('-')) {
      let temp = 0
      let arr = x.split('-')
      switch(arr[0]){
        case 'twenty':
          temp += 20
          break
        case 'thirty':
          temp += 30
          break
        case 'forty':
          temp += 40
          break
        case 'fifty':
          temp += 50
          break
        case 'sixty':
          temp += 60
          break
        case 'seventy':
          temp += 70
          break
        case 'eighty':
          temp += 80
          break
        case 'ninety':
          temp += 90
          break
      }
      switch(arr[1]){
        case 'one':
          return temp + 1
        case 'two':
          return temp + 2
        case 'three':
          return temp + 3
        case 'four':
          return temp + 4
        case 'five':
          return temp + 5
        case 'six':
          return temp + 6
        case 'seven':
          return temp + 7
        case 'eight':
          return temp + 8
        case 'nine':
          return temp + 9
      }
    }
    return x
  }   
}
console.log(parseInt("seven thousand two hundred and ninety-six"))
// console.log(parseInt("one"))
// console.log(parseInt("twenty"))
// console.log(parseInt("one hundred and twenty-four"))
// console.log(parseInt("two hundred forty-six"))
// console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen"))

// Parameters: string defining a number from zero to million in words
// Returns: Converted string from integer
// Examples:
  // "one" => 1
  // "twenty" => 20
  // "one hundred and twenty-four" => 124
  // "two hundred forty-six" => 246
  // "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

// Pseduocode:
  // starting with
    // hundred, thousand, million, and
    // one, two, three, four, five, six, seven ,eight, nine, ten
    // (eleven, twelve), thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, (twenty)
      // has a -
        // ending with   ty

  // Convert string to splitted array
  // map each element with a function that
    // takes the word and converts each NUMBER word to it's int & chain filter to remove and word
  // iterate over array, take each number, multiply by next unit, add to acc sum
