// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var results = [];

  function getclass(node, className) {
    var nodes = node.childNodes;
    for (var i = 0; i < nodes.length; i++) {
      var classes = nodes[i].classList;
      if(classes !== undefined && classes.contains(className)){
      	results.push(nodes[i]);
      }
      if(nodes[i].hasChildNodes){
     		getclass(nodes[i], className);
      }
      //console.log(classes);
    }
  }
  getclass(document, className);

	//console.log(results);
  return results;
};

getElementsByClassName('Menu');

//document.body, element.childNodes, and element.classList