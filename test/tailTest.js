const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns word length of 3", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3); //pass
  });
  it("returns word length of 3", () => {
    const words = ["Yo Yo", "Light", "house", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3); //fail
  });
});