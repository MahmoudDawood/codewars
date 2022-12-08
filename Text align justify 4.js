function justify(text, width) {
  let input = text.split(' '), result = ""
  // while we still have input words
  while(input.length){
    // Find words count to be in a line from start + length to fit in the given width
    let temp = [], count = 0, len = 0
    for( ; count < input.length; count++){
      if(input[count].length + count + len > width) break
      else len += input[count].length
    }

    // Remove it from the input and locate into an array then string
    temp.push(...input.splice(0, count).map((word, i) => i ? ' ' + word : word))

    // Add  a space in between words in order till the width is satisfied
    if(temp.length > 1 && input.length){
      while(temp.join('').length + temp.length - 1 <= width && temp.length > 1)
        if(temp.length > 1) temp = temp.map((word, i) => i ? ' ' + word : word)
      for(let i = 1; temp.join('').length < width; i++)
        temp[i] = ' ' + temp[i]
    }
    // Put it in the result string + \n
    result += temp.join('') + (input.length ? '\n' : '')
  }
  // return resulting string
  return result
}

// Params: A single line text, a limiting line width
// Returns: A multi-line text with exact width as input width
// Ex:
console.log(justify('123 45 6', 7), '123  45\n6');
// 123  45
// 6
console.log(justify('123', 7), '123');
console.log(justify('', 10), '');
  
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

// console.log(justify(LIPSUM, 30))//, `
// Lorem  ipsum  dolor  sit amet,
// consectetur  adipiscing  elit.
// Vestibulum    sagittis   dolor
// mauris,  at  elementum  ligula
// tempor  eget.  In quis rhoncus
// nunc,  at  aliquet orci. Fusce
// at   dolor   sit   amet  felis
// suscipit   tristique.   Nam  a
// imperdiet   tellus.  Nulla  eu
// vestibulum    urna.    Vivamus
// tincidunt  suscipit  enim, nec
// ultrices   nisi  volutpat  ac.
// Maecenas   sit   amet  lacinia
// arcu,  non dictum justo. Donec
// sed  quam  vel  risus faucibus
// euismod.  Suspendisse  rhoncus
// rhoncus  felis  at  fermentum.
// Donec lorem magna, ultricies a
// nunc    sit    amet,   blandit
// fringilla  nunc. In vestibulum
// velit    ac    felis   rhoncus
// pellentesque. Mauris at tellus
// enim.  Aliquam eleifend tempus
// dapibus. Pellentesque commodo,
// nisi    sit   amet   hendrerit
// fringilla,   ante  odio  porta
// lacus,   ut   elementum  justo
// nulla et dolor.`)