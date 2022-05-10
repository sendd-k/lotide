const countingLetters = function(string) {
  let output = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (!output[letter]) {
        output[letter] = 1;
      } else {
        output[letter] += 1;
      }
    }
  }
  return output;
};

console.log(countingLetters("My name is Kevin"));
//LHL
//L :2
//H: 1
