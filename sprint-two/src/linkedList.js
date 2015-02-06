var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if (!list.head){
      list.head = node;
      list.tail = node;
    }
    else{
      var current = list.head;
      while(!_.isNull(current.next)){
        current = current.next;
      }
      current.next = node;
      list.tail = node;
    }

    return list.tail;
  };

  list.removeHead = function(){
    if(list.head){
      var temp = list.head.next;
      var result = list.head.value;
      list.head = temp;

      return result;
    }

  };

  list.contains = function(target){
    var current = list.head;
    while(!_.isNull(current)){
      if (current.value === target){
        return true
      }
      current = current.next;
    }
    return false;

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
