Array.prototype.sameStructureAs = function (other) {
  let result = true
  // Make a recursive function(array1 aka other, array2 aka this)
    // loop over elements in array1
      // if it has a length same as array2 element && both are arrays or not
        // if length > 0 >> Call again with the new arrays elements
      // else return false
    // return true
  function search(array1, array2){
    if(array1.length != array2.length) result = false
    // if(Array.isArray(array1) && Array.isArray(array2) && array1.length !== array2.length) result = false
    for(let i = 0; i < array1.length; i++){
      // if(Array.isArray(array1[i]) &&  Array.isArray(array2[i])) return false
      if(Array.isArray(array1[i]) && Array.isArray(array2[i])){
        if(array1[i].length !== array2[i].length) result = false 
        else if (array1[i].length > 0 && array2[i].length > 0) search(array1[i], array2[i])
      }
      else if (Array.isArray(array1[i]) !== Array.isArray(array2[i])) result = false
    }
  }
  search(this, other)
  return result
};

  console.log([].sameStructureAs( 1 ));  // false        
  console.log([].sameStructureAs( {} ));         // false 
  console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));          
  console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));   //true
  console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  
  console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));    //false
  console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ));  //true
  console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));  //false

console.log([ 1, '[', ']' ].sameStructureAs( [ '[', ']', 1 ] ));       // true   
console.log([1,'[',']'].sameStructureAs( ['[',']',1] ));          // true

// X {{{Check if the array ends >> return true}}} X
        // lvl--

  // Call backtracking function and return it's result

  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
// [ 1, '[', ']' ]
// [ '[', ']', 1 ]


// Parameters: Array of nested structure + called array
// Returns: true if they both have the same nested structure
// Examples:
  // console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));          
  // console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));   //true
  // console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  
  // console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));    //false
  // console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ));  //true
  // console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));  //false
// Pseudocode:
  // Make a recursive function(array1 aka other, array2 aka this)
    // loop over elements in array1
      // if it has a length same as array2 element && both are arrays or not
        // if length > 0 >> Call again with the new arrays elements
      // else return false
    // return true