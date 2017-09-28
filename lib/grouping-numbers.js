'use strict';

let groupedArr = module.exports = [];

let index = 0;
let goAgain = false;

//creates the context of the array to run all the functions on
function contextGenerator(arrayData){
  runTheRythme.call(arrayData);
}();

function repeatEverything(this){
  while(goAgain){
    runTheRythme(this);
    goAgain = false;
  }
}

///Runs the functions that process
function runTheRythme(this){
  if(compareNumbers(this)){
    buildIncrementalArray(this);
    goAgain = true;
  }else {
    groupedArr.push(this[index]);
    index++;
    goAgain = true;
  }
}

///Checks if next number in array is one more than the last number
function compareNumbers(this){
  if(this[index+1] === this[index] + 1){
    return true;
  }else {
    return false;
  }
}

function buildIncrementalArray(this){
  let tempArray = [];
  while(compareNumbers(this)){
    tempArray.push(this[index+1]);
    index++;
  }
  groupedArr.push(tempArray);
}
