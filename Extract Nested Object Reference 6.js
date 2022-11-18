// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  const arr = string.split('.')
  let temp = this
  for(let i = 0; i < arr.length; i++){
    if(temp[arr[i]]) temp = temp[arr[i]] 
    else return
  }
  return temp
}

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined
