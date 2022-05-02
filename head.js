const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);

const head = function (array) {
  return array[1];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");