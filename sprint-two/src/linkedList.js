var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    list[value] = node;
    if (!list.head){
      list.head = node;
    }

    // Take the value of tail, and make next of the value to be the new Node.

    if (!_.isNull(list.tail)){
        list.tail.next = node;
      };
    list.tail = node;
    // Somewhere here, we need to tell the LAST added to tail that it needs to be pointing to this NEW one.
    return list.tail;
  };

  list.removeHead = function(){
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

//

/*
 * Complexity: What is the time complexity of the above functions?
 */

// {"a":"b", "b":"c", "c":"d", "d":"g", "g":"a"}
// {0:"a", 1:"b", 2:"c", 3:"d"}


// {0:"a"} // key: 0 value = "a"
// {1:"b"} // key 1 value = "b"

// list[0][value]
// list[0][next] = list[1]

// node.value
// node.next

// node.next = node.value
