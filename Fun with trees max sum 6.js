function maxSum(root) {
  // Base case
    // There's no right or left branch
  return root ? root.value + Math.max(maxSum(root.left), maxSum(root.right)): 0;
  // if(!root) return 0
  // if(root.left == null && root.right == null) return root.value
  // // Recursive case
  // let left = root.left
  // let right = root.right
  // return root.value +
  //   (left && right ? Math.max(maxSum(left), maxSum(right)) :
  //   left ? maxSum(left) : maxSum(right))
  // return root.value + Math.max(maxSum(root.left), maxSum(root.right))
    // There's a left branch, get it
    // There's a right branch, get it
    // Pick the max, add it to it's value
}

// var TreeNode = function(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };
