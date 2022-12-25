function phoneWords(stringOfNums) {
  const digits = [222, 22, 2, 333, 33, 3, 444, 44, 4, 555, 55, 5, 666, 66, 6, 7777, 777, 77, 7, 888, 88, 8, 9999, 999, 99, 9, 1, 0]
  const char = ['c', 'b', 'a',
    'f', 'e', 'd',
    'i', 'h', 'g',
    'l', 'k', 'j',
    'o', 'n', 'm',
    's', 'r', 'q', 'p',
    'v', 'u', 't',
    'z', 'y', 'x', 'w', '', ' '
  ]
  let str = ""
  for(let i = 0; i < stringOfNums.length; i++){
    let k = i
    while(k < stringOfNums.length && (stringOfNums[k] == stringOfNums[i] || k[i] == 1))
      k++
    str += stringOfNums.slice(i, k)
    i = k - 1
  }
  digits.forEach((key, i) => str = str.replaceAll(key, char[i]))
  return str
}

// Params: string of number on old phone representing a string
// Returns: Actual specified string
// Ex:
  console.log(phoneWords("443355555566604466690277733099966688"),"hello how are you")
  console.log(phoneWords("55282"), "kata")
  console.log(phoneWords("44460208337777833777"), "im a tester")
  console.log(phoneWords("22266631339277717777"), "codewars")
  console.log(phoneWords("66885551555"), "null")
  console.log(phoneWords("833998"), "text")
  console.log(phoneWords("000"), "   ")
  console.log(phoneWords("7999844666166"), "python")
  console.log(phoneWords("55886444833"), "kumite")
  console.log(phoneWords("271755533"), "apple")
  console.log(phoneWords(""), "")
  console.log(phoneWords("111"), "")