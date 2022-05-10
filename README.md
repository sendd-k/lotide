# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kholmes_sendd/lotide`

**Require it:**

`const _ = require('@kholmes_sendd/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Recieves two arrays and outputs a message
* `assertEqual`: Compares two values.
* `assertObjectsEqual`: Recieves two objects and outputs a message
* `countLetters`: Takes in a string and counts the letters.
* `countOnly`: Receives items and returns counts for a subset. It only counts specific items based on input (Only works with strings).
* `eqArrays`: Compares two arrays and returns true/false based on a match.
* `eqObjects`: Compares two objects and returns true/false based on a match.
* `findKey`: Receives and object and a callback. Sweeps through the object and returns the first truthy value. If nothing is found returns undefined.
* `findKeyByValue`: Receives an object and value. Sweeps through the object and returns the first key inside the value. If no key is matched in the value, returns undefined. 
* `head`: returns the first item in the array.
* `index`: a list of all functions in this npm.
letterPositions: returns all the indices (zero-based positions) in the string where each character is found.
* `map`: returns a new array based on a function.
* `middle`: returns the middle most item(s) in an array.
* `tail`: returns the everything but the head of an item.
* `takeUntil`: collects items from a provided array. Stop returning at a truthy value.
* `without`: returns a subset of a given array with unneeded elements