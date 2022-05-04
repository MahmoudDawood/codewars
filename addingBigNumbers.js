function add(a, b) {
  let rem = 0, ans = ""
  a = a.split('').reverse().join('')
  b = b.split('').reverse().join('')
  for(let i = 0; i < a.length && i < b.length; i++){
    ans += ((Number(a[i]) + Number(b[i]) + rem) % 10).toString()
    if((Number(a[i]) + Number(b[i]) + rem > 9)) rem = 1
    else rem = 0
  }
  
  while(ans.length < a.length){
    ans += ((Number(a[ans.length]) + rem) % 10).toString()
    if(Number(a[ans.length - 1]) + rem > 9) rem = 1
    else rem = 0
  }
  while(ans.length < b.length){
    ans += ((Number(b[ans.length]) + rem) % 10).toString()
    if(Number(b[ans.length - 1]) + rem > 9) rem = 1
    else rem = 0
  }
  
  if(rem) ans += rem.toString()
  return ans.split('').reverse().join('')
}

// 9 10 023282204919116 3 0239667963
// 9 09 023282204919116 2 0239667963

    //    63829983432984289347293874
    // 90938498237058927340892374089