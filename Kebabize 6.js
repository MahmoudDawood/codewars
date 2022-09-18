function kebabize(str) {
  return str.split('').filter(x => x.toUpperCase() != x.toLowerCase()).reduce((acc, curr, i) => {
    return curr.toUpperCase() == curr && i ?  acc + '-' + curr.toLowerCase() : acc + curr.toLowerCase()
  }, "")
}

console.log(kebabize('camelsHaveThreeHumps')) // camels-have-three-humps
console.log(kebabize('camelsHave3Humps')) // camels-have-humps
console.log(kebabize('123A')) // camels-have-humps
