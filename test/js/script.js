var first = document.createElement('div');

first.classList.add('red');

document.body.appendChild(first);

var second = document.createElement('p');

second.classList.add('text');

second.innerHTML = 'some text';

var box = document.querySelector('.red');

box.appendChild(second);
