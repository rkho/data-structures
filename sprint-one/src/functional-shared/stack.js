var Stack = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value){
    //debugger;
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function(){
    this.count && this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  },
  size: function(){
    return this.count;
  }
};
