// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;

}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    //the number of items is equal to the length of the collection
    return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    //the number of pages is equal to celing itemCount/itemsPerPage
    return Math.ceil((this.itemCount() / this.itemsPerPage));
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  //if pageCount gave us the number of pages pageIndex=0 refers to the 1st page
  //if pageIndex >= pageCount we are out of bounds
  if(pageIndex < 0 || pageIndex >= this.pageCount()){
    return -1;
  }
  //every page except for the last should have itemsPerPage on each page
  else if(pageIndex < this.pageCount()-1){
    return this.itemsPerPage;
  }
  else{//do modular division on itemCount and items per page to get the remainder
        //this will be the number of items on the last page.
        return Math.ceil(this.itemCount() % this.itemsPerPage);

  }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  //any index < 0 and >= itemCount is out of bounds
  if(itemIndex < 0 || itemIndex >= this.itemCount()){
    return -1;
  }
  else{
    let start = 0;
    let end = 0;

    for(let i=0; i < this.pageCount(); i++){
        end = start + this.pageItemCount(i) - 1;
        if(start <= itemIndex && itemIndex <= end){
            return i;
        }
        else{
            start = end + 1;
        }
    }
  }
}