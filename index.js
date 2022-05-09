const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const countingLetters = require('./countingLetters');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const countOnly = require('./countOnly');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects')


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  countingLetters: countingLetters,
  map: map,
  takeUntil: takeUntil,
  without: without,
  countOnly: countOnly,
  assertObjectEqual: assertObjectEqual,
  assertEqual: assertEqual,
  assertObjectEqual: assertObjectEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects
};
