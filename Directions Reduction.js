function dirReduc(arr){
  // let finished = false
  // while(!finished){
  //   finished = true
  //   for(let i = 0; i < arr.length - 1; i++){
  //     if((arr[i][0] === 'N' && arr[i + 1][0] === 'S') ||
  //        (arr[i][0] === 'S' && arr[i + 1][0] === 'N') ||
  //        (arr[i][0] === 'E' && arr[i + 1][0] === 'W') ||
  //        (arr[i][0] === 'W' && arr[i + 1][0] === 'E')
  //       ){
  //         arr.splice(i--, 2)
  //         finished = false
  //     }
  //   }
  // }
  // return arr

  const opposite = {'NORTH': 'SOUTH', 'SOUTH': 'NORTH', 'EAST': 'WEST', 'WEST': 'EAST'}
  
  return arr.reduce((dirs, dir) => {
    opposite[dirs.slice(-1)] === dir ? dirs.pop() : dirs.push(dir)
    return dirs
  }, [])
}