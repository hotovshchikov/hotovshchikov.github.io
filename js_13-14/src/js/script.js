(function () {

'use strict';

var data = [
    {
        title: 'Выберите все правильные ответы',
        question: ['2+2=4', '2+2*2=6', '2*4=6'],
        answer: [true, true, false]
    },
    {
        title: '2*5-2=?',
        question: ['8', '10', '12'],
        answer: [true, false, false]
    },
    {
        title: 'Верно ли утверждение 2>2',
        question: ['верно', 'не верно'],
        answer: [false, true]
    }
];
localStorage.setItem('questions', JSON.stringify(data));
var getData = localStorage.getItem('questions'),
    getData = JSON.parse(getData);

function regForm () {
    var regForm = document.createElement('form'),
        wrapper = document.getElementById('wrapper');

    regForm.setAttribute('action', '#');
    regForm.id = 'q_form';
    regForm.classList.add('q_form');

    wrapper.appendChild(regForm);

    var parent = document.getElementById('q_form'),
        html = document.getElementById('questionTemplate').textContent,
        template = _.template(html);

    parent.innerHTML += template({data: getData});

    checkRes();
}

function compareAnswers() {
    var title = '',
        button = '',
        allCheckbox = document.querySelectorAll('.checkbox_input'),

//===== Correct answers array

        newArr = _.map(getData, 'answer'),
        length = newArr.length,
        answerArr = [];

    for (var i = 0; i < length; i++) {
        answerArr = answerArr.concat(newArr[i]);
    }
//===== Chosen answers array

    var resChecked = _.map(allCheckbox, 'checked');

//===== Compare answers

    if (JSON.stringify(answerArr) === JSON.stringify(resChecked)) {
        title = 'Ты молодец! Все правильно!';
        button = 'Вернуться назад';
    } else {
        title = 'Ты допустил ошибку!';
        button = 'Пройти еще раз';
    }

//===== Show results

    var modal = document.getElementById('modal_overlay'),
        html = document.getElementById('modalWindow').textContent,
        template = _.template(html);
    modal.classList.add('modal_overlay');

    modal.innerHTML += template({
        title: title,
        button: button
    });
    closeModal();
}

function checkRes () {
    var checkResult = document.getElementById('check_result');
    checkResult.addEventListener('click', function (e) {
        e.preventDefault();
        compareAnswers();
    });
}

function closeModal () {
    var buttonModal = document.getElementById('button_modal'),
        modalWindow = document.getElementById('modal_window'),
        modal = document.getElementById('modal_overlay');

    buttonModal.addEventListener('click', function (e) {
        e.preventDefault();

        modal.removeChild(modalWindow);
        modal.classList.remove('modal_overlay');
    });
}

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
            regForm();
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

})();