
// Main Variables
var paul = {},
inputArray = [],
outputArray = [];

var userName = prompt("What is your name?");

if (userName !== null) {
  alert('Sup ' + userName + '. Input "paul" into the console to see the available functions.');
};

paul.greeting = function (x) {
  alert("Go away " + userName + " and come back when you're older.");
}



// Replication of the _.without function
var x = [];

paul.Ignore = function (x, ignore) { // x is an array input by user, ignore is value to be ignored
  var outputArray = [];
  for (var i = 0; i < x.length; i++) {
    if (x[i] !== ignore) {
      outputArray.push(x[i]);
      };
    };
  return outputArray;
};

// Replication of the _.uniq function. Return an array without any duplicates

paul.Unique = function (x) { // variable is an array with integers
  for (var i = 0; i < x.length; i++) {
    var comp = x[i];
    for (var j = 0; j < x.length; j++) {
      if (comp === x[j]) {
        // outputArray.push(comp);
        x.pop(comp);
      } else {
        outputArray.push(comp);
      };
    };
  };
  return outputArray;
};

// Replication of the _.intersection function. Return an array with shared values between two different arrays

paul.Same = function (x, y) { // variables are two different arrays
  for (var i = 0; i < thisArrayOne.length; i++) {
    if (x[i] === y[i]) {
      outputArray.push(x[i]);
    };
  };
  return outputArray;
};

// Replication of the _.contains function. Look for a value in the array. Return true or false
var thisArrayThree = [1,2,3,4,5,6,7,8,9];

paul.Has = function (x, y) { // variable x is an array, variable y is value to look for in array
  for (var i = 0; i < x.length; i++) {
    if (x[i] === y) {
      return true;
    } else {
      return false;
    };
  };
};

paul.Pairs = function(obj) { // variable is object with multiple properties
  var keyValPairs = [];
  for(var key in obj){
    var x = [];
    x.push(key);
    x.push(obj[key]);
    keyValPairs.push(x);
  };
  return keyValPairs;
};

//

paul.Invert = function(obj) { // variable is object with multiple properties
  var invertedObject = {};
  for(var x in object){
    var hold = x;
    x = object[x];
    object[x] = hold;
    return object;
  }
};
