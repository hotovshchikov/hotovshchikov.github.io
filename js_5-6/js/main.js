(function (){
  'use strict';

  // var id1 = setInterval(function() {
  //   var b = 0;
  //   console.log(b);
  // }, 1000);
  //
  // setTimeout(function(){
  //   clearInterval(id1);
  //   console.log('stop');
  // }, 5000);

  // var startTime = Date.now();
  //  var timer = setInterval(function(){
  //    var deltaTime = Date.now() - startTime;
  //    console.log('ms using Date.now:', deltaTime);
  //  }, 1000);

  var timerFrame = document.createElement('div');
  timerFrame.classList.add('container');
  // timerFrame.classList.add('col-md-offset-3');
  var timerDisplay = document.createElement('div');
  timerDisplay.classList.add('col-lg-12');
  // timerDisplay.classList.add('clearfix');
  timerFrame.appendChild(timerDisplay);
  var btnStart = document.createElement('button');
  btnStart.classList.add('btn');
  btnStart.classList.add('btn-success');
  btnStart.classList.add('btn-lg');
  btnStart.classList.add('col-lg-4');
  btnStart.classList.add('col-md-offset-1');
  btnStart.innerHTML = 'Start';
  timerFrame.appendChild(btnStart);
  var btnStop = document.createElement('button');
  btnStop.classList.add('btn');
  btnStop.classList.add('btn-danger');
  btnStop.classList.add('btn-lg');
  btnStop.classList.add('col-lg-4');
  btnStop.classList.add('col-md-offset-2');
  btnStop.innerHTML = 'Stop';
  timerFrame.appendChild(btnStop);
  var wrapper = document.querySelector('.wrapper');
  wrapper.appendChild(timerFrame);


  btnStart.addEventListener('click', function(){
    btnStart.innerHTML = 'Pause';
    var startTime = Date.now();
    var timer = setInterval(function(){
      var deltaTime = Date.now() - startTime;
      console.log('ms using Date.now:', deltaTime);
    }, 1);
  });




})();
