function findMissingLetter(array)
{
  let temp = array[0].charCodeAt()
  for(let i = 1; i < array.length; i++) {
    if(array[i].charCodeAt() - temp !== 1) return String.fromCharCode(temp + 1)
    temp++
  }
  return ' ';
}