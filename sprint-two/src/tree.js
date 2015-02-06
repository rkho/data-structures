var Tree = function(value){

  var newTree = {};
  _.extend(newTree,treeMethods)
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = new Tree(value);
  this.children.push(child);
  return child;
};

treeMethods.contains = function(target){

  // ** attempt to solve with functional programming **
  // ** might come back to it **

  // var currentTree = this;
  // _.some(currentTree, function(){
  //   if(currentTree.value === target){
  //     return true;
  //   }
  //   debugger;
  //   _.each(currentTree.children, function(value){
  //     value.contains(target);
  //   })
  // })
  //
  var valExists = false;
  var checkTree = function(tree){
    if (tree.value === target){
      valExists = true;
    } else {
      _.each(tree.children, function(elem){
        return checkTree(elem);
      });
    }
  }
  checkTree(this);
  return valExists;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
