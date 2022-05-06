function findArea(points) {
  let result = 0
  let ys, yb
  for(let i = 0; i < points.length - 1; i++){
    // if (points[i].Y > points[i + 1].Y) {
    //   yb = points[i].Y
    //   ys = points[i + 1].Y
    // } else{
    //   yb = points[i + 1].Y
    //   ys = points[i].Y
    // }
    // result += (points[i + 1].X - points[i].X) * ys + (0.5 * (points[i + 1].X - points[i].X) * (yb - ys))
    result += (points[i + 1].X - points[i].X) * (points[i + 1].Y + points[i].Y)/2
  }
  return result;
}