var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.id = 0;

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue:function(value){
    this.storage[this.id] = value;
    this.id++;
    this.count++;
  },
  dequeue:function(){
    if(this.count){
      var result = this.storage[this.id - this.count];
      delete this.storage[this.id - this.count];
      this.count--;
      return result;
    }
  },
  size:function(){
    return this.count;
  }

};


