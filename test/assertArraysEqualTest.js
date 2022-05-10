const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["My", "name", "is", "Kevin"], ["My", "name", "is", "Kevin"]);

assertArraysEqual([2, 2, 6], [2, 4, 6]);
assertArraysEqual([2, 4, 6], [2, 4, "6"]);
