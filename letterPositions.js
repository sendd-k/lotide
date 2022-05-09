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

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
    //add letters to object(results)
    let key = sentence[i];
    let value = i;
    //check if letter is added/add index to against letter
    if (key in results) {
      value = results[key];
      value.push(i);
      results[key] = value;
    } else {
      //if nothing create new key
      results[sentence[i]] = [i]
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("mummy").m, [0, 2, 3]);

