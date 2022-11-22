function zipWith(func, x, y) {
  // const result = []
  // for(let i = 0; i < x.length && i < y.length; i++)
  //   result.push(func(x[i], y[i]))
  // return result
  return Array.from(x.length > y.length ? y : x, (_, i) => func(x[i], y[i]))
}

console.log(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )) //     =>  [1,10,100,1000]
console.log(zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )) // =>  [4,7,7,4,7,7]
console.log(zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )) // =>  [0,2,4,6]  Both forms are valid.
console.log(zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )) // =>  [0,2,4,6]  Both are functions.