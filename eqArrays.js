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

module.exports = eqArrays;