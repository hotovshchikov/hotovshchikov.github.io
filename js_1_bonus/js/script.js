'use strict';

var question = prompt('What do you want to reverse?');

console.log(question.split('').reverse().join('')); //Правильный вариант

/*var arr = question.split('');

for (i = arr.length - 1; i >= 0; i--) {
console.log(question[i]); 
} */ //отображает букву с новой строчки
var arrLongestWord = [];
arrLongestWord = LongestWord();
console.log(arrLongestWord);

function LongestWord(){
  var str = prompt('Type anything you want.');
  var arr = str.split(" ");
  var arrSort = arr.sort();
  var longestWord = arrSort[arrSort.length - 1];
  var arrLongestWord = [longestWord, longestWord.length];

return arrLongestWord; //отображение массива с длинным словом и кол-вом букв в нем
}

var userChoice = prompt('Enter a number');

function factorial(userChoice) {
	if (userChoice < 0) {
		return -1;
	}else if (userChoice === 0){
		return 1;
	}
	var tmp = userChoice;

	while (userChoice-- > 2) {
		tmp*= userChoice;
	}

return tmp;
}

var result = factorial(userChoice);

console.log(result);
