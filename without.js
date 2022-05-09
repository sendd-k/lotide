const eqArrays = function(actual, expected) {
  let output = true;
  if (actual.length !== expected.length) return false;
  
  for (let element = 0; element < actual.length; element += 1) {
    if (Array.isArray(actual[element]) || Array.isArray(expected[element])) {
      output = output && eqArrays(actual[element], expected[element]);
    } else if (actual[element] !== expected[element]) {
      output = output && false;
    }
  }
  return output;
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
