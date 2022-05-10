const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  } else {
    for (const key of key1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        }
        return false;
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
//Arrays/values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
