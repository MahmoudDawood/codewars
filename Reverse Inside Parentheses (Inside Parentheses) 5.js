function reverseInParens(text){
  // For every 2 valid parenthesis
  let parensCnt = 0, inParens = false, start, end
  for(let i = 0; i < text.length; i++){
    if(text[i] == '('){
      if(!parensCnt) start = i
      parensCnt++
      inParens = true
    }
    else if (text[i] == ')'){
      parensCnt--
      if(!parensCnt) {
        end = i
      }
    }
    // Edit the inside part by calling same func recursively in reverse
    if(parensCnt == 0 && inParens) {
      text = text.slice(0, start + 1) +
        reverseInParens(text.slice(start + 1, end).split('')
          .map(x => x == '(' ? ')' : x == ')' ? '(' : x).reverse().join('')) +
        text.slice(end)
    } 
    if(!parensCnt) inParens = false
  }
  // return text
  return text;
}

// Params: A text parenthesis
// Returns: The text with text inside parenthesis reversed at every level
// Ex:
  console.log(reverseInParens("h(el)lo"), "h(le)lo");
  console.log(reverseInParens("a ((d e) c b)"), "a (b c (d e))");
  console.log(reverseInParens("one (two (three) four)"), "one (ruof (three) owt)");
  console.log(reverseInParens("one (ruof ((rht)ee) owt)"), "one (two ((thr)ee) four)")