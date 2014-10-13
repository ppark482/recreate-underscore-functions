

// Setup my Main Object

var tim = {
  greeting: function(message) {
    alert(message);
  }
};

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

// underscore map function



var createCallback = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

 _.iteratee = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return createCallback(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };


_.map = _.collect = function(obj, iteratee, context) {
  if (obj == null) return [];
  iteratee = _.iteratee(iteratee, context);
  var keys = obj.length !== +obj.length && _.keys(obj),
      length = (keys || obj).length,
      results = Array(length),
      currentKey;
  for (var index = 0; index < length; index++) {
    currentKey = keys ? keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
};

var reduceError = 'Reduce of empty array with no initial value';
