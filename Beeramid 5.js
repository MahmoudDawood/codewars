// PREP
var beeramid = function(bonus, price) {
  let level = 0
  while(bonus >= price * ++level ** 2) bonus -= price * level ** 2
  return level - 1

}

// Parameters: bonus money
// Returns: number of complete beeramid levels wtih the given money
// Examples:
  // Test.assertEquals(beeramid(9, 2), 1);
  // Test.assertEquals(beeramid(10, 2), 2);
  // Test.assertEquals(beeramid(11, 2), 2);
  // Test.assertEquals(beeramid(21, 1.5), 3);
  // Test.assertEquals(beeramid(454, 5), 5);
  // Test.assertEquals(beeramid(455, 5), 6);
  // Test.assertEquals(beeramid(4, 4), 1);
  // Test.assertEquals(beeramid(3, 4), 0);
  // Test.assertEquals(beeramid(0, 4), 0);
  // Test.assertEquals(beeramid(-1, 4), 0);
// Pseudocode:
  // Assume number of levels = 0
  // while money > can price * (level++) ** 2. With level starting at 1 ^ 2 
    // decrease money
  // return no of levels - 1