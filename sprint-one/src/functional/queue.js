var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var id = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[id] = value;
    size++;
    id++;
  };

  someInstance.dequeue = function(){
    if (size){
      var first = id - size;
      var result = storage[first];
      delete storage[first];
      size--;
      return result;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
