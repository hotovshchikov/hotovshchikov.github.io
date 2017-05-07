'use strict';

var userChoiceNum = prompt("Enter a number", '');
var userChoicePow = prompt("Enter a power", '');

if (isNaN(userChoiceNum) && isNuN(userChoicePow)) {
	console.log('lets try again');
} else {
	console.log("Result is", mathPow(userChoiceNum, userChoicePow));
}

function mathPow() {

  var result = Math.pow(userChoiceNum, userChoicePow);
  
  return result;
}

var userChoiceNames = [];

for (var i = 0; i < 5; i++) {
  name = prompt("Enter the name");
  userChoiceNames.push(name);
}

console.log(userChoiceNames);

var userLogin = prompt("Enter your login name")

for (var i = 0; i < userChoiceNames.length; i++) {
	if (userChoiceNames[i] == userLogin) {
		var match = userLogin;
	}
}

if (match) {
		console.log(userLogin + ", вы усешно вошли");
	} else {
		alert("Something goes wrong! Try again!")
	}

