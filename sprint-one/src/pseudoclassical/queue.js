var Queue = function() {
  this.storage = {};
  this.id = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.id] = value;
  this.id++;
  this.count++;
}

Queue.prototype.dequeue = function(){
  if(this.count){
    var result = this.storage[this.id - this.count];
    delete this.storage[this.id - this.count];
    this.count--;
    return result;
  }
}

Queue.prototype.size = function(){
  return this.count;
}


