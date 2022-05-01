var uniqueInOrder=function(iterable){
  // if(typeof iterable === 'string') iterable = iterable.split('');
  // return iterable.filter((x, i, arr) => x != arr[i + 1])  

  return [...iterable].filter((x, i, arr) => x != arr[i + 1])  
}