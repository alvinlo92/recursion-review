// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
};


// if string, number, or boolean
  // string concatnation
// if undefined or funtion
  // return undefined
// if array
  // for loop and run recursion on each element
// if object
  // for in loop and run recursion on each key value