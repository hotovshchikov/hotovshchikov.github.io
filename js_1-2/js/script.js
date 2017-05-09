'use strict';

calcNumber();

function calcNumber(){
  var userChoiceNum = prompt("Enter a number", '');
  var userChoicePow = prompt("Enter a power", '');

  if (isNaN(userChoiceNum) || isNaN(userChoicePow)) {
	  console.log('lets try again');
  }else if (userChoiceNum === '' || userChoicePow === ''){
    console.log('lets try again');
  }else {
	  console.log("Result is", mathPow(userChoiceNum, userChoicePow));
  }
}

function mathPow(userChoiceNum, userChoicePow) {
  	var originNum = userChoiceNum;

    if (userChoiceNum > 0 && userChoicePow > 0 || userChoiceNum < 0 && userChoicePow > 0 && userChoiceNum === 0 || userChoicePow > 0){
      for (var i = 1; i < userChoicePow; i++) {
  	    originNum *= userChoiceNum;
      }
      return originNum;

    }else if (userChoiceNum > 0 && userChoicePow < 0 || userChoiceNum < 0 && userChoicePow < 0){
            for (var b = 1; b > userChoicePow; b--) {
            originNum *= userChoiceNum;
            }
            return 1 / originNum;

    }else if (userChoiceNum > 0 && userChoicePow === 0 || userChoiceNum < 0 && userChoicePow === 0){
            } 
    return 1;
}


/*function mathPow() {

  var result = Math.pow(userChoiceNum, userChoicePow);
  
  return result;
}*/

var userChoiceNames = [];
userChoiceNames = arrFill();

function arrFill(){
  for (var i = 0; i < 5; i++) {
    var name = prompt("Enter the name");
    userChoiceNames.push(name);
  }
  return userChoiceNames;
}

var userLogin = prompt("Enter your login name");

loginSearch(userLogin);


function loginSearch(userLogin){
  for (var i = 0; i < 5; i++){
    if (userChoiceNames[i] === userLogin){
      return console.log(userLogin + ", вы усешно вошли");
    }
  } 
  alert("Something goes wrong! Try again!");
}