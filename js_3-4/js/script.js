(function() {
  'use strict';

  var test = {
    data: {
      title: 'Тест по какой-то теме',
      showTitle: function(){
        var header = document.createElement('header');

        header.classList.add('container');

        var title = document.createElement('h1');

        title.classList.add('title');

        title.innerHTML = 'Тест по программированию';

        header.appendChild(title);
      },
      questions: [
        {
          title: 'Вопрос #1',
          answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
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
  test.data.showTitle();

})();
