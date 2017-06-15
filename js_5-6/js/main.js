(function (){
  'use strict';

var Timer = function () {

  var isActive = false;
  var hours, min, sec, ms, startCount, startTime, newDate;
  var pausedTime = 0;

  this.Elements = function (tag, className, type, value, text) {
    this.name = document.createElement(tag);
    this.name.classList.add(className);
    this.name.setAttribute(type, value);
    this.name.setAttribute(value, value);
    this.name.innerHTML = text;
    return this.name;
  };
  this.container = this.Elements('div', 'container', null, null, 'Timer');
  this.container.style.textAlign = 'center';
  this.timeField = this.Elements('div', 'timeField', null, null, null);
  this.timeField.style.display = 'flex';
  this.timeField.style.flexDirection = 'row';
  this.timeField.style.justifyContent = 'center';
  this.timeField.style.padding = '20px';
  this.daysBlock = this.Elements('div', 'days', null, null, null);
  this.daysBlock.style.padding = '20px';
  this.daysBlock.style.outline = '1px solid #000';
  this.daysTitle = this.Elements('h2', 'title', null, null, 'Days');
  this.daysNum = this.Elements('p', 'title', null, null, '00');
  this.hoursBlock = this.Elements('div', 'hours', null, null, null);
  this.hoursBlock.style.padding = '20px';
  this.hoursBlock.style.outline = '1px solid #000';
  this.hoursTitle = this.Elements('h2', 'title', null, null, 'Hours');
  this.hoursNum = this.Elements('p', 'title', null, null, '00');
  this.minBlock = this.Elements('div', 'min', null, null, null);
  this.minBlock.style.padding = '20px';
  this.minBlock.style.outline = '1px solid #000';
  this.minTitle = this.Elements('h2', 'title', null, null, 'Minutes');
  this.minNum = this.Elements('p', 'title', null, null, '00');
  this.secBlock = this.Elements('div', 'sec', null, null, null);
  this.secBlock.style.padding = '20px';
  this.secBlock.style.outline = '1px solid #000';
  this.secTitle = this.Elements('h2', 'title', null, null, 'Seconds');
  this.secNum = this.Elements('p', 'title', null, null, '00');
  this.msBlock = this.Elements('div', 'ms', null, null, null);
  this.msBlock.style.padding = '20px';
  this.msBlock.style.outline = '1px solid #000';
  this.msTitle = this.Elements('h2', 'title', null, null, 'Ms');
  this.msNum = this.Elements('p', 'title', null, null, '000');
  this.form = this.Elements('form', 'form', null, null, null);
  this.startBtn = document.createElement('button');
  this.startBtn.innerHTML = 'START';
  this.stopBtn = document.createElement('button');
  this.stopBtn.innerHTML = 'STOP';

  this.Build = function () {
    document.querySelector('.wrapper').appendChild(this.container);
    this.container.appendChild(this.timeField);
    this.timeField.appendChild(this.daysBlock);
    this.daysBlock.appendChild(this.daysTitle);
    this.daysBlock.appendChild(this.daysNum);
    this.timeField.appendChild(this.hoursBlock);
    this.hoursBlock.appendChild(this.hoursTitle);
    this.hoursBlock.appendChild(this.hoursNum);
    this.timeField.appendChild(this.minBlock);
    this.minBlock.appendChild(this.minTitle);
    this.minBlock.appendChild(this.minNum);
    this.timeField.appendChild(this.secBlock);
    this.secBlock.appendChild(this.secTitle);
    this.secBlock.appendChild(this.secNum);
    this.timeField.appendChild(this.msBlock);
    this.msBlock.appendChild(this.msTitle);
    this.msBlock.appendChild(this.msNum);
    this.container.appendChild(this.form);
    this.form.appendChild(this.startBtn);
    this.form.appendChild(this.stopBtn);
  };
  this.startBtn = addEventListener('click', function () {
    startTime = Date.now();
    setInterval(function () {
      this.minNum.innerHTML = Date.now() - startTime);
    }, 1000);
  });
};
  var app = new Timer();
  app.Build();


  // var timerFrame = document.createElement('div');
  // timerFrame.classList.add('container');
  // // timerFrame.classList.add('col-md-offset-3');
  // var timerDisplay = document.createElement('div');
  // timerDisplay.classList.add('col-lg-12');
  // timerDisplay.innerHTML = seconds;
  // // timerDisplay.classList.add('clearfix');
  // timerFrame.appendChild(timerDisplay);
  // var btnStart = document.createElement('button');
  // btnStart.classList.add('btn');
  // btnStart.classList.add('btn-success');
  // btnStart.classList.add('btn-lg');
  // btnStart.classList.add('col-lg-4');
  // btnStart.classList.add('col-md-offset-1');
  // btnStart.innerHTML = 'Start';
  // timerFrame.appendChild(btnStart);
  // var btnStop = document.createElement('button');
  // btnStop.classList.add('btn');
  // btnStop.classList.add('btn-danger');
  // btnStop.classList.add('btn-lg');
  // btnStop.classList.add('col-lg-4');
  // btnStop.classList.add('col-md-offset-2');
  // btnStop.innerHTML = 'Stop';
  // timerFrame.appendChild(btnStop);
  // var wrapper = document.querySelector('.wrapper');
  // wrapper.appendChild(timerFrame);
  //
  //
  // btnStart.addEventListener('click', function(){
  //   btnStart.innerHTML = 'Pause';
  //   var startTime = Date.now();
  //   var timer = setInterval(function(){
  //     var deltaTime = Date.now() - startTime;
  //     console.log('ms using Date.now:', deltaTime);
  //   }, 1);
  // });






})();

(function () {
  'use strict';

  var hours, min, sec, ms, startCount, startTime, newDate;
  var pausedTime = 0;
  var state = !state;
  var Build = function () {
    this.createEl = function (name, tag, classList, text, type, value, action) {
      this.name = document.createElement(tag);
      this.name.className = classList;
      this.name.innerHTML = text;
      this.name.setAttribute('type', type);
      this.name.setAttribute('value', value);
      this.name.setAttribute('action', action);
      return this.name;
    };
    this.div = this.createEl('div', 'div', 'container text-center', '');
    this.box = this.createEl('box', 'div', 'screen card card-info', '');
    this.lineBox = this.createEl('lineBox', 'div', 'timer-box card card-default', '');
    this.line = this.createEl('line', 'div', 'timer-line card-info', '');
    this.hoursBlock = this.createEl('hoursBlock', 'div', 'hours card card-info', '');
    this.minutesBlock = this.createEl('minutesBlock', 'div', 'minutes card card-info', '');
    this.secondsBlock = this.createEl('secondsBlock', 'div', 'seconds card card-info', '');
    this.millisecondsBlock = this.createEl('millisecondsBlock', 'div', 'milliseconds card card-info', '');
    this.hoursText = this.createEl('hoursText', 'h2', '', '00');
    this.minutesText = this.createEl('minutesText', 'h2', '', '00');
    this.secondsText = this.createEl('secondsText', 'h2', '', '00');
    this.millisecondsText = this.createEl('millisecondsText', 'h2', '', '000');
    this.startButton = this.createEl('startButton', 'button', 'btn btn-secondary', 'Start', 'button');
    this.stopButton = this.createEl('stopButton', 'button', 'btn btn-danger', 'Stop', '', 'button');
    this.hoursLabel = this.createEl('hoursLabel', 'h6', '', 'Hours');
    this.minutesLabel = this.createEl('minutesLabel', 'h6', '', 'Minutes');
    this.secondsLabel = this.createEl('secondsLabel', 'h6', '', 'Seconds');
    this.millisecondsLabel = this.createEl('millisecondsLabel', 'h6', '', 'Milliseconds');
    this.form = this.createEl('form', 'form', '', '', '', '', 'index.html');
    this.generate = function () {
      document.body.appendChild(this.div);
      this.div.appendChild(this.box);
      this.div.appendChild(this.form);
      this.form.appendChild(this.startButton);
      this.form.appendChild(this.stopButton);
      this.box.appendChild(this.hoursBlock);
      this.box.appendChild(this.minutesBlock);
      this.box.appendChild(this.secondsBlock);
      this.box.appendChild(this.millisecondsBlock);
      this.hoursBlock.appendChild(this.hoursText);
      this.hoursBlock.appendChild(this.hoursLabel);
      this.minutesBlock.appendChild(this.minutesText);
      this.minutesBlock.appendChild(this.minutesLabel);
      this.secondsBlock.appendChild(this.secondsText);
      this.secondsBlock.appendChild(this.secondsLabel);
      this.millisecondsBlock.appendChild(this.millisecondsText);
      this.millisecondsBlock.appendChild(this.millisecondsLabel);
      this.div.appendChild(this.lineBox);
      this.lineBox.appendChild(this.line);
    };
    this.timer = function () {
      newDate = Date.now() - startTime + pausedTime;
      hours = Math.abs(Math.floor(newDate / 1000 / 60 / 60) % 24);
      min = min = Math.abs(Math.floor(newDate / 1000 / 60) % 60);
      sec = Math.abs(Math.floor(newDate / 1000) % 60);
      ms = Math.abs(Math.floor(newDate % 1000));
      this.hoursText.innerHTML = hours || '00';
      this.minutesText.innerHTML = min || '00';
      this.millisecondsText.innerHTML = ms || '000';
      this.line.style.width = sec + (sec + sec + sec) + 'px';
      this.startButton.addEventListener('click', this.start);
      this.stopButton.addEventListener('click', this.stop);
      this.secondsText.innerHTML = sec || '00';
      if (this.secondsText.innerHTML.length === 1) {
        sec = '0' + sec;
      }
      this.secondsText.innerHTML = sec || '00';
    }.bind(this);
    this.start = function () {
      this.timer();
      if(state) {
        state = !state;
        startTime = Date.now();
        startCount = setInterval(this.timer, 1);
        this.startButton.innerHTML = 'Pause';
      } else {
        state = !state;
        clearTimeout(startCount);
        startTime = 0;
        this.startButton.innerHTML = 'Continue';
        pausedTime = newDate;
      }
    }.bind(this);
    this.stop = function () {
      clearTimeout(startCount);
      newDate = 0;
      pausedTime = 0;
      this.startButton.innerHTML = 'Start';
      startTime = 0;
      pausedTime = newDate;
    }.bind(this);
  };

  var app = new Build();
  app.generate();
  app.timer();
})();

