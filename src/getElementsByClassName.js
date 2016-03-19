// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];

  function getclass(node, results, className) {
    var nodes = node.childNodes;
    for (var i = 0; i < nodes.length; i++) {
      var classes = nodes[i].classList;
      if(classes && classes.contains(className)){
      	results.push(nodes[i]);
      }
      if(nodes[i].childNodes[0]){
     		getclass(nodes[i], results, className);
      }
      //console.log(classes);
    }
  }
  getclass(document, results, className);

	//console.log(results);
  return results;
};

getElementsByClassName('Menu');

//document.body, element.childNodes, and element.classList