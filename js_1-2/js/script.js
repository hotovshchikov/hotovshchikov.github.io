'use strict';

var userChoiceNum = prompt("Enter a number", '');
var userChoicePow = prompt("Enter a power", '');

if (isNaN(userChoiceNum) || isNaN(userChoicePow)) {
	console.log('lets try again');
} else {
	console.log("Result is", mathPow(userChoiceNum, userChoicePow));
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
arrFill(userChoiceNames);

function arrFill(userChoiceNames){
  for (var i = 0; i < 5; i++) {
    var name = prompt("Enter the name");
    userChoiceNames.push(name);
}
return userChoiceNames;
}

var userLogin = prompt("Enter your login name");

loginSearch(userLogin);

function loginSearch(userLogin){
  for (var i = 0; i < userChoiceNames.length; i++) {
	if (userChoiceNames[i] == userLogin) {
		var match = userLogin;

		if (match) {
		  return console.log(userLogin + ", вы усешно вошли");
		}else {
		return alert("Something goes wrong! Try again!");
		}
	}
  }
}



