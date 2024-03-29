function decode(m) {
  const obj = {
    '/\\': 'a',
    ']3': 'b',
    '(': 'c',
    '|)': 'd',
    '[-': 'e',
    '/=': 'f',
    '(_,': 'g',
    '|-|': 'h',
    '|': 'i',
    '_T': 'j',
    '/<': 'k',
    '|_': 'l',
    '|\\/|': 'm',
    '|\\|': 'n',
    '()': 'o',
    '|^': 'p',
    '()_': 'q',
    '/?': 'r',
    '_\\~': 's',
    '~|~': 't',
    '|_|': 'u',
    '\\/': 'v',
    '\\/\\/': 'w',
    '><': 'x',
    '`/': 'y',
    '~/_': 'z',
    '__': ' ',
  }
  console.log(m.split(m[0]).reverse().join(' '))
  return m.split(m[0]).reverse().map(c => obj[c]).join('')
}

//  (_,  (_,  [- \/ ( _T \/  ()  __  \/ |_ /= \/\/ () >< \/ [- \/\/ |\|  |_|  |\|  |\| _T |)  |^ >< |-| |\/|  

console.log(decode("'(_,''(_,''[-'\/'('_T'\/''()''__''\/'|_'/='\/\/'()'><'\/'[-'\/\/'|\|''|_|''|\|''|\|'_T'|)''|^'><'|-|'|\/|''"))
// Expected: 'ber sqoghxhvyckmlrwtmafexhh'
//           'ber sqoghxhvyckmlrwtmafexhh'

// console.log(decode('{|^{|{{|_{]3{'),'blip');
// console.log(decode(']()]|_]|_]][-]|-|]') ,'hello');
// console.log(decode('..[-.|_.|^....().[-.|^.__..|)...|.|^.|_|..~|~._\\~.__...[-..|.|)..'),'die stupid people');
// console.log(decode("'''_\\~'|_|'()'|''('|'|_'[-'|)''__'_\\~'/<'()'()'|_'''__'|\\|'|''/\\'/?']3'__''/?'|_|''()'`/''"), 'your brain looks delicious');
// console.log(decode('}/\\}~|~}/\\}/<}__}|)}}}[-}~|~}/\\}(}|}|_}|^}|_|}|)}__}|)}}}|\\|}|}/=}__}()}}}~|~}__}`/}/?}}~|~}') ,'try to find duplicated kata');  
  

// (decode("   _\\~ |_| () |  ( | |_ [- |)  __ _\\~ /< () () |_   __ |\\| |  /\\ /? ]3 __  /? |_|  () `/  "), 'your brain looks delicious');
// (decode(']()]|_]|_]][-]|-|]') ,'hello');
// (decode('{|^{|{{|_{]3{'),'blip');
// (decode('..[-.|_.|^....().[-.|^.__..|)...|.|^.|_|..~|~._\\~.__...[-..|.|)..'),'die stupid people');
// (decode(' /\\ ~|~ /\\ /< __ |)   [- ~|~ /\\ ( | |_ |^ |_| |) __ |)   |\\| | /= __ ()   ~|~ __ `/ /?  ~|~ ') ,'try to find duplicated kata'); 