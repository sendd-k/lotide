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
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertation Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2)) {
    console.log(` 🛑🛑🛑 Assertion Failed:  ${array1} !==  ${array2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for(let item of array) {
  results.push(callback(item));
  }
  return results;

}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
