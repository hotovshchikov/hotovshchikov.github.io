(function() {
  'use strict';

  var test = {
    addHeader: function() {
      var header = document.createElement('header');

      header.classList.add('container');

      var wrapper = document.querySelector('.wrapper');

      wrapper.appendChild(header);
    },
    data: {
      title: 'Тест по какой-то теме',
      showTitle: function() {
        var title = document.createElement('h1');

        title.classList.add('title');

        title.innerHTML = 'Тест по программированию';

        var headerTitle = document.querySelector('.container');

        headerTitle.appendChild(title);
      },
      addMain: function() {
        var main = document.createElement('main');

        main.classList.add('main');

        var mainBox = document.querySelector('.wrapper');

        mainBox.appendChild(main);
      },
      addQuestionField: function() {
        var ol = document.createElement('ol');

        ol.classList.add('question');

        var questionBox = document.querySelector('.main');

        questionBox.appendChild(ol);
      },
      addQuestionItem: function() {
        var li = document.createElement('li');

        li.classList.add('question__item');

        var questionBoxItem = document.querySelector('.question');

        questionBoxItem.appendChild(li);
      },
      addQuestionForm: function() {
        var form = document.createElement('form');

        form.classList.add('numeration');

        var questionBoxForm = document.querySelector('.question__item');

        questionBoxForm.appendChild(form);
      },
      addQuestionFieldset: function() {
        var fieldset = document.createElement('fieldset');

        fieldset.classList.add('fieldset');

        var questionFieldset = document.querySelector('.numeration');

        questionFieldset.appendChild(fieldset);
      },

      questions: [
        {
          title: 'Вопрос #1',
          answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3'],
          showQuestion: function() {
            var question = document.createElement('legend');

            question.classList.add('title');

            question.innerHTML = this.title;

            var questionTitle = document.querySelector('.fieldset');

            questionTitle.appendChild(question);
          },
          showCheckbox: function() {
            var checkbox = document.createElement('input');

            checkbox.setAttribute('type', 'checkbox');

            checkbox.classList.add('checkbox');

            var answerCheckbox = document.querySelector('.answer__item');

            answerCheckbox.appendChild(checkbox);
          },
          showAnswer: function() {
            var label = document.createElement('label');

            var answerLabel = document.querySelector('.checkbox');

            answerLabel.appendChild(label);

            for (var i = 0, length = this.answers.length; i = length; i++){
              label.innerHTML = this.answers[i];
            }
          }

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
  test.addHeader();
  test.data.showTitle();
  test.data.addMain();
  test.data.addQuestionField();
  test.data.addQuestionItem();
  test.data.addQuestionForm();
  test.data.addQuestionFieldset();
  test.questions[0].showQuestion();
  test.questions[0].showCheckbox();
  test.questions[0].showAnswer();
})();
