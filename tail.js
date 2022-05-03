const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);

const tail = function(array) {
  return array.slice(1, -1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
