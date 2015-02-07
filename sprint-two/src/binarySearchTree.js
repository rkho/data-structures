var BinarySearchTree = function(value){

  var tree = {};

  tree.value = value;
  tree.left = undefined;
  tree.right = undefined;

  tree.insert = function(node){
    if (node > tree.value){
      if (tree.right === undefined){
        tree.right = BinarySearchTree(node);
      } else {
        tree.right.insert(node);
      }
    } else if (node < tree.value){
      if (tree.left === undefined){
        tree.left = BinarySearchTree(node);
      } else {
        tree.left.insert(node);
      }
    }
    // If node < value, check tree.left. Does it exist?
    // If not, tree.left = new BinarySearchTree(node);
    // Otherwise, go down that tree and look.
  };

  tree.contains = function(node){
    var isTrue = false;

    var checkNode = function(branch){
      if(branch.value === node){
        isTrue = true;
      }
      else if(node > branch.value && branch.right !== undefined){
        checkNode(tree.right);
      }
      else if(node < branch.value && branch.left !== undefined){
        checkNode(tree.left);

      }
    }
    checkNode(tree);

    return isTrue;
  };

  tree.depthFirstLog = function(callback){
      if (tree.value !== undefined){
        callback(tree.value);
        if(tree.left){
          tree.left.depthFirstLog(callback);
        }
        if(tree.right){
          tree.right.depthFirstLog(callback);
        }
      }
  };

  return tree;

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
