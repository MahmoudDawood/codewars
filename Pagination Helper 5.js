// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.itemsCount = collection.length
  this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.itemsCount
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.itemsCount / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if(pageIndex >= this.pageCount()) return -1
  const pageCount = this.itemsCount - pageIndex * this.itemsPerPage
  return pageCount > this.itemsPerPage ? this.itemsPerPage : pageCount
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if(itemIndex < 0 || itemIndex >= this.itemsCount) return -1
  return Math.floor(itemIndex / this.itemsPerPage)
}

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1


// Parameters: Array of items, number of items allowed per page
// Returns: 