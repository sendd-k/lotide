const eqArrays =function(array1, array2){
  if (array1.length !== array2.length) {
    return false;
  }
  return true; 
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (eqArrays(array1, array2)) {
    console.log(` 🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    const index1 = array.length / 2;
    const index2 = index1 - 1;
    return [array[index2], array[index1]];
  } else if (array.length % 2 !== 0) {
    const index3 = Math.floor(array.length / 2);
    return [array[index3]];
  }
};
