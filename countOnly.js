const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};



const countOnly = function(allItems, itemsToCount) {
  let subset = {};
  for (let item in itemsToCount)
    if (itemsToCount[item]) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          count += 1;
        }
      }
      if (count !== 0) {
        subset[item] = count;
      }
    }
  return subset;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

