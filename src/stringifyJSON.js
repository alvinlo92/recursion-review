// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'null') {
    return 'null';
  } else if (typeof obj === 'undefined' || typeof obj === 'function') {
    return undefined;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';  
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  } else if (Array.isArray(obj) === true) {
    var result = '[';
    
    if (obj.length === 0) {
      return '[]'
    }
    
    for (var i = 0; i < obj.length; i++){
      if (i !== obj.length - 1) {
        result += stringifyJSON(obj[i]) + ',';
      } else {
        result += stringifyJSON(obj[i]) + ']';
      }
    }
    
    return result;
  } else{
    var result = '{'
    
    for (var key in obj) {
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','
    }
    
    if (result.length > 1) {
      result = result.slice(0, -1);
    }
    
    result += '}'
    return result;
  }
};

// intiate empty string
// if string, number, or boolean
  // string concatnation
// if undefined or funtion
  // return undefined
// if array
  // for loop each each element through recusion
  // recursion + ','
// if object
  // for in loop and run recursion on each key value
    // run key into recursion 
    // run value into recursion
    // key + ':' + value + ','