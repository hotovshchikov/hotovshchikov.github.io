(function() {
  'use strict';

  var test = {
    createTest: function() {
      var header = document.createElement('header');
      var title = document.createElement('h1');

      title.innerHTML = test.data.title;

      header.appendChild(title);

      document.body.appendChild(header);

      var main = document.createElement('main');
      var ol = document.createElement('ol');

      main.appendChild(ol);

      for (var i = 0, length = test.data.questions.length; i < length; i++){

        var li = document.createElement('li');

        ol.appendChild(li);

        var form = document.createElement('form');

        li.appendChild(form);

        var fieldset = document.createElement('fieldset');

        form.appendChild(fieldset);

        var legend = document.createElement('legend');

        legend.innerHTML = test.data.questions[i].title;

        fieldset.appendChild(legend);

        var ul = document.createElement('ul');

        legend.appendChild(ul);

        for (var a = 0, answerLength = test.data.questions[i].answers.length; a < answerLength; a++){
          var answer = document.createElement('li');

          ul.appendChild(answer);

          var checkbox = document.createElement('input');

          checkbox.setAttribute('type', 'checkbox');

          answer.appendChild(checkbox);

          var label = document.createElement('label');

          label.innerHTML = test.data.questions[i].answers[a];

          answer.appendChild(label);
      }

      }
      var submit = document.createElement('input');

      submit.setAttribute('type', 'submit');

      submit.setAttribute('value', 'Проверить мои результаты')

      main.appendChild(submit);


      document.body.appendChild(main);
    },

    data: {
      title: 'Тест по какой-то теме',

      questions: [
        {
          title: 'Вопрос #1',
          answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3'],
        },
        {
          title: 'Вопрос #2',
          answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
        },
        {
          title: 'Вопрос #3',
          answers: ['Вариант овтета 1', 'Вариант овтета 2']
        }
      ]
    }
  };
  test.createTest();
})();
