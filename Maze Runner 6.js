function mazeRunner(maze, directions) {
  let x, y
  for(let i = 0; i < maze.length; i++)
    for(let j = 0; j < maze.length; j++)
      if(maze[i][j] == 2) [x, y] = [i, j]

  while(directions.length){
    if(maze[x][y] == 3) return "Finish"
    const c = directions.shift()
    c == 'N' ? x-- : c == 'S' ? x++ : c == 'E' ? y++ : y--
    if(Math.min(x, y) < 0 || Math.max(x, y) == maze.length || maze[x][y] == 1) return "Dead"
  }
  return (maze[x][y] == 3) ? "Finish" : "Lost"
}

var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
            
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]), "Finish");
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]), "Finish");
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]), "Finish");
console.log(mazeRunner(maze,["N","N","N","W","W"]), "Dead");
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]), "Dead");
console.log(mazeRunner(maze,["N","E","E","E","E"]), "Lost");
