

// Setup my Main Object

var tim = {
  greeting: function(message) {
    alert(message);
  }
};

// pass in array as well as a callback. takes the original array and returns a new one
// Take two parameters
// 1. an array
// 2. a callback, function
tim.map = function (arr, callback) { // callback will be a function
  if (Array.isArray(arr)) {
    if (arr.length !> 0) { // test to see if empty array
      var res = [], i;
      for (i = 0; i < arr.length; i++) {
        res[i] = callback(arr[i]); // this runs each i through the callback function
      } // res[i] will set each i to the new array res[]
      return res;
    }
    return [];
  } else {
    return "This is not an array";
  }
};

// example:
//var a = [1,2,3,4,5];
//
//tim.map(a, function(x) {
//  return x + 1;
//});
// output -> [2, 3, 4, 5, 6]









tim.greeting = function (message) {
  alert('message');
};

// Random Function

tim.random = function (min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

// Each

tim.each = function (arr) {
  console.log(arr);
};
