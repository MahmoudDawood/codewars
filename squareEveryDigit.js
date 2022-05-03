function squareDigits(num){
  //   num = num.toString()
  //   let ans = ""
  //   for(let i = 0; i < num.length; i++) ans += Number(num[i])**2
  //   return Number(ans);
    
  return Number(num.toString().split('').map((x) => x * x).join(''))
  }