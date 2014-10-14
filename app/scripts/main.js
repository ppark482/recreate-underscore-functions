// Collaborated with Richard

// Main Variables
var paul = {},
inputArray = [],
outputArray = [],
anArray = [1, 2, 3];

// Replication of the _.without function
var thisBeArray = [1,3,6,5,7,9];

paul.Ignore = function (x, withOut) {
  for (var i = 0; i < thisBeArray.length; i++) {
    if (thisBeArray[i] !== withOut) {
      outputArray.push(i);
      };
    };
  return outputArray;
};

// Replication of the _.uniq function. Return an array without any duplicates

var thisBeNotherArray = [1,3,5,5,6,9];

paul.Unique = function (x) {
  for (var i = 0; i < thisBeNotherArray.length; i++) {
    if (x[i] !== i) {
      outputArray.push(x[i]);
    };
  };
  return outputArray;
};

// Replication of the _.intersection function. Return an array with shared values between two different arrays

var thisArrayOne = [3,4,6,8,9],
thisArrayTwo = [3,6,5,9,7];

paul.Same = function (x, y) {
  for (var i = 0; i < thisArrayOne.length; i++) {
    if (x[i] === y[i]) {
      outputArray.push(x[i]);
    };
  };
  return outputArray;
};

var richard = {};

//richard.pairs()

richard.pairs = function(obj){
  var keyValPairs = [];
  for(var key in obj){
    var x = [];
    x.push(key);
    x.push(obj[key]);
    keyValPairs.push(x);
  };
  return keyValPairs;
};

richard.pairs({one: "a", two: "b", three: "c"});
