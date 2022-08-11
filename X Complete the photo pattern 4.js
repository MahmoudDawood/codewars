function pattern(legs) {
  const arr = Array(legs.length), input = Array.from(legs).sort().reverse(), mid = Math.floor(legs.length / 2)
  arr[mid] = input.shift()
  for(let i = 1; i < legs.length / 2; i++){
    arr[mid - i] = input.shift()
    arr[mid + i] = input.shift()
  }
  
  let people = Array(arr[mid]).fill(null).map(x => Array(8 + arr[mid]))
  for(const person in people){

  }
  console.log(people)
}

`
             + +              
   + +      +o o+             
  +o o+    +  u  +      + +   
 +  u  +    + ~ +      +o o+  
  + ~ +       |       +  u  + 
    |       +-o-+      + ~ +  
  +-o-+    /| o |\\       |    
_/| o |\\__/ +-o-+ \\    +-o-+  
  +-o-+      | |   \\__/| o |\\_
   | |       | |       +-o-+  
   I I       I I        I I   
`

let legs = [1,1,1,2,3]
legs = [1, 2, 3]
console.log(pattern(legs))
// After arrange --> [1,2,3,1,1