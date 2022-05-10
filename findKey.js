const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

//code

let findKey = function(object, callback) {
  let star = Object.keys(object);
  for (let key of star) {
    if (callback(object[key])) {
      console.log(key);
      return key;
    }
  }
  return undefined;
};

findKey(
  {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

assertEqual(findKey(
  {
    "Tiger": {strength: 6},
    "Bear": {strength: 8},
    "Fox": {strength: 3},
    "Wolf": {strength: 5},
  }, (x) => x.strength === 8), "Bear");
