'use strict';

calcNumber();

function calcNumber(){
  var userChoiceNum = prompt("Enter a number", '');
  var userChoicePow = prompt("Enter a power", '');

  if (isNaN(userChoiceNum) || isNaN(userChoicePow)) {
	return console.log('lets try again');
  } else {
	return console.log("Result is", mathPow(userChoiceNum, userChoicePow));
  }
}

function mathPow(userChoiceNum, userChoicePow) {
  	var originNum = userChoiceNum;

  for (var i = 1; i <= userChoicePow; i++) {
  	originNum *= userChoiceNum;
}
return originNum;
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

console.log(userLogin + ", вы усешно вошли");

function loginSearch(userLogin){
  var i = 0;
  
  while (userChoiceNames[i] !== userLogin) {
    i++;

    if (userChoiceNames[i] !== userLogin) {
    return alert("Something goes wrong! Try again!");
    }
  }
return userLogin;
}
