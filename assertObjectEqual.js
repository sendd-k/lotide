const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1)
  let key2 = Object.keys(object2)
  if(key1.length !== key2.length ) { //checking if number of keys is same 
    return false;
  } else { 
    for (const key of key1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (eqArrays(object1[key], object2[key])) {
            return true;
          }
          return false;
      }
      
      
      
          if (object1[key] !== object2[key]) { // checking if the values are the same 
        return false;
      }
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(array1, array2) {
  const inspect = require("util").inspect
  if (eqObjects(array1, array2)) {
  console.log(`✅✅✅ Assertation Passed: ${inspect(array1)} = ${inspect(array2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(array1)} != ${inspect(array2)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });