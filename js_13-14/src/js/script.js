(function () {

'use strict';

// Registration form validation

var submit = document.getElementById('submit'),
    mail = document.getElementById('mail'),
    pass = document.getElementById('pass'),
    questionForm = document.getElementById('q_form');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    var result = validate(mail.value, pass.value);

    if (!result.mail.isValid || !result.pass.isValid) {
        alert(result.mail.response);
        alert(result.pass.response);
    } else {
        alert('Добро пожаловть ' + mail.value + '! Пройдите пожалуйста тест');
        questionForm.classList.add('q_form');
    }
});

function validate(m, p) {
    var mailPattern = /^\w+@[a-z]+\.[a-z]{2,}\b/,
        passPattern = /^\w{5,10}$/,
        result = {
        mail: {},
        pass: {}
    };
    if (mailPattern.test(m)){
        result.mail.isValid = true;
        result.mail.response = 'Mail is valid';
    } else {
        result.mail.isValid = false;
        result.mail.response = 'Mail is not valid';
    }
    if (passPattern.test(p)){
        result.pass.isValid = true;
        result.pass.response = 'Pass is valid';
    } else {
        result.pass.isValid = false;
        result.pass.response = 'Pass is not valid';
    }
    return result;
}

// Questions data

var data = [
    {
        title: 'Выберите все правильные ответы',
        question: ['2+2=4', '2+2*2=6', '2*4=6'],
    },
    {
        title: '2*5-2=?',
        question: ['8', '10', '12'],
    },
    {
        title: 'Верно ли утверждение 2>2',
        question: ['верно', 'не верно'],
    }
];

localStorage.setItem('questions', JSON.stringify(data));
var getData = localStorage.getItem('questions'),
    getData = JSON.parse(getData);


    var parent = document.getElementById('q_form'),
        html = document.getElementById('questionTemplate').textContent,
        template = _.template(html);

    parent.innerHTML += template({data: getData});

// Checking user answers

var checkResult = document.getElementById('check_result');

checkResult.addEventListener('click', function (e) {
    e.preventDefault();

    var answer1 = document.getElementsByTagName('input')[2],
        answer2 = document.getElementsByTagName('input')[3],
        answer3 = document.getElementsByTagName('input')[5],
        answer4 = document.getElementsByTagName('input')[9],
        checkboxInput = document.getElementById('checkbox_input'),
        modal = document.getElementById('modal_overlay'),
        title = '',
        button = '';

    modal.classList.add('modal_overlay');

    if (answer1.checked && answer2.checked && answer3.checked && answer4.checked){
        title = 'Ты молодец! Все правильно!';
        button = 'Вернуться назад';
    } else {
        title = 'Ты допустил ошибку!';
        button = 'Пройти еще раз';
    }

    // Modal Window

    var parent = document.getElementById('modal_overlay'),
        html = document.getElementById('modalWindow').textContent,
        template = _.template(html);

    parent.innerHTML += template({
        title: title,
        button: button
    });

    var buttonModal = document.getElementById('button_modal'),
        modalWindow = document.getElementById('modal_window');

    buttonModal.addEventListener('click', function (e) {
        e.preventDefault();

        modal.removeChild(modalWindow);
        modal.classList.remove('modal_overlay');
    });
});

})();