var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  var currentSet = this;
  if (_.indexOf(currentSet._storage, item) === -1){
    currentSet._storage.push(item);
  };
};

setPrototype.contains = function(item){
  var currentSet = this;
  if (_.indexOf(currentSet._storage, item) >= 0){
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  var currentSet = this;
  var index = _.indexOf(currentSet._storage, item)
  if ( index >= 0){
    currentSet._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
