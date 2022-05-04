const eqArrays =function(array1, array2){
  if (array1.length !== array2.length) {
    return false;
  }
  return true; 
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true ) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (eqArrays(array1, array2) === false ) {
    console.log(` 🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

const without = function(source, itemsRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let k = 0; k < itemsRemove.length; k++) {
      if (source[i] === itemsRemove[k]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]