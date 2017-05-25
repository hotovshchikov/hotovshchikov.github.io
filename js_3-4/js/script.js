(function() {
  'use strict';

  var test = {
    createTest: function() {
      // var header = document.createElement('header');

      var main = document.createElement('main');
      var form = document.createElement('form');

      main.appendChild(form);

      var title = document.createElement('h1');

      title.innerHTML = this.data.title;

      form.appendChild(title);

      var ol = document.createElement('ol');

      form.appendChild(ol);

      for (var i = 0, length = this.data.questions.length; i < length; i++){

        var li = document.createElement('li');

        ol.appendChild(li);


        var fieldset = document.createElement('fieldset');

        li.appendChild(fieldset);

        var legend = document.createElement('legend');

        legend.innerHTML = this.data.questions[i].title;

        fieldset.appendChild(legend);

        var ul = document.createElement('ul');

        legend.appendChild(ul);

        for (var a = 0, answerLength = this.data.questions[i].answers.length; a < answerLength; a++){
          var answer = document.createElement('li');

          ul.appendChild(answer);

          var checkbox = document.createElement('input');

          checkbox.setAttribute('type', 'checkbox');

          answer.appendChild(checkbox);

          var label = document.createElement('label');

          label.innerHTML = this.data.questions[i].answers[a];

          answer.appendChild(label);
      }

      }
      var submit = document.createElement('input');

      submit.setAttribute('type', 'submit');

      submit.setAttribute('value', 'Проверить мои результаты');

      form.appendChild(submit);

      var root = document.getElementById('root');
      root.appendChild(main);
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
