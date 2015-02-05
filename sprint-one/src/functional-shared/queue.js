var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.id = 0;
  someInstance.count = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.id] = value;
    this.id++;
    this.count++;
  },
  dequeue: function(){
    if (this.count){
      var result = this.storage[this.id - this.count];
      delete this.storage[this.id - this.count];
      this.count--;
      return result;
    }
  },
  size: function(){
    return this.count;
  }
};
