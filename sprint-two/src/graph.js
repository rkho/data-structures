

var Graph = function(){
  this.storage = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.storage.push(node);

};

Graph.prototype.contains = function(node){
  var currentGraph = this;
  return _.indexOf(currentGraph.storage, node) >= 0;
};

Graph.prototype.removeNode = function(node){
  var currentGraph = this;
  var index = _.indexOf(currentGraph.storage, node)
  if(index >= 0) currentGraph.storage.splice(index,1);
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var currentGraph = this;
  var hasConnection = false;
  _.each(currentGraph.edges, function(value){
    if ((_.indexOf(value,fromNode) >= 0 && _.indexOf(value,toNode)) >= 0){
      hasConnection = true;
    }
  })
  return hasConnection;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.contains(fromNode) && this.contains(toNode) && !this.hasEdge(fromNode, toNode)){
    var tempEdge = [];
    tempEdge.push(fromNode);
    tempEdge.push(toNode);
    this.edges.push(tempEdge);
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.hasEdge(fromNode, toNode)){
    var currentGraph = this;
    var locationOfConnection;
    _.each(currentGraph.edges, function(value,index){
      if ((_.indexOf(value,fromNode) + _.indexOf(value,toNode)) === 1){
        locationOfConnection = index;
      }
    });
    currentGraph.edges.splice(locationOfConnection, 1);
  }
};

Graph.prototype.forEachNode = function(cb){
  var currentGraph = this;
  _.each(currentGraph.storage, function(elem){
    cb(elem);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



