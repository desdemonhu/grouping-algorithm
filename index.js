'use strict';

let results = require('./lib/grouping-numbers.js');
let testArray = [1,2,3,4,18,19,5,6,22,0];
results.contextGenerator(testArray);
console.log(results.groupedArr);
