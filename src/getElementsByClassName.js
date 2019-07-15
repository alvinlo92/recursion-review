// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  
};

// need to use document.body, element.classNodes and element.classList

// initate empty array
// for through document body childNodes
  // if hasChildNodes is equal to true
    // recurse childNode into function
  // else if childNodes of classList contains className
    // push to array
  // recurse childNode into function
// return array