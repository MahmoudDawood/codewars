function sumTheTreeValues(root) {
  return root ? root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right) : 0
}