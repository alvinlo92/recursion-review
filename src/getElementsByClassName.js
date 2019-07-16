// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // initate empty array
  var results = [];
  // create recurse function with input => node
  var findClassName = function(node) {
    // for through document body childNodes
    if (node.classList.contains(className)) {
      // recurse childNode into function
      results.push(node);
    }
    // if hasChildNodes is equal to true
    if (node.hasChildNodes()) {
        for (var i = 0; i < node.childNodes.length; i++) {
          findClassName(node[i]);
        }
    }
  }
  // run the recurse function => document.body
  findClassName(document.body);
  // return array
  return results;
};

// need to use document.body, element.classNodes and element.classList