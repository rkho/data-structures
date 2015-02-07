var HashTable = function(){
  this._limit = 8;
  this._storageMethods = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var tuple = [key, value];
  var currentHash = this._storageMethods;

  if(currentHash.get(i) === undefined){
    var bucket = [tuple];
    currentHash.set(i,bucket);
  } else {
    var tempBucket = currentHash.get(i);
    tempBucket.push(tuple);
    currentHash.set(i,tempBucket);
  }

};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var result = null;
  var currentHash = this._storageMethods;
  var bucket = currentHash.get(i);

  _.each(bucket, function(val){
    if (val[0] === key){
      result = val[1];
    }
  })

  return result;

};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var currentHash = this._storageMethods;
  var tempBucket = currentHash.get(i);
  if (tempBucket){
    _.each(tempBucket, function(val, index){
      if (val[0] === key){
        tempBucket.splice(index, 1);
      }
    });
    currentHash.set(i, tempBucket);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
