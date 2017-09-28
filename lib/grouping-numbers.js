'use strict';

let results = module.exports = {};
results.groupedArr = [];

let index = 0;
let goAgain = false;
let contextRun;

//creates the context of the array to run all the functions on
results.contextGenerator = function(arrayData){
  contextRun = runTheRythme.bind(arrayData);
  contextRun();
  repeatEverything(this);
}

function repeatEverything(arrayData){
  while(goAgain){
    contextRun();
  }
}

///Runs the functions that process
function runTheRythme(){
  if(compareNumbers(this)){
    buildIncrementalArray(this);
    setGoAgain(this);
  }else {
    index++;
    if(compareNumbers(this) === false){
      results.groupedArr.push(this[index]);
    }
    setGoAgain(this);
  }
}

function setGoAgain(arrayData){
  if(index === arrayData.length -1){
    goAgain = false;
  }else {
    goAgain = true;
  }
}

///Checks if next number in array is one more than the last number
function compareNumbers(arrayData){
  if(arrayData[index+1] === arrayData[index] + 1){
    return true;
  }else {
    return false;
  }
}

function buildIncrementalArray(arrayData){
  let tempArray = [];
    tempArray.push(arrayData[index]);
  while(compareNumbers(arrayData)){
    tempArray.push(arrayData[index+1]);
    index++;

  }

  results.groupedArr.push(tempArray);
}
