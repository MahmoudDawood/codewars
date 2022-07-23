function findUniq(arr) {
  return arr.filter(x => x == arr[0]).length === 1 ? arr[0] : arr.find(x => x != arr[0])
  return arr.find(x => arr.indexOf(x) === arr.lastIndexOf(x))
} 

console.log(findUniq([ 1, 0, 0 ])) // , 1);
console.log(findUniq([ 0, 1, 0 ])) // , 1);
console.log(findUniq([ 0, 0, 1 ])) // , 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) // , 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ])) // , 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ])) // , 10);